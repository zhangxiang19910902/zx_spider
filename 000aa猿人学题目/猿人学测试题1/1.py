import requests
import execjs

cookies = {
    'sessionid': '',
    # 'sign': '1747277205~YWlkaW5nX3dpbjE3NDcyNzcyMDQ3ODI=|0936c40f97815bbc4b98bfa9a66a09f8',
    # 'no-alert': 'true',
}




num = 0
for a in range(1, 101):
    js_code = open('safe.js', 'r', encoding='utf-8').read()
    zx = execjs.compile(js_code).call('zx')

    headers = {
        'accept': 'application/json, text/javascript, */*; q=0.01',
        'accept-language': 'zh-CN,zh;q=0.9',
        'cache-control': 'no-cache',
        'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
        'origin': 'https://www.python-spider.com',
        'pragma': 'no-cache',
        'priority': 'u=1, i',
        'referer': 'https://www.python-spider.com/challenge/1',
        'safe': zx['safe'],
        'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-origin',
        'timestamp': zx['timestamp'],
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/136.0.0.0 Safari/537.36',
        'x-requested-with': 'XMLHttpRequest',
    }

    print(a)
    data = {
        'page': a,
    }
    while True:
        try:
            response = requests.post('https://www.python-spider.com/api/challenge1', cookies=cookies, headers=headers, data=data)
            if response.status_code == 200:
                res_json = response.json()
                print(res_json)
                if res_json['status'] != '1':
                    continue

                break
            else:
                print('请求失败')
        except:
            print('请求失败2')


    for b in res_json['data']:
        v = b['value']
        num += int(v)
    print(num)


print(num)