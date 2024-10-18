import React, { createContext, useState, useEffect, useContext } from 'react';
import { version_check } from '../tools/get_match_info_jsons'; // 这里替换成你的 version_check 函数

// 创建一个 Context
const VersionContext = createContext();

// 创建一个 Provider 组件来管理和提供版本号
export const VersionProvider = ({ children }) => {
    const [version, setVersion] = useState(null);

    useEffect(() => {
        version_check().then(data => {
            if (data && data.version) {
                setVersion(data.version);
            }
        }).catch(error => {
            console.error('Error fetching version:', error);
        });
    }, []); // 空依赖数组，表示只在挂载时调用

    return (
        <VersionContext.Provider value={version}>
            {children}
        </VersionContext.Provider>
    );
};

// 自定义 Hook 用于方便地获取版本号
export const useVersion = () => useContext(VersionContext);
