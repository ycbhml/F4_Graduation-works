// CdragonDataContext.js
import React, { createContext, useState, useEffect, useContext } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const CdragonDataContext = createContext();

export const useCdragonData = () => {
    return useContext(CdragonDataContext);
};

export const CdragonDataProvider = ({ shortVersion, children }) => {
    const [cdragonData, setCdragonData] = useState(null);
    const [loading, setLoading] = useState(true);
    const storageKey = `cdragonData_${shortVersion}`;

    useEffect(() => {
        const fetchAndCacheCdragonData = async () => {
            // 检查 shortVersion 是否有效
            if (!shortVersion) {
                console.warn("shortVersion is not defined, skipping fetch.");
                return;
            }

            try {
                console.log("Using shortVersion:", shortVersion);

                // 尝试从缓存读取数据
                const cachedData = await AsyncStorage.getItem(storageKey);
                if (cachedData) {
                    setCdragonData(JSON.parse(cachedData));
                    console.log("Loaded cdragonData from cache.");
                    setLoading(false);
                    return;
                }

                // 如果缓存中没有数据，则从网络请求数据
                const url = `https://raw.communitydragon.org/${shortVersion}/cdragon/tft/ko_kr.json`;
                console.log("Fetching cdragonData from URL:", url); // 输出请求 URL
                const response = await fetch(url);

                // 检查响应状态码
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }

                // 尝试解析 JSON 数据
                const data = await response.json();

                // 缓存数据并更新状态
                await AsyncStorage.setItem(storageKey, JSON.stringify(data));
                setCdragonData(data);
                console.log("Fetched and cached cdragonData.");
            } catch (error) {
                console.error("Error fetching cdragonData:", error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchAndCacheCdragonData();
    }, [shortVersion]);

    return (
        <CdragonDataContext.Provider value={{ cdragonData, loading }}>
            {children}
        </CdragonDataContext.Provider>
    );
};
