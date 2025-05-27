import requests
import execjs

js_code = open('2.js', 'r', encoding='utf-8').read()

sign = execjs.compile(js_code).call('zx')

cookies = {
    'sessionid': '',
    'sign':sign,
}

headers = {
    'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
    'accept-language': 'zh-CN,zh;q=0.9',
    'cache-control': 'no-cache',
    'pragma': 'no-cache',
    'priority': 'u=0, i',
    'referer': 'https://www.python-spider.com/challenge/2',
    'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"Windows"',
    'sec-fetch-dest': 'document',
    'sec-fetch-mode': 'navigate',
    'sec-fetch-site': 'same-origin',
    'sec-fetch-user': '?1',
    'upgrade-insecure-requests': '1',
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/136.0.0.0 Safari/537.36',
    # 'cookie': 'sessionid=s4cq08dlfq2ubzrix5hs6be16kop1ggx; no-alert=true; sign=1747391746~YWlkaW5nX3dpbjE3NDczOTE3NDU2OTY=|97a13ec813d3d2b44ae6e34a5a3d47cb',
}

response = requests.get('https://www.python-spider.com/challenge/2', cookies=cookies, headers=headers, verify=False)

print(response.text)