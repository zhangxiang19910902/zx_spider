import requests
import execjs
session = requests.session()
num = 0
for a in range(1, 101):
    js_code = open("3.js",'r',encoding='utf-8').read()


    m = execjs.compile(js_code).call('zhangxiang')


    m = m.split('=',1)[-1].split(';')[0]

    cookies = {
        'sessionid': 'z0nz6vmpqlam7dla8r4bpw78ld8oj2fb',
        'sign': '1747640656~YWlkaW5nX3dpbjE3NDc2NDA2NTU1NzU=|11a2ef9c2cc85efee6a73727fc9adf8a',
        'm': m,
    }

    headers = {
        'accept': 'application/json, text/javascript, */*; q=0.01',
        'accept-language': 'zh-CN,zh;q=0.9',
        'cache-control': 'no-cache',
        'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
        'origin': 'https://www.python-spider.com',
        'pragma': 'no-cache',
        'priority': 'u=1, i',
        'referer': 'https://www.python-spider.com/challenge/3',
        'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-origin',
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/136.0.0.0 Safari/537.36',
        'x-requested-with': 'XMLHttpRequest',
        # 'cookie': 'sessionid=z0nz6vmpqlam7dla8r4bpw78ld8oj2fb; sign=1747640656~YWlkaW5nX3dpbjE3NDc2NDA2NTU1NzU=|11a2ef9c2cc85efee6a73727fc9adf8a; m=f736dbba210aad3b660c65ab69218218|1747642890000',
    }
    data = {
        'page': a,
    }
    while True:
        try:
            response = session.post('https://www.python-spider.com/api/challenge3', cookies=cookies, headers=headers,
                                     data=data)

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
    print(f"num:{num},page:{a}")

print(num)

print('aa')
print('aa')