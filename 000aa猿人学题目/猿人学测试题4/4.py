import requests

tunnel = "o969.kdltps.com:15818"

# 用户名密码方式
username = "t14256796241644"
password = "qmrfbst5"
proxies = {
    "http": "http://%(user)s:%(pwd)s@%(proxy)s/" % {"user": username, "pwd": password, "proxy": tunnel},
    "https": "http://%(user)s:%(pwd)s@%(proxy)s/" % {"user": username, "pwd": password, "proxy": tunnel}
}



cookies = {
    'sessionid': 'z0nz6vmpqlam7dla8r4bpw78ld8oj2fb',
    # '__jsl_clearance': '1747713012.419|0|clD4VpfqhdaLBWywKWy%2FZyfi6d_d6b5a5e4f2ae31fb8e6f11ed49fce1973D',
}


session =requests.session()

num = 0
for a in range(1, 101):
    headers = {
        'accept': 'application/json, text/javascript, */*; q=0.01',
        'accept-language': 'zh-CN,zh;q=0.9',
        'cache-control': 'no-cache',
        'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
        'origin': 'https://www.python-spider.com',
        'pragma': 'no-cache',
        'priority': 'u=1, i',
        'referer': 'https://www.python-spider.com/challenge/4',
        'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-origin',
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/136.0.0.0 Safari/537.36',
        'x-requested-with': 'XMLHttpRequest',
        # 'cookie': 'sessionid=z0nz6vmpqlam7dla8r4bpw78ld8oj2fb; __jsl_clearance=1747713012.419|0|clD4VpfqhdaLBWywKWy%2FZyfi6d_d6b5a5e4f2ae31fb8e6f11ed49fce1973D',
    }

    data = {
        'page': a,
    }
    while True:
        try:
            response = session.post('https://www.python-spider.com/api/challenge1', cookies=cookies, headers=headers, data=data, proxies=proxies)
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