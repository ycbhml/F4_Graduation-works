import json
import re

# 函数：去除字符串中的 HTML 标签
def remove_html_tags(text):
    # 使用正则表达式去除 <b>...</b> 和 <i>...</i> 等 HTML 标签
    clean_text = re.sub(r'<\/?[^>]+>', '', text)
    return clean_text

# 读取 runesReforged.json 文件
with open('runesReforged.json', 'r', encoding='utf-8') as file:
    runes_data = json.load(file)

# 构建 JavaScript 代码
js_code = "// src/components/LOL/LOL_runes.js\n\n"
js_code += "export const RUNES_DATA = [\n"

for rune in runes_data:
    key = rune['key']  # 对应 filter 属性
    for slot in rune['slots']:
        for rune_detail in slot['runes']:
            name = rune_detail['key']  # 对应 name 属性
            name_kr = rune_detail['name']  # 对应 name_kr 属性
            description = remove_html_tags(rune_detail['shortDesc'])  # 对应 description 属性，去除 HTML 标签
            js_code += f"    {{\n"
            js_code += f"        filter: '{key}',\n"
            js_code += f"        name: '{name}',\n"
            js_code += f"        name_kr: '{name_kr}',\n"
            js_code += f"        description: `{description}`,\n"
            js_code += f"        image: require('../../assets/lol_runes/{key}/{name}.png')\n"
            js_code += f"    }},\n"

js_code += "];\n\n"
js_code += "export const filterRunesByType = (type) => {\n"
js_code += "    return RUNES_DATA.filter(rune => rune.filter === type);\n"
js_code += "};"

# 保存为 JS 文件
with open('LOL_runes.js', 'w+', encoding='utf-8') as js_file:
    js_file.write(js_code)

print("JavaScript file has been generated successfully.")
