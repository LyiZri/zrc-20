import json
import os

# 创建目标文件夹（如果不存在）
output_folder = "."
os.makedirs(output_folder, exist_ok=True)

# JSON数据模板
data_template = {
    "description": "BSC-420 First inscription collection on BNB",
    "external_url": "",
    "image": "https://ipfs.io/ipfs/bafybeiecbwfh2dak6cip6galwwj6v7g67jkthqbgchngzvktnqdxhr7leu",
    "name": "BSC-420",
    "attributes": [
        {"trait_type": "p", "value": "BSC-20"},
        {"trait_type": "op", "value": "mint"},
        {"trait_type": "tick", "value": "GENESIS BOX"},
        {"trait_type": "amt", "value": "1"}
    ]
}

# 生成一万个JSON文件
for i in range(1, 10001):
    # 构建文件名
    file_name = f"{i}.json"
    
    # 构建完整文件路径
    file_path = os.path.join(output_folder, file_name)

    # 写入JSON数据到文件
    with open(file_path, 'w') as json_file:
        json.dump(data_template, json_file, indent=4)

print("生成一万个JSON文件完成。")
