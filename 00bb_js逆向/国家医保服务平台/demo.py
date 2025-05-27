


import requests

cookies = {
    'amap_local': '110000',
    'acw_tc': '1a0c639017466723840547504e0072b21d74142077508680bddcdf8fc671fe',
    'gb_nthl_sessionId': '93dc50d0585e4fecbf488fbbcd8add90',
    'yb_header_active': '-1',
}

headers = {
    'Accept': 'application/json',
    'Accept-Language': 'zh-CN,zh;q=0.9',
    'Connection': 'keep-alive',
    'Content-Type': 'application/json',
    'Origin': 'https://fuwu.nhsa.gov.cn',
    'Referer': 'https://fuwu.nhsa.gov.cn/nationalHallSt/',
    'Sec-Fetch-Dest': 'empty',
    'Sec-Fetch-Mode': 'cors',
    'Sec-Fetch-Site': 'same-origin',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36',
    'X-Tingyun': 'c=B|4Nl_NnGbjwY;x=5af21a0833684f64',
    'channel': 'web',
    'contentType': 'application/x-www-form-urlencoded',
    'sec-ch-ua': '"Google Chrome";v="135", "Not-A.Brand";v="8", "Chromium";v="135"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"Windows"',
    'x-tif-nonce': 'X817ExWB',
    'x-tif-paasid': 'undefined',
    'x-tif-signature': '1fb247d5f921849d5d2e46df0f2f9e45b61261e4d1eae3f4dcd83c4048036415',
    'x-tif-timestamp': '1746672418',
    # 'Cookie': 'amap_local=110000; acw_tc=1a0c639017466723840547504e0072b21d74142077508680bddcdf8fc671fe; gb_nthl_sessionId=93dc50d0585e4fecbf488fbbcd8add90; yb_header_active=-1',
}

json_data = {
    'data': {
        'data': {
            'encData': '3DFBCA4667B978F639BB23B95DCE4CC74CE34C33DC32F1068E9E23CA546C9EA8CCD20943B4DAE96380B41164D761DE97BBBD5DB53EA5E7154071E74EF0BE481E2BADC2FDCC843E425B4CA14CEDBC102C8FAC228E3FCCD7616813AFFBFC8928E064DE712DF3683DE81C358841664CBE17561D0390069F11B0D412FE38BE15BA5C',
        },
        'appCode': 'T98HPCGN5ZVVQBS8LZQNOAEXVI9GYHKQ',
        'version': '1.0.0',
        'encType': 'SM4',
        'signType': 'SM2',
        'timestamp': 1746672418,
        'signData': '/XdtdAkIG5alrIIxQjtLg3RnOF41xoMqi3ZuMqdVXXfdciLHN45AwX6p2z8u/33CB6FpWAZ/QCd5eQ9ZGpj5Lg==',
    },
}

response = requests.post(
    'https://fuwu.nhsa.gov.cn/ebus/fuwu/api/nthl/api/CommQuery/queryRtalPhacBInfo',
    cookies=cookies,
    headers=headers,
    json=json_data,
)



print(response.json())