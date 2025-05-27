import requests
import execjs
import time
cookies = {
    'UOR': ',tousu.sina.com.cn,',
    'SINAGLOBAL': '124.127.146.130_1745982810.395992',
    'HM-AMT': '%7B%22amt%22%3A25820765%2C%22amt24h%22%3A26260%2C%22v%22%3A%222.3.174%22%2C%22vPcJs%22%3A%221.6.84%22%2C%22vPcCss%22%3A%221.2.396%22%7D',
    'Apache': '124.127.145.35_1746762023.19928',
    'ULV': '1746762035227:4:2:2:124.127.145.35_1746762023.19928:1746762018516',
}

headers = {
    'accept': '*/*',
    'accept-language': 'zh-CN,zh;q=0.9',
    'priority': 'u=1, i',
    'referer': 'https://tousu.sina.com.cn/',
    'sec-ch-ua': '"Google Chrome";v="135", "Not-A.Brand";v="8", "Chromium";v="135"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"Windows"',
    'sec-fetch-dest': 'empty',
    'sec-fetch-mode': 'cors',
    'sec-fetch-site': 'same-origin',
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36',
    'x-requested-with': 'XMLHttpRequest',
    # 'cookie': 'HM-AMT=%7B%22amt%22%3A25607766%2C%22amt24h%22%3A23658%2C%22v%22%3A%222.3.172%22%2C%22vPcJs%22%3A%221.6.83%22%2C%22vPcCss%22%3A%221.2.395%22%7D; UOR=,tousu.sina.com.cn,; ULV=1745982809471:1:1:1::; SINAGLOBAL=124.127.146.130_1745982810.395992; Apache=124.127.146.130_1745982810.395993',
}


js_code = open('signature.js', 'r', encoding='utf-8').read()

ts = int(time.time()) * 1000
page = 2
signature = execjs.compile(js_code).call('sha256_sign', ts, page)


params = {
    'ts': ts,
    'rs': 'aFvA8LpwDbYNp9UD',
    'signature': signature,
    'type': '1',
    'page_size': '10',
    'page': page,
}

response = requests.get('https://tousu.sina.com.cn/api/index/feed', params=params, cookies=cookies, headers=headers, verify=False)


print(response.text)