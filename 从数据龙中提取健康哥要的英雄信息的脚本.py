import json
import os

# 读取JSON文件
with open('championFull.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

# 创建用于保存提取数据的新字典
extracted_data = {}

numId = 1

# 提取每个英雄的指定信息
for champion_name, champion_data in data['data'].items():
    # 保存提取的信息
    extracted_data[champion_name] = {
        "numID": numId,
        "id": champion_data['id'],
        "name": champion_data['name'],
        "title": champion_data['title'],
        "lore": champion_data['lore'],
        "blurb": champion_data['blurb'],
        "image": "require('../../assets/lol_hero_icon/" + champion_data['image']['full']  + "')",
        "stats": {
            "hp": champion_data['stats']['hp'],
            "hpperlevel": champion_data['stats']['hpperlevel'],
            "mp": champion_data['stats']['mp'],
            "mpperlevel": champion_data['stats']['mpperlevel'],
            "movespeed": champion_data['stats']['movespeed'],
            "armor": champion_data['stats']['armor'],
            "armorperlevel": champion_data['stats']['armorperlevel'],
            "spellblock": champion_data['stats']['spellblock'],
            "spellblockperlevel": champion_data['stats']['spellblockperlevel'],
            "attackrange": champion_data['stats']['attackrange'],
            "hpregen": champion_data['stats']['hpregen'],
            "hpregenperlevel": champion_data['stats']['hpregenperlevel'],
            "mpregen": champion_data['stats']['mpregen'],
            "mpregenperlevel": champion_data['stats']['mpregenperlevel'],
            "crit": champion_data['stats']['crit'],
            "critperlevel": champion_data['stats']['critperlevel'],
            "attackdamage": champion_data['stats']['attackdamage'],
            "attackdamageperlevel": champion_data['stats']['attackdamageperlevel'],
            "attackspeedperlevel": champion_data['stats']['attackspeedperlevel'],
            "attackspeed": champion_data['stats']['attackspeed']
        },
        "spells": [
            {
                "id": spell['id'],
                "name": spell['name'],
                "description": spell['description'],
                #技能的详细介绍
                # "tooltip": spell['tooltip'],
                "cooldownBurn": spell['cooldownBurn'],
                #技能的消耗
                #"cost": spell['cost'],
                "image": "require('../../assets/lol_hero_icon/skills/" + spell['image']['full'] + "')"
            }
            for spell in champion_data['spells']
        ]
    }
    numId += 1

# 保存到新的 JSON 文件
output_file_path = "hero_info_half.json"
with open(output_file_path, 'w+', encoding='utf-8') as f_out:
    json.dump(extracted_data, f_out, ensure_ascii=False, indent=4)

print(f"提取的数据已保存到 {output_file_path}")



#以下是把分路写进json的脚本 前后顺序不能乱


# 读取txt文件内容
with open('分路.txt', 'r', encoding='utf-8') as txt_file:
    txt_lines = txt_file.readlines()

# 读取json文件内容
with open('hero_info_half.json', 'r', encoding='utf-8') as json_file:
    data = json.load(json_file)

# 遍历json文件中的所有对象
for champion, details in data.items():
    # 获取当前对象的id
    champion_id = details.get('id')
    
    # 在txt文件中搜索对象id是否存在，并找到对应的行
    for line in txt_lines:
        if champion_id in line:
            # 如果找到对应的行，将json中的"id"字段修改为txt文件中的完整匹配项
            new_id = line.strip()  # 去除换行符
            data[champion]['id'] = new_id
            break



# 将修改后的内容写回json文件
with open("hero_info.json", 'w', encoding='utf-8') as json_output:
    json.dump(data, json_output, ensure_ascii=False, indent=4)

