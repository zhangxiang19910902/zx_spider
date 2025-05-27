


import requests
import execjs

headers = {
    'Accept': 'application/json, text/plain, */*',
    'Accept-Language': 'zh-CN,zh;q=0.9',
    'Connection': 'keep-alive',
    'Referer': 'https://spa2.scrape.center/page/1',
    'Sec-Fetch-Dest': 'empty',
    'Sec-Fetch-Mode': 'cors',
    'Sec-Fetch-Site': 'same-origin',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36',
    'sec-ch-ua': '"Google Chrome";v="135", "Not-A.Brand";v="8", "Chromium";v="135"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"Windows"',
}


#翻页
offset = 0

js_code = open('webpack_test.js', 'r', encoding='utf-8').read()

token = execjs.compile(js_code).call('token', offset)
params = {
    'limit': 10,
    'offset': offset,
    'token': token,
}

response = requests.get('https://spa2.scrape.center/api/movie/', params=params, headers=headers)

print(response.json())