
#将原画文件提取出来到一个新的文件夹中
#   原画路径：dragontail/img/champion/splash
#   提取路径：./hero_backgrounds


import os
import shutil

# 定义源目录（皮肤及原画的目录）和目标目录（hero_backgrounds 文件夹）
source_dir = '英雄及皮肤原画'  # 请根据你的目录结构调整此路径
target_dir = 'hero_backgrounds'

# 确保目标目录存在，如果不存在则创建
if not os.path.exists(target_dir):
    os.makedirs(target_dir)

# 遍历源目录中的文件
for root, dirs, files in os.walk(source_dir):
    for file in files:
        # 查找以 _0.jpg 结尾的文件
        if file.endswith('_0.jpg'):
            # 获取源文件的完整路径
            source_file_path = os.path.join(root, file)
            # 将文件复制到目标目录
            shutil.copy(source_file_path, target_dir)
            print(f"Copied {file} to {target_dir}")

print("All matching files have been copied.")
