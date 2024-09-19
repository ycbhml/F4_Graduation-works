import os
import re

# 设置要处理的目录路径
directory = 'C:\\Users\\YAOZHIXUE\\Desktop\\WORK\\传说合成路径'  # 替换为你的文件目录路径

# 遍历目录中的所有文件
for filename in os.listdir(directory):
    # 使用正则表达式去除文件名中的数字
    new_name = re.sub(r'\d+', '', filename)
    
    # 获取完整路径
    old_file = os.path.join(directory, filename)
    new_file = os.path.join(directory, new_name)
    
    # 重命名文件
    os.rename(old_file, new_file)

print("文件名中的数字已成功移除。")