import requests

cookies = {
    'webapp': '1',
    'siteCode': 'sxzfcg',
    'siteGuid': '6883226032309207040',
    'regioncode': '140001000',
    'regionguid': '140001',
    'theme': 'default',
    'regionpguid': '232',
    'rootregionguid': '232',
    'isOpenArea': 'true',
    'regionname': '%E7%9C%81%E6%9C%AC%E7%BA%A7',
}

headers = {
    'accept': 'application/json, text/plain, */*',
    'accept-language': 'zh-CN,zh;q=0.9',
    'content-type': 'application/json',
    'nsssjss': 'QIbqlSzSRTiv03h3eYQEJPo1450hzUj6xTeAOU5T6Nrs3lXj5NGaRKPb7Q7YXqOPMYTC3erW6FVM/MbSbZQO8DaveenyPH2kY+ZLKCoqO2Lgc+6Lh2f43Ek1SpGPm9T51pUormbOggHItrDa2I4/aKKsAR1pLEXQp5GlitC3MQQ=',
    'origin': 'https://shanxisheng-zfcgdzmcgov.cn',
    'priority': 'u=1, i',
    'referer': 'https://shanxisheng-zfcgdzmcgov.cn/gpmall-main-web/basic/sxNotice',
    'regioncode': '140001000',
    'regionguid': '140001',
    'sec-ch-ua': '"Google Chrome";v="135", "Not-A.Brand";v="8", "Chromium";v="135"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"Windows"',
    'sec-fetch-dest': 'empty',
    'sec-fetch-mode': 'cors',
    'sec-fetch-site': 'same-origin',
    'sitecode': 'sxzfcg',
    'siteguid': '6883226032309207040',
    'timestamp': '1746598423028',
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36',
    'webapp': '1',
    # 'cookie': 'webapp=1; siteCode=sxzfcg; siteGuid=6883226032309207040; regioncode=140001000; regionguid=140001; theme=default; regionpguid=232; rootregionguid=232; isOpenArea=true; regionname=%E7%9C%81%E6%9C%AC%E7%BA%A7',
}

json_data = {
    'regionGuid': '232',
    'regionCode': '140000000',
    'pageSize': 10,
    'pageNum': 3,
    'noticeTypeList': [
        'gpfa_notice',
        'gpfa_notice_modify',
        'gpfa_notice_resume',
        'gpfa_notice_pause',
    ],
}

response = requests.post(
    'https://shanxisheng-zfcgdzmcgov.cn/gpfa-bpoc/api/notice/kc/v1/ignore/pagingKcAgreementNotice',
    cookies=cookies,
    headers=headers,
    json=json_data,
)




print(response.json())