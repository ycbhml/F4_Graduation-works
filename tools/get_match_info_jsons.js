import RNFS from 'react-native-fs'; // 引入react-native-fs

// 定义一个函数来获取100个match_id
export async function fetch100MatchIds(puuid) {
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

// 定义一个函数来检测文件夹是否存在并创建
export async function checkAndCreateFolder(folderPath) {
    const folderExists = await RNFS.exists(folderPath);

    if (!folderExists) {
        await RNFS.mkdir(folderPath); // 创建文件夹
        console.log(`Created folder at: ${folderPath}`);
    }
}

// 定义一个函数来获取match详情并只保存mapID为11的比赛
export async function fetchAndSaveFilteredMatches(puuid, folderName, limit = 100) {
    const folderPath = `${RNFS.DocumentDirectoryPath}/${puuid}`; // 使用puuid动态生成路径

    // 检查并创建文件夹
    await checkAndCreateFolder(folderPath);

    // 读取文件夹内容，检查是否有已保存的比赛文件
    const files = await RNFS.readDir(folderPath);
    if (files.length > 0) {
        console.log('文件夹中已有保存的比赛信息，跳过重新获取。');
        return; // 如果已经有数据，直接跳过
    }

    // 没有数据，获取最近100场比赛ID
    const matchIds = await fetch100MatchIds(puuid);

    let savedCount = 0; // 已保存的符合条件的比赛计数

    try {
        for (let matchId of matchIds) {
            if (savedCount >= limit) {
                break; // 达到限制个数后停止
            }

            const apiUrl = `http://3.35.209.179:8000/api/get-match-detail-by-matchid/${matchId}/${puuid}`;
            const response = await fetch(apiUrl);
            const matchDetail = await response.json();
            console.log("json",matchDetail);

            // 检查 mapId 是否为11
            if (matchDetail.match_summary && matchDetail.match_summary.mapId === 11) {
                const filePath = `${folderPath}/${matchId}_${puuid}_11.json`;
                await RNFS.writeFile(filePath, JSON.stringify(matchDetail, null, 2), 'utf8');
                console.log(`Saved match detail with mapId 11: ${filePath}`);
                savedCount++;
            }
        }
    } catch (error) {
        console.error('Error fetching or saving match details:', error);
    }

    console.log(`Total saved matches: ${savedCount}`);
}

// 获取单个对局详细信息

export async function get_match_full_detail(matchid, puuid) {
    console.log('函数内macthid',matchid);
    try {
        const response = await fetch(`http://3.35.209.179:8000/api/get-full-match-detail/${matchid}/`);
        const data = await response.json();
        return data; // 返回 JSON 数据
    } catch (error) {
        console.error('Error fetching match details:', error);
        throw error; // 抛出错误以供调用者处理
    }
}
export async function version_check() {

try {
        const response = await fetch(`http://3.35.209.179:8000/data/version_check/`);
        const data = await response.json();
        console.log("function version",data);
        return data; // 返回 JSON 数据
    } catch (error) {
        console.error('Error fetching match details:', error);
        throw error; // 抛出错误以供调用者处理
    }
}


