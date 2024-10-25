import AsyncStorage from '@react-native-async-storage/async-storage';
import RNFS from 'react-native-fs';
import { fetchZipFromApi, downloadZipFile, unzipFile, moveFileToFolder } from './update_data';

// 获取当前应用的版本号（从API获取）
async function checkVersion() {
    const apiUrl = 'https://example.com/api/version';  // 替换为版本号API
    try {
        const response = await fetch(apiUrl);
        if (!response.ok) throw new Error('Failed to fetch version');
        const data = await response.json();
        return data.version; // 假设API返回一个包含版本号的JSON数据
    } catch (error) {
        console.error('Error fetching version:', error);
        throw error;
    }
}

// 从本地存储获取已保存的版本号
async function getLocalVersion() {
    try {
        const version = await AsyncStorage.getItem('appVersion');
        return version;
    } catch (error) {
        console.error('Error reading local version:', error);
        return null;
    }
}

// 更新本地版本号
async function updateLocalVersion(newVersion) {
    try {
        await AsyncStorage.setItem('appVersion', newVersion);
        console.log('Local version updated to:', newVersion);
    } catch (error) {
        console.error('Error updating local version:', error);
    }
}

// 主函数：检测版本号并更新文件
async function checkAndUpdate() {
    try {
        const latestVersion = await checkVersion();  // 获取最新版本号
        const localVersion = await getLocalVersion();  // 获取本地版本号

        if (localVersion !== latestVersion) {
            console.log(`Version mismatch: Local(${localVersion}) vs Latest(${latestVersion}). Updating...`);

            // 从API获取ZIP文件URL
            const zipUrl = await fetchZipFromApi('userInput');
            // 下载ZIP文件
            const zipPath = await downloadZipFile(zipUrl, 'latest_update');
            // 解压文件
            const unzipPath = await unzipFile(zipPath, `${RNFS.DocumentDirectoryPath}/unzipped`);

            // 移动解压后的文件到不同的文件夹
            await moveFileToFolder(`${unzipPath}/folder1`, `${RNFS.DocumentDirectoryPath}/destination1`);
            await moveFileToFolder(`${unzipPath}/folder2`, `${RNFS.DocumentDirectoryPath}/destination2`);

            // 更新本地版本号
            await updateLocalVersion(latestVersion);
        } else {
            console.log('App is up to date.');
        }
    } catch (error) {
        console.error('Error during version check and update:', error);
    }
}

// 将这个函数放在应用启动时运行
checkAndUpdate();
