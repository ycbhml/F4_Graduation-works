import RNFetchBlob from 'rn-fetch-blob'; // 引入 RNFetchBlob 处理下载
import RNFS from 'react-native-fs'; // 文件操作
import AsyncStorage from '@react-native-async-storage/async-storage'; // AsyncStorage
import { Alert } from 'react-native'; // 用于弹出消息框

// 使用 RNFetchBlob 进行断点续传的下载 ZIP 文件，并存储路径
export async function downloadZipFile(version_p) {

    const version_ =  version_p.replace(/\./g, '_');

    console.log(version_);

    const folderPath = `${RNFS.DocumentDirectoryPath}/update_data`; // 目标文件夹路径
    const destinationPath = `${folderPath}/DataDragon_${version_}.zip`;  // 下载到指定位置
    const tmpFilePath = `${destinationPath}.tmp`;  // 临时文件路径

    // 确保文件夹存在
    await RNFS.mkdir(folderPath);  // 创建文件夹（如果不存在）

    const apiUrl = `http://3.35.209.179:8000/data/version_check/?version=${version_p}`;
    console.log(apiUrl);

    let preSize = 0;
    // 检查是否有部分文件已下载（用于断点续传）
    if (await RNFS.exists(destinationPath)) {
        const fileStat = await RNFS.stat(destinationPath);
        preSize = fileStat.size;  // 已下载的文件大小
    }

    console.log('while run try');

    try {
        const downloadResult = await RNFetchBlob.config({
            path: tmpFilePath,  // 临时文件路径
            fileCache: true,    // 启用文件缓存，确保文件流式下载
        })
        .fetch('GET', apiUrl, {
            Range: `bytes=${preSize}-`,  // 断点续传：从未下载的部分开始下载
        })
        .progress((received, total) => {
            console.log('progress', received / total);  // 打印下载进度
        });

        console.log("download done.");
        // 下载完成后，合并临时文件到正式文件
        if (await RNFS.exists(tmpFilePath)) {
            if (await RNFS.exists(destinationPath)) {
                // 追加临时文件内容到目标文件
                await RNFS.appendFile(destinationPath, tmpFilePath);  // 不传入 'uri' 参数
            } else {
                // 如果目标文件不存在，直接将临时文件移动为正式文件
                await RNFS.moveFile(tmpFilePath, destinationPath);
            }

            // 删除临时文件
            await RNFS.unlink(tmpFilePath);
        }

        console.log('ZIP file downloaded and merged successfully:', destinationPath);
        // 存储下载的文件路径到 AsyncStorage
        await AsyncStorage.setItem('downloadedZipPath', destinationPath);
        Alert.alert('Download Success', 'ZIP file downloaded successfully!');
        return destinationPath;  // 返回ZIP文件的路径

    } catch (error) {
        console.log("error")
        console.error('Error downloading ZIP file:', error);
        Alert.alert('Download Failed', 'Error downloading ZIP file.');
        throw error;
    }
}

// 从 AsyncStorage 中获取下载的文件路径
async function getDownloadedZipPath() {
    try {
        const path = await AsyncStorage.getItem('downloadedZipPath');
        if (path !== null) {
            console.log('Downloaded ZIP path:', path);
            return path;
        }
    } catch (error) {
        console.error('Error retrieving downloaded path:', error);
    }
    return null;
}

// 使用示例
async function updateProject(version_) {
    const downloadedPath = await downloadZipFile(version_);
    // 你可以在这里调用解压和替换文件的逻辑
}

export { updateProject, getDownloadedZipPath };


export async function listFilesInDirectory() {
    const folderPath = `${RNFS.DocumentDirectoryPath}/update_data`;
    
    try {
        const files = await RNFS.readDir(folderPath);
        files.forEach(file => {
            console.log('File:', file.name);
        });
    } catch (error) {
        console.error('Error reading directory:', error);
    }
}

// 调用函数以列出文件
listFilesInDirectory();