import requests

cookies = {
    'Hm_lvt_0d2227abf9548feda3b9cb6fddee26c0': '1748318371',
    'HMACCOUNT': '89E1F42AFA52E3A6',
    'sessionid': 'ekp8rox9ynm1xku5ao5ckmev6nfk38zn',
    'Hm_lpvt_0d2227abf9548feda3b9cb6fddee26c0': '1748318413',
}

headers = {
    'accept': '*/*',
    'accept-language': 'zh-CN,zh;q=0.9',
    'priority': 'u=1, i',
    'referer': 'https://www.mashangpa.com/problem-detail/1/',
    'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"Windows"',
    'sec-fetch-dest': 'empty',
    'sec-fetch-mode': 'cors',
    'sec-fetch-site': 'same-origin',
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/136.0.0.0 Safari/537.36',
    # 'cookie': 'Hm_lvt_0d2227abf9548feda3b9cb6fddee26c0=1748318371; HMACCOUNT=89E1F42AFA52E3A6; sessionid=ekp8rox9ynm1xku5ao5ckmev6nfk38zn; Hm_lpvt_0d2227abf9548feda3b9cb6fddee26c0=1748318413',
}
num = 0
for a in range(1, 21):
    while  True:
        try:
            params = {
                'page': a,
            }

            response = requests.get('https://www.mashangpa.com/api/problem-detail/1/data/', params=params, cookies=cookies, headers=headers)


            res_json = response.json()

            current_array = res_json['current_array']

            print(f"-----爬取{a}页-----{num}")
        except:
            pass
    num += sum(current_array)
print(num)