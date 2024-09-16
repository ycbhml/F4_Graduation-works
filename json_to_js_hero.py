import json

# Load the hero_info.json file
with open('hero_info.json', 'r', encoding='utf-8') as file:
    hero_data = json.load(file)

# Generate JavaScript code
js_code = "// src/components/LOL/LOL_heroes.js\n\n"
js_code += "export const HERO_DATA = [\n"

for hero_name, hero_info in hero_data.items():
    js_code += f"    {{\n"
    js_code += f"        numID: {hero_info['numID']},\n"
    js_code += f"        id: '{hero_info['id']}',\n"
    js_code += f"        Key: '{hero_info['Key']}',\n"
    js_code += f"        name: '{hero_info['name']}',\n"
    js_code += f"        title: '{hero_info['title']}',\n"
    js_code += f"        lore: `{hero_info['lore']}`,\n"
    js_code += f"        blurb: `{hero_info['blurb']}`,\n"
    js_code += f"        image: {hero_info['image']},\n"
    js_code += f"        stats: {json.dumps(hero_info['stats'])},\n"
    js_code += f"        spells: [\n"
    
    for spell in hero_info['spells']:
        js_code += f"            {{\n"
        js_code += f"                id: '{spell['id']}',\n"
        js_code += f"                name: '{spell['name']}',\n"
        js_code += f"                description: `{spell['description']}`,\n"
        js_code += f"                cooldownBurn: '{spell['cooldownBurn']}',\n"
        js_code += f"                image: {spell['image']}\n"
        js_code += f"            }},\n"

    js_code += f"        ]\n"
    js_code += f"    }},\n"

js_code += "];\n\n"
js_code += "export const filterHeroesByName = (name) => {\n"
js_code += "    return HERO_DATA.filter((hero) => hero.name.toLowerCase().includes(name.toLowerCase()));\n"
js_code += "};"

# Save the JavaScript code to a file
with open('LOL_heroes.js', 'w+', encoding='utf-8') as js_file:
    js_file.write(js_code)

print("JavaScript file has been generated successfully.")
