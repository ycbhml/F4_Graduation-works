import { Text, View, Button, Alert } from 'react-native';
import React, { Component } from 'react';
import { downloadZipFile, listFilesInDirectory } from '../../../tests/update_data';

export default class Event_event_screen extends Component {
  render() {

    // 处理更新逻辑并弹出弹窗
  const handleUpdate = async () => {
    try {
      // 调用更新函数
      downloadZipFile('14.19.1');
      listFilesInDirectory();
      // 更新成功时弹出成功弹窗
      Alert.alert('Update Success', 'Project has been updated successfully!');
    } catch (error) {
      // 如果更新失败，弹出错误弹窗
      Alert.alert('Update Failed', 'There was an error during the update.');
    }
  };

    return (
      <View>
        <Button
          title='aaa'
          onPress={handleUpdate} // 按钮按下时触发的函数
        />
      </View>
    )
  }
}






{/*
这是文件1：
import { Text, View, Button, Alert } from 'react-native';
import React, { Component } from 'react';
import { downloadZipFile } from '../../../tests/update_data';

export default class Event_event_screen extends Component {
  render() {

    // 处理更新逻辑并弹出弹窗
  const handleUpdate = async () => {
    const apiUrl = 'https://example.com/api/download-latest'; // 替换为你的实际API URL

    try {
      // 调用更新函数
      await updateProject(apiUrl);
      // 更新成功时弹出成功弹窗
      Alert.alert('Update Success', 'Project has been updated successfully!');
    } catch (error) {
      // 如果更新失败，弹出错误弹窗
      Alert.alert('Update Failed', 'There was an error during the update.');
    }
  };

    return (
      <View>
        <Button
          title='aaa'
          onPress={handleUpdate} // 按钮按下时触发的函数
        />
      </View>
    )
  }
}

这是文件2：
import RNFS from 'react-native-fs';  // 文件操作
import { unzip } from 'react-native-zip-archive';  // 解压ZIP文件

// 下载 ZIP 文件
async function downloadZipFile(version_, fileName) {
    const destinationPath = `${RNFS.DocumentDirectoryPath}/${fileName}.zip`;  // 下载到本地存储
    const apiUrl = `http://3.35.209.179:8000/data/version_check/?version=${version_}`;
    try {
        const downloadResult = await RNFS.downloadFile({
            fromUrl: apiUrl,  // 直接使用API URL进行下载
            toFile: destinationPath,  // 下载的文件保存路径
        }).promise;

        if (downloadResult.statusCode === 200) {
            console.log('ZIP file downloaded successfully:', destinationPath);
            return destinationPath;  // 返回ZIP文件的路径
        } else {
            throw new Error('Failed to download ZIP file');
        }
    } catch (error) {
        console.error('Error downloading ZIP file:', error);
        throw error;
    }
}

// 解压 ZIP 文件
async function unzipFile(zipFilePath, targetPath) {
    try {
        const unzippedPath = await unzip(zipFilePath, targetPath);
        console.log(`Unzipped successfully to: ${unzippedPath}`);
        return unzippedPath;  // 返回解压后的文件路径
    } catch (error) {
        console.error('Error unzipping file:', error);
        throw error;
    }
}

// 替换项目中的内容
async function replaceProjectFiles(sourceFolder, projectFolder) {
    try {
        const files = await RNFS.readDir(sourceFolder);  // 读取解压文件夹中的内容

        for (const file of files) {
            const destinationPath = `${projectFolder}/${file.name}`;  // 目标路径
            if (file.isFile()) {
                // 如果是文件，覆盖项目中的文件
                await RNFS.moveFile(file.path, destinationPath);
                console.log(`File moved to: ${destinationPath}`);
            } else if (file.isDirectory()) {
                // 如果是文件夹，递归替换
                await replaceProjectFiles(file.path, destinationPath);
            }
        }

        console.log('All files replaced successfully.');
    } catch (error) {
        console.error('Error replacing project files:', error);
        throw error;
    }
}

// 主函数：整合所有步骤
export async function updateProject(apiUrl) {
    try {
        // 1. 下载ZIP文件
        const zipFilePath = await downloadZipFile(apiUrl, 'update_package');

        // 2. 解压ZIP文件
        const targetPath = `${RNFS.DocumentDirectoryPath}/unzipped_files`;  // 解压目标文件夹
        const unzippedPath = await unzipFile(zipFilePath, targetPath);

        // 3. 替换项目中的内容
        const projectFolder = `${RNFS.DocumentDirectoryPath}/project_folder`;  // 项目文件夹路径
        await replaceProjectFiles(unzippedPath, projectFolder);

        console.log('Project updated successfully.');
    } catch (error) {
        console.error('Error updating project:', error);
    }
}

在文件1中引用了文件2的函数，但是为什么我在点击构筑的按钮后，提示  
*/}