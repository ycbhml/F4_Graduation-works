import RNFS from 'react-native-fs'; // 引入react-native-fs

// 定义一个函数来获取100个match_id
export async function fetch100MatchIds(puuid) {
    const apiUrl = `http://3.35.209.179:8000/api/get-matchids-by-puuid/${puuid}`;

    // 检查 puuid 格式是否有效
    if (!puuid || typeof puuid !== 'string' || puuid.trim() === '') {
        console.error("Invalid puuid provided:", puuid);
        return [];
    }

    try {
        console.log("Requesting match ids with URL:", apiUrl);
        const response = await fetch(apiUrl);
        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(`HTTP error! status: ${response.status}, message: ${errorText}`);
        }
        const data = await response.json();
        console.log("Fetched match ids response:", data);

        // 确保数据格式正确并提取前100个match_ids
        if (data && data.data && data.data.match_ids) {
            return data.data.match_ids.slice(0, 100);
        } else {
            console.error("Invalid match_ids format:", data);
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

// 从本地文件夹加载比赛数据
export async function loadMatchesFromLocal(folderPath) {
    try {
        const files = await RNFS.readDir(folderPath);
        const matches = [];

        for (const file of files) {
            try {
                const fileContent = await RNFS.readFile(file.path, 'utf8');
                const parsedContent = JSON.parse(fileContent);
                matches.push(parsedContent);
                console.log("Loaded match from file:", file.path);
            } catch (error) {
                console.error(`Error reading or parsing file ${file.name}:`, error);
            }
        }
        return matches; // 返回已保存的本地比赛数据
    } catch (error) {
        console.error('Error loading matches from local folder:', error);
        return [];
    }
}

// 定义懒加载函数并保存match详情，筛选mapID为11和12的比赛，每次加载5个
export async function fetchAndSaveFilteredMatchesLazy(puuid, folderName, startIndex = 0, batchSize = 5) {
    const folderPath = `${RNFS.DocumentDirectoryPath}/${puuid}`; // 使用puuid动态生成路径
    let savedMatches = [];

    // 检查并创建文件夹
    await checkAndCreateFolder(folderPath);

    // 获取本地文件中的match ids
    const existingFiles = await RNFS.readDir(folderPath);
    const existingMatchIds = existingFiles.map(file => file.name.split('_')[0]);

    // 没有数据，获取最近100场比赛ID
    console.log("Fetching match IDs for puuid:", puuid);
    const matchIds = await fetch100MatchIds(puuid);
    console.log("Fetched match IDs:", matchIds);

    try {
        for (let i = startIndex; i < matchIds.length && savedMatches.length < batchSize; i++) {
            const matchId = matchIds[i];

            // 检查是否已存在本地
            if (existingMatchIds.includes(matchId)) {
                console.log(`Match ${matchId} already saved locally.`);
                continue; // 已经存在的比赛跳过
            }

            const apiUrl = `http://3.35.209.179:8000/api/get-match-detail-by-matchid/${matchId}/${puuid}`;
            try {
                const response = await fetch(apiUrl);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const matchDetail = await response.json();
                console.log("Fetched match detail for matchId:", matchId, matchDetail);

                // 检查 mapId 是否为 11 或 12
                if (matchDetail && matchDetail.match_summary) {
                    const mapId = matchDetail.match_summary.mapId;

                    if (mapId === 11 || mapId === 12) {
                        const filePath = `${folderPath}/${matchId}_${puuid}_${mapId}.json`;
                        await RNFS.writeFile(filePath, JSON.stringify(matchDetail, null, 2), 'utf8');
                        savedMatches.push(matchDetail);
                        console.log(`Saved match detail with mapId ${mapId}: ${filePath}`);
                    } else {
                        console.log(`Skipped match with mapId ${mapId}`);
                    }
                } else {
                    console.error("Invalid match detail format:", matchDetail);
                }
            } catch (error) {
                console.error('Error fetching or saving match details:', error);
            }
        }
    } catch (error) {
        console.error('Error during match fetching loop:', error);
    }

    console.log(`Loaded ${savedMatches.length} new matches`);
    return savedMatches;
}

// 获取单个对局详细信息
export async function get_match_full_detail(matchid, puuid) {
    console.log('Fetching full match detail for matchId:', matchid);
    try {
        const response = await fetch(`http://3.35.209.179:8000/api/get-full-match-detail/${matchid}/`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log("Fetched full match detail:", data);
        return data; // 返回 JSON 数据
    } catch (error) {
        console.error('Error fetching match details:', error);
        throw error; // 抛出错误以供调用者处理
    }
}

// 版本检查
export async function version_check() {
    try {
        const response = await fetch(`http://3.35.209.179:8000/data/version_check/`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log("Fetched version data:", data);
        return data; // 返回 JSON 数据
    } catch (error) {
        console.error('Error fetching version:', error);
        throw error; // 抛出错误以供调用者处理
    }
}
