from pymongo import MongoClient
from loguru import logger
import requests


client = MongoClient()
db1 = client.name.zx_20250523_hnsggzy




headers = {
    'Accept': 'application/json, text/plain, */*',
    'Accept-Language': 'zh-CN,zh;q=0.9',
    'Connection': 'keep-alive',
    'Referer': 'https://www.hnsggzy.com/',
    'Sec-Fetch-Dest': 'empty',
    'Sec-Fetch-Mode': 'cors',
    'Sec-Fetch-Site': 'same-origin',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/136.0.0.0 Safari/537.36',
    'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"Windows"',
    # 'Cookie': 'SESSION=ZTM1OGQ4NTItYTAxYi00ZTZkLWI2YTEtYTM1NGZkZTY5ZWQx; JSESSIONID=e358d852-a01b-4e6d-b6a1-a354fde69ed1',
}

num = 0

for a in range(1,33):
    params = {
        'current': a,
        'size': '12',
        'tenderProjectName': '',
        'bidSectionName': '',
        'regionCode': '',
        'tenderProjectType': '',
        'notice': '',
        'bidOpeningTimeStartGt': '',
        'bidOpeningTimeStartLt': '',
    }
    while True:
        try:
            response = requests.get(
                'https://www.hnsggzy.com/tradeApi/constructionTender/listSection',
                params=params,
                headers=headers,
                verify=False
            )
            if response.status_code == 200:
                break
        except:
            pass

    res_json = response.json()

    for a in res_json['data']['records']:
        _id = a['id']
        regionCode = a['regionCode']
        bidSectionId = a['bidSectionId']
        isPublic = a['isPublic']
        default = "projectInfo"

        while True:
            try:
                response2 = requests.get(
                    f'https://www.hnsggzy.com/tradeApi/constructionTender/getBySectionId?sectionId={bidSectionId}',
                    params=params,
                    headers=headers,
                    verify=False
                )
                if response.status_code == 200:
                    res2 = response2.json()
                    break
            except:
                pass

        while True:
            try:
                response3 = requests.get(
                    f'https://www.hnsggzy.com/tradeApi/constructionNotice/getBySectionId?sectionId={bidSectionId}',
                    params=params,
                    headers=headers,
                    verify=False
                )
                if response.status_code == 200:
                    res3 = response3.json()
                    break
            except:
                pass
        db = {}

        regionCode = res2['data']['constructionProject']['regionCode']

        db['链接'] = f"https://www.hnsggzy.com/#/resources/transactionDetail/%E4%BD%8F%E5%BB%BA%E5%B7%A5%E7%A8%8B?id={_id}&regionCode={regionCode}&bidSectionId={bidSectionId}&isPublic={isPublic}&default={default}"
        db['省'] = regionCode.split('·',1)[0]
        db['市'] = regionCode.split('·',1)[-1].split('·',1)[0]
        db['县'] = regionCode.split('·')[-1]
        db['项目名称'] = res2['data']['constructionProject']['projectName']
        db['建设单位'] = res2['data']['constructionTender']['tendererName']
        db['招标代理'] = res2['data']['constructionTender']['tenderAgencyName']
        db['合同金额'] = res2['data']['constructionSectionList'][0]['contractReckonPrice']
        db['招标内容与范围'] = res2['data']['constructionSectionList'][0]['bidSectionContent']
        db['公告发布时间'] = res3['data']['noticeList'][0]['noticeSendTime']
        db['开标时间'] = res3['data']['noticeList'][0]['bidOpeningTimeStart']
        num +=1
        db1.insert_one(db).inserted_id

        logger.info(f"爬取{num}条成功-----{db['链接']}")
