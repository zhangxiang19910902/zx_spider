import json
import hashlib
import requests
from loguru import logger
def ots(data):
    if not data:
        return ''
    result = []
    sorted_keys = sorted(data.keys())
    for key in sorted_keys:
        value = data[key]
        if value is not None:
            result.append(f"{key}={value}")
    return "&".join(result)

headers = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36 Edg/131.0.0.0",
}
url = "https://www.zhitongcaijing.com/side/immediately.html"
data = {
    "platform": "web"
}
# 需要加密的数据
plaintext = ots(data)
logger.info('需要加密数据==》》' + plaintext)
# 生成token
token = hashlib.sha1(plaintext.encode("utf-8")).hexdigest()[2:]#去除开头的0x
logger.info('生成token==》》' + token)
params = {
    "token": token
}
data = json.dumps(data, separators=(',', ':'))
response = requests.post(url, headers=headers,params=params, data=data)

logger.info('响应数据==》》' + response.text)


