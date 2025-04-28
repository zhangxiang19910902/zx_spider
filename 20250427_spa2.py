import hashlib
import base64
import time


def i(*args):
    # 获取当前时间戳（秒）
    t = str(round(time.time()))
    r = list(args)
    r.append(t)
    # 将列表元素用逗号连接成字符串
    r_str = ','.join(r)
    # 进行 SHA1 哈希计算
    sha1 = hashlib.sha1()
    sha1.update(r_str.encode('utf-8'))
    o = sha1.hexdigest()
    # 将哈希结果和时间戳用逗号连接
    combined_str = f"{o},{t}"
    # 进行 Base64 编码
    c = base64.b64encode(combined_str.encode('utf-8')).decode('utf-8')
    return c



import requests

headers = {
    'Accept': 'application/json, text/plain, */*',
    'Accept-Language': 'zh-CN,zh;q=0.9',
    'Connection': 'keep-alive',
    'Referer': 'https://spa2.scrape.center/page/5',
    'Sec-Fetch-Dest': 'empty',
    'Sec-Fetch-Mode': 'cors',
    'Sec-Fetch-Site': 'same-origin',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36',
    'sec-ch-ua': '"Google Chrome";v="135", "Not-A.Brand";v="8", "Chromium";v="135"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"Windows"',
}


offset = '40'

params = {
    'limit': '10',
    'offset': offset,
    'token': i('/api/movie', offset),
}

response = requests.get('https://spa2.scrape.center/api/movie/', params=params, headers=headers, verify=False)


print(response.text)