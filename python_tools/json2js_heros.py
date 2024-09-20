import json
import re

# 函数：去除字符串中的 HTML 标签
def remove_html_tags(text):
    # 使用正则表达式去除 HTML 标签
    clean_text = re.sub(r'<\/?[^>]+>', '', text)
    return clean_text

# 函数：读取 hero_road.txt 并生成角色分路信息字典
def read_hero_road():
    hero_road_map = {}
    with open('hero_road.txt', 'r', encoding='utf-8') as file:
        for line in file:
            line = line.strip()
            if line:
                # 角色名称和分路信息格式示例：Fiddlesticks_mid_sup
                parts = line.split('_')
                champion_name = parts[0]
                hero_road_map[champion_name] = line  # 用整个分路信息作为角色的 id
    return hero_road_map

# 函数：读取 championFull.json 并生成 JavaScript 文件
def generate_js_from_champion_full(hero_road_map):
    # 读取 championFull.json 文件
    with open('championFull.json', 'r', encoding='utf-8') as f:
        data = json.load(f)

    # 生成 JavaScript 代码
    js_code = "// src/components/LOL/LOL_heroes.js\n\n"
    js_code += "export const HERO_DATA = [\n"

    numId = 1  # 用于生成 numID
    for champion_name, champion_data in data['data'].items():

        img_path = f"require('../../assets/lol_hero_icons/{champion_data['image']['full']}')"
        background_img_path = f"require('../../assets/lol_hero_icons/background/{champion_data['id']}.jpg')"

        champion_id = hero_road_map.get(champion_name, champion_data['id'])

        js_code += f"    {{\n"
        js_code += f"        numID: {numId},\n"
        js_code += f"        id: '{champion_id}',\n"
        js_code += f"        Key: '{champion_data['key']}',\n"
        js_code += f"        name: '{champion_data['name']}',\n"
        js_code += f"        title: '{champion_data['title']}',\n"
        js_code += f"        lore: `{remove_html_tags(champion_data['lore'])}`,\n"
        js_code += f"        blurb: `{remove_html_tags(champion_data['blurb'])}`,\n"
        js_code += f"        image: {img_path},\n"
        js_code += f"        background_image: {background_img_path},\n"
        js_code += f"        stats: {json.dumps(champion_data['stats'])},\n"
        js_code += f"        spells: [\n"

        # 添加 passive 技能作为第一个技能
        if 'passive' in champion_data:
            passive_img_path = f"require('../../assets/lol_hero_icons/skills/{champion_data['passive']['image']['full']}')"
            js_code += f"            {{\n"
            js_code += f"                id: 'passive',\n"
            js_code += f"                name: '{champion_data['passive']['name']}',\n"
            js_code += f"                description: `{remove_html_tags(champion_data['passive']['description'])}`,\n"
            js_code += f"                cooldownBurn: 'none',\n"
            js_code += f"                image: {passive_img_path}\n"
            js_code += f"            }},\n"

        # 添加其他技能
        for spell in champion_data['spells']:
            skill_img_path = f"require('../../assets/lol_hero_icons/skills/{spell['image']['full']}')"

            js_code += f"            {{\n"
            js_code += f"                id: '{spell['id']}',\n"
            js_code += f"                name: '{spell['name']}',\n"
            js_code += f"                description: `{remove_html_tags(spell['description'])}`,\n"
            js_code += f"                cooldownBurn: '{spell['cooldownBurn']}',\n"
            js_code += f"                image: {skill_img_path}\n"
            js_code += f"            }},\n"

        js_code += f"        ],\n"

        js_code += f"    }},\n"
        numId += 1

    js_code += "];\n\n"

    # 添加过滤器函数
    js_code += "export const filterHeroesByName = (name) => {\n"
    js_code += "    return HERO_DATA.filter((hero) => hero.name.toLowerCase().includes(name.toLowerCase()));\n"
    js_code += "};"

    # 保存 JavaScript 文件
    with open('LOL_hero_icons.js', 'w+', encoding='utf-8') as js_file:
        js_file.write(js_code)

    print("Done")

# 主函数：调用生成 JavaScript 文件
def main():
    # 读取英雄分路信息
    hero_road_map = read_hero_road()

    # 生成 JavaScript 文件并整合分路信息
    generate_js_from_champion_full(hero_road_map)

if __name__ == "__main__":
    main()
