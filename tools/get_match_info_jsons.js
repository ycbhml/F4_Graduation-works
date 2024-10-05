//使用方法
//
//async function main(puuid, folderName, limit) {
//   const folderPath = path.join('./', folderName); // 使用folderName动态生成路径
//    const matchIds = await fetch100MatchIds(puuid); // 获取100个match_id
//    await fetchAndSaveFilteredMatches(matchIds, folderPath, limit); // 只保存符合条件的比赛
//}
//
//  需要输入的：puuid，folderName（in game name），limit（最大文件数量限制，0 < limit < 100），folderPath（自定义路径，参考开头一行）
//
//const puuid = 'aCvzEqCfDXTGfMPYFFMLi6k3jY5zqDfTLYABWxI9OAWXvNgQLi38AXtMjHrdPMU349VDc-EgPcfppA'; // 在这里替换为实际的puuid
//const folderName = '연습중oooooooooo'; // 在这里替换为你想创建的文件夹名
//const limit = 20; // 设置保存比赛的个数
//main(puuid, folderName, limit);



const fs = require('fs'); // 引入Node.js的文件系统模块
const path = require('path'); // 引入path模块处理路径

// 定义一个函数来获取100个match_id
async function fetch100MatchIds(puuid) {
    const apiUrl = `http://3.35.209.179:8000/api/get-matchids-by-puuid/${puuid}`;
    
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        // 确保数据格式正确并提取前100个match_ids
        if (data && data.data && data.data.match_ids) {
            return data.data.match_ids.slice(0, 100);
        } else {
            throw new Error('Invalid data format');
        }
    } catch (error) {
        console.error('Error fetching match ids:', error);
        return [];
    }
}


// 定义一个函数来删除文件夹中的所有内容
function clearFolder(folderPath) {
    if (fs.existsSync(folderPath)) {
        fs.readdirSync(folderPath).forEach((file) => {
            const currentPath = path.join(folderPath, file);
            if (fs.lstatSync(currentPath).isDirectory()) {
                // 递归删除子文件夹中的内容
                clearFolder(currentPath);
                fs.rmdirSync(currentPath); // 删除子文件夹
            } else {
                fs.unlinkSync(currentPath); // 删除文件
            }
        });
        console.log(`Folder ${folderPath} has been cleared.`);
    }
}


// 定义一个函数来获取match详情并只保存mapID为11的比赛
async function fetchAndSaveFilteredMatches(matchIds, folderPath, limit) {
    
    // 先清空文件夹
    clearFolder(folderPath);

    // 确保文件夹存在
    if (!fs.existsSync(folderPath)) {
        fs.mkdirSync(folderPath); // 创建文件夹
    }

    let savedCount = 0; // 已保存的符合条件的比赛计数

    try {
        for (let matchId of matchIds) {
            if (savedCount >= limit) {
                break; // 达到限制个数后停止
            }

            const apiUrl = `http://3.35.209.179:8000/api/get-full-match-detail/${matchId}`;
            const response = await fetch(apiUrl);
            const matchDetail = await response.json();

            // 检查mapId是否为11
            if (matchDetail.info && matchDetail.info.mapId === 11) {
                const filePath = path.join(folderPath, `${matchId}_11.json`);
                fs.writeFileSync(filePath, JSON.stringify(matchDetail, null, 2), 'utf8');
                console.log(`Saved match detail with mapId 11: ${filePath}`);
                savedCount++;
            }
        }
    } catch (error) {
        console.error('Error fetching or saving match details:', error);
    }

    console.log(`Total saved matches: ${savedCount}`);
}


{/*
//test function

// 主函数：获取100个match_id，筛选符合条件的比赛并保存
async function main(puuid, folderName, limit) {
    const folderPath = path.join('./', folderName); // 使用folderName动态生成路径
    const matchIds = await fetch100MatchIds(puuid); // 获取100个match_id
    await fetchAndSaveFilteredMatches(matchIds, folderPath, limit); // 只保存符合条件的比赛
}

// 调用主函数，传入puuid、自定义文件夹名、保存比赛的限制个数
const puuid = 'aCvzEqCfDXTGfMPYFFMLi6k3jY5zqDfTLYABWxI9OAWXvNgQLi38AXtMjHrdPMU349VDc-EgPcfppA'; // 在这里替换为实际的puuid
const folderName = '연습중oooooooooo'; // 在这里替换为你想创建的文件夹名
const limit = 20; // 设置保存比赛的个数
main(puuid, folderName, limit);

*/}