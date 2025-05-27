import requests
import execjs


cookies = {
    'sensorsdata2015jssdkchannel': '%7B%22prop%22%3A%7B%22_sa_channel_landing_url%22%3A%22%22%7D%7D',
    'sajssdk_2015_cross_new_user': '1',
    'sensorsdata2015jssdkcross': '%7B%22distinct_id%22%3A%221967f5b54d12cc-087c0825a51e45-26011c51-1024000-1967f5b54d21116%22%2C%22first_id%22%3A%22%22%2C%22props%22%3A%7B%22%24latest_traffic_source_type%22%3A%22%E7%9B%B4%E6%8E%A5%E6%B5%81%E9%87%8F%22%2C%22%24latest_search_keyword%22%3A%22%E6%9C%AA%E5%8F%96%E5%88%B0%E5%80%BC_%E7%9B%B4%E6%8E%A5%E6%89%93%E5%BC%80%22%2C%22%24latest_referrer%22%3A%22%22%7D%2C%22identities%22%3A%22eyIkaWRlbnRpdHlfY29va2llX2lkIjoiMTk2N2Y1YjU0ZDEyY2MtMDg3YzA4MjVhNTFlNDUtMjYwMTFjNTEtMTAyNDAwMC0xOTY3ZjViNTRkMjExMTYifQ%3D%3D%22%2C%22history_login_id%22%3A%7B%22name%22%3A%22%22%2C%22value%22%3A%22%22%7D%2C%22%24device_id%22%3A%221967f5b54d12cc-087c0825a51e45-26011c51-1024000-1967f5b54d21116%22%7D',
    'sensors_amp_id': '1967f5b54d12cc-087c0825a51e45-26011c51-1024000-1967f5b54d21116',
    '_c_WBKFRo': 'OrzYTtnihZUpVLYDBy7ZFm5QeewztYiTcCyr99NV',
    '_nb_ioWEgULi': '',
    'acw_tc': 'ac11000117458956386755992e005e420c680c4f13a24089f9fa64e62c645b',
}

headers = {
    'accept': 'application/json, text/plain, */*',
    'accept-language': 'zh-CN,zh;q=0.9',
    'content-type': 'application/json',
    'device-no': 'ma1vuzzhy5cakg8vsp',
    'device-type': 'Chrome',
    'front-route': '/login',
    'login-client-type': '1',
    'origin': 'https://console.qmai.cn',
    'priority': 'u=1, i',
    'qm-channel': 'console',
    'qm-device': 'windows',
    'qm-from': 'console',
    'referer': 'https://console.qmai.cn/',
    'sec-ch-ua': '"Google Chrome";v="135", "Not-A.Brand";v="8", "Chromium";v="135"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"Windows"',
    'sec-fetch-dest': 'empty',
    'sec-fetch-mode': 'cors',
    'sec-fetch-site': 'same-site',
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36',
    # 'cookie': 'sensorsdata2015jssdkchannel=%7B%22prop%22%3A%7B%22_sa_channel_landing_url%22%3A%22%22%7D%7D; sajssdk_2015_cross_new_user=1; sensorsdata2015jssdkcross=%7B%22distinct_id%22%3A%221967f5b54d12cc-087c0825a51e45-26011c51-1024000-1967f5b54d21116%22%2C%22first_id%22%3A%22%22%2C%22props%22%3A%7B%22%24latest_traffic_source_type%22%3A%22%E7%9B%B4%E6%8E%A5%E6%B5%81%E9%87%8F%22%2C%22%24latest_search_keyword%22%3A%22%E6%9C%AA%E5%8F%96%E5%88%B0%E5%80%BC_%E7%9B%B4%E6%8E%A5%E6%89%93%E5%BC%80%22%2C%22%24latest_referrer%22%3A%22%22%7D%2C%22identities%22%3A%22eyIkaWRlbnRpdHlfY29va2llX2lkIjoiMTk2N2Y1YjU0ZDEyY2MtMDg3YzA4MjVhNTFlNDUtMjYwMTFjNTEtMTAyNDAwMC0xOTY3ZjViNTRkMjExMTYifQ%3D%3D%22%2C%22history_login_id%22%3A%7B%22name%22%3A%22%22%2C%22value%22%3A%22%22%7D%2C%22%24device_id%22%3A%221967f5b54d12cc-087c0825a51e45-26011c51-1024000-1967f5b54d21116%22%7D; sensors_amp_id=1967f5b54d12cc-087c0825a51e45-26011c51-1024000-1967f5b54d21116; _c_WBKFRo=OrzYTtnihZUpVLYDBy7ZFm5QeewztYiTcCyr99NV; _nb_ioWEgULi=; acw_tc=ac11000117458956386755992e005e420c680c4f13a24089f9fa64e62c645b',
}
js_code = open("run.js", encoding="utf-8").read()
uname = '18566667777'
pwd = '123456'
json_data = execjs.compile(js_code).call('jsondata',uname, pwd, headers['device-no'])


response = requests.post('https://inapi.qmai.cn/gw/org-center/account/login-v2', cookies=cookies, headers=headers, json=json_data)


print(response.text)