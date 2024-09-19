import json
import re

# 函数：去除字符串中的 HTML 标签
def remove_html_tags(text):
    # 使用正则表达式去除 HTML 标签
    clean_text = re.sub(r'<\/?[^>]+>', '', text)
    return clean_text

# 函数：提取数字和属性名称
def extract_stats(description):
    # 正则表达式匹配 <attention>数值</attention>属性名称
    pattern = r'<attention>([\d.]+%?)<\/attention>([^<\n\r]+)'
    matches = re.findall(pattern, description)
    
    # 提取数值和属性名称
    values = [match[0].strip() for match in matches]
    names = [match[1].strip() for match in matches]
    return values, names

# 函数：根据 stat_names 确定 filter 属性
def determine_filter(stat_names):
    stat_name_eng = {
        "攻击力": "attackdamage",
        "法术强度": "spelldamage",
        "生命值": "hp",
        "法力": "mp",
        "护甲": "armor",
        "魔法抗性": "spellblock",
        "技能急速": "cd",
        "暴击几率": "crit",
        "攻击速度": "attackspeed",
        "移动速度": "movespeed",
        "基础生命回复": "hpregen",
        "基础法力回复": "mpregen",
        "治疗和护盾强度": "heal&shildlevel",
        "穿甲": "armorpenetrate",
        "护甲穿透": "armorpenetratePercent",
        "法术穿透": "spellblockpenetrate",
        "生命偷取": "lifesteal",
        "全能吸血": "bloodsucking",
        "攻击距离": "attackrange",
        "韧性": "tenacity"
    }
    
    # 为每个 stat_name 找到对应的英文属性名称
    filters = [stat_name_eng.get(stat_name, "none") for stat_name in stat_names]
    return filters

# filter by is from
def filter_is_from(item_info):
    return "none" if not item_info.get("from") else f"require('../../assets/lol_items/into/{item_info['name']}.png')"

# 函数：获取所有唯一的 tags
def get_all_unique_tags(cn_data):
    unique_tags = set()
    for item_id, item_info in cn_data['data'].items():
        tags = item_info.get('tags', [])
        unique_tags.update(tags)
    return list(unique_tags)

# 读取 JSON 文件
with open('item_CN.json', 'r', encoding='utf-8') as cn_file:
    cn_data = json.load(cn_file)

with open('item_KR.json', 'r', encoding='utf-8') as kr_file:
    kr_data = json.load(kr_file)

# 获取所有唯一的 tags
all_tags = get_all_unique_tags(cn_data)

# 要排除的物品 ID 列表
excluded_ids = ["3400", "1500", "1501", "1502", "1503", "1506", "1507", "1508","1522", "1521", "1520", "1519", "1518", "1517", "1516", "1515","1512", "1511", "1510", "1509",     #防御塔，小兵相关
                "4641", "2052", "2403", "3117", "3330", "3599", "3600", #萌动眼石，魄罗佳肴，小兵去致器，急行之靴，草间人，卡莉斯塔的黑色长矛，卡莉斯塔的黑色长矛
                "3901", "3902", "3903", "7050", #船长相关
]

# 构建 JavaScript 代码
js_code = "// src/components/LOL/LOL_items.js\n"
js_code += f"//{all_tags}\n\n"
js_code += "export const ITEMS_DATA = [\n"

# 遍历中文数据，找到每个物品的韩文数据并提取信息
for item_id, item_info in cn_data['data'].items():
    # 跳过排除列表中的物品
    if item_id in excluded_ids:
        continue

    # 筛选地图池
    if item_info["maps"]["11"] == True:
        if item_id in kr_data['data']:
            kr_info = kr_data['data'][item_id]

            # 提取信息
            cn_name = item_info['name']  # 中文名称
            kr_name = kr_info['name']  # 韩文名称
            kr_description = kr_info['description']  # 韩文描述
            clean_kr_description = remove_html_tags(kr_description)  # 去除 HTML 标签的韩文描述
            buy_price = item_info['gold']['total']  # 购入价格
            sell_price = item_info['gold']['sell']  # 出售价格
            image_path = f"require('../../assets/lol_items/{item_info['name']}.png')"  # 图片路径
            
            # 使用过滤函数确定 into_image_path
            into_image_path = filter_is_from(item_info)

            # 提取描述中的数值和属性名称
            stat_values, stat_names = extract_stats(item_info['description'])
            
            # 获取对应的英文属性名称列表
            stats_eng = determine_filter(stat_names)

            js_code += f"    {{\n"
            js_code += f"        id: '{item_id}',\n"
            js_code += f"        buyPrice: {buy_price},\n"
            js_code += f"        sellPrice: {sell_price},\n"
            js_code += f"        image: {image_path},\n"
            js_code += f"        into_image: {into_image_path},\n"
            js_code += f"        description_kr: `{clean_kr_description}`,\n"
            js_code += f"        name_cn: '{cn_name}',\n"
            js_code += f"        name_kr: '{kr_name}',\n"
            js_code += f"        statValues: {stat_values},\n"
            js_code += f"        statNames: {stat_names},\n"
            js_code += f"        statNames_eng: {stats_eng},\n"
            js_code += f"        tags: {item_info['tags']}\n"
            js_code += f"    }},\n"

js_code += "];\n\n"

js_code += "export const filterIconsByName = (name) => {\n"
js_code += "    return ICON_DATA.filter((item) => item.name.toLowerCase().includes(name.toLowerCase()))\n"
js_code += " };\n\n"

js_code += "export const filterIconsByTags = (tags) => {\n"
js_code += "    return ICON_DATA.filter((item) => item.tags.toLowerCase().includes(tags.toLowerCase()))\n"
js_code += " };\n"

# 保存为 JS 文件
with open('LOL_items.js', 'w+', encoding='utf-8') as js_file:
    js_file.write(js_code)

print("Done.")
