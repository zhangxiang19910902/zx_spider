import requests
import execjs


cookies = {
    'btoken': '46YLIN9R4K3J7VIT3AV39KVYJ0AV6E0E',
    'Hm_lvt_42317524c1662a500d12d3784dbea0f8': '1745920327',
    'Hm_lpvt_42317524c1662a500d12d3784dbea0f8': '1745920327',
    'HMACCOUNT': '5DE3CF85C315AE1F',
}

headers = {
    'accept': 'application/json',
    'accept-language': 'zh-CN,zh;q=0.9',
    'content-type': 'application/json',
    'origin': 'https://www.xiniudata.com',
    'priority': 'u=1, i',
    'referer': 'https://www.xiniudata.com/industry/newest?from=data',
    'sec-ch-ua': '"Google Chrome";v="135", "Not-A.Brand";v="8", "Chromium";v="135"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"Windows"',
    'sec-fetch-dest': 'empty',
    'sec-fetch-mode': 'cors',
    'sec-fetch-site': 'same-origin',
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36',
    # 'cookie': 'btoken=46YLIN9R4K3J7VIT3AV39KVYJ0AV6E0E; Hm_lvt_42317524c1662a500d12d3784dbea0f8=1745920327; Hm_lpvt_42317524c1662a500d12d3784dbea0f8=1745920327; HMACCOUNT=5DE3CF85C315AE1F',
}

js_code = open('payload.js', 'r', encoding='utf-8').read()


payload = {
    "sort": 1,
    "start": 140,
    "limit": 20
}

json_data =execjs.compile(js_code).call('ppp',payload)

response = requests.post(
    'https://www.xiniudata.com/api2/service/x_service/person_industry_list/list_industries_by_sort',
    cookies=cookies,
    headers=headers,
    json=json_data,
)


res_json = response.json()

res_d = res_json['d']

decrypt_d = execjs.compile(js_code).call('decrypt_d', res_d)

print(decrypt_d)