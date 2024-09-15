import json

# 加载原始 JSON 文件
with open('item_kr.json', 'r', encoding='utf-8') as file:
    data = json.load(file)

# 筛选并精简物品数据
refined_items = {}
items = data.get('data', {})

# 计数器
numid_counter = 1

for item_id, item_info in items.items():
    # 仅保留 "maps" 属性中 "11" 和 "12" 值为 true 的对象
    maps = item_info.get('maps', {})
    if maps.get('11') and maps.get('12'):
        # 保留指定的属性，并将 'depth' 为 null 的值改为 1
        refined_item = {
            'numid': numid_counter,  # 添加 numid 属性
            'name': item_info.get('name'),
            'depth': item_info.get('depth') if item_info.get('depth') is not None else 1,
            'colloq': item_info.get('colloq'),
            'plaintext': item_info.get('plaintext'),
            'stats': item_info.get('stats'),
            'description': item_info.get('description'),
            'tags': item_info.get('tags'),
            'image':"require('../../assets/lol_items/"+ item_info.get('image', {}).get('full')  + "')",
            'from': item_info.get('from'),
            'gold': {
                'total': item_info.get('gold', {}).get('total'),
                'sell': item_info.get('gold', {}).get('sell'),
            }
        }
        refined_items[item_id] = refined_item
        numid_counter += 1  # 增加计数器

# 保存精简后的数据为新的 JSON 文件
refined_data = {'data': refined_items}
with open('items_info_half.json', 'w+', encoding='utf-8') as refined_file:
    json.dump(refined_data, refined_file, ensure_ascii=False, indent=4)



# 加载 refined_items.json 文件
with open('items_info_half.json', 'r', encoding='utf-8') as file:
    refined_data = json.load(file)

# 加载 item_CN.json 文件
with open('item_CN.json', 'r', encoding='utf-8') as file:
    cn_data = json.load(file).get('data', {})

# 更新 refined_items.json 中的对象，添加 name_CN 属性
for item_id, item_info in refined_data.get('data', {}).items():
    name = item_info.get('name')
    if item_id in cn_data:
        name_cn = cn_data[item_id].get('name')
        # 重新构建对象，将 name_CN 放在 numid 下面
        refined_data['data'][item_id] = {
            'numid': item_info['numid'],
            'name_CN': name_cn,
            'name': item_info.get('name'),
            'depth': item_info.get('depth'),
            'colloq': item_info.get('colloq'),
            'stats': item_info.get('stats'),
            'description': item_info.get('description'),
            'tags': item_info.get('tags'),
            'image': item_info.get('image'),
            'imagefrom':"require('../../assets/lol_items/from/"+ name_cn+".png')",
            'from': item_info.get('from'),
            'gold': item_info.get('gold'),
        }

# 保存更新后的数据
with open('items_info_.json', 'w+', encoding='utf-8') as updated_file:
    json.dump(refined_data, updated_file, ensure_ascii=False, indent=4)