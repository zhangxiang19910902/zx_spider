


import pandas as pd
from DrissionPage import Chromium
from pymongo import MongoClient
from scrapy import Selector
client = MongoClient()
db1 = client.name.zx_20250523_demo

def get_data(lis):
    driver = Chromium().latest_tab
    # 循环处理所有页面（共10页）
    for page in lis:

        production_url = page[1]
        production_name = page[2]
        url = page[5]

        driver.get(url)

        # 等待电影列表加载完成
        driver.set.load_mode.eager()

        res = Selector(text=driver.html)

        role = ''.join(res.xpath(f"//div[@id='broadway']//a[contains(text(),'{production_name}')]/../..//text()").getall()).replace('\n','').strip()

        page[6] = role

        db1.insert_one({
            'production_url':production_url,
            'production_name':production_name,
            'role':role,
            'url':url
        })




def read_excel():
    df = pd.read_excel(r'C:\Users\Administrator\Desktop\Performer_role.xlsx')

    return df.values.tolist()


if __name__ == '__main__':
    lis = read_excel()
    get_data(lis)