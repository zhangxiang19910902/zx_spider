

from scrapy import Selector
import pandas as pd


html = open('ceshi.html', 'r', encoding='utf-8').read()

res = Selector(text=html)

data = []
for a in res.xpath("//div[@class='col s12 award-padding']"):
    a0 = ''.join(a.xpath("./preceding-sibling::div[@class='col s12 awd-name'][1]//text()").getall()).strip()
    a1 = a.xpath("./div[2]/a//text()").extract_first()
    a2 = a.xpath("./div[2]/a/@href").extract_first()
    a3 = ''.join(a.xpath("./div[2]/a/following-sibling::text()[1]").getall()).strip()
    a4 = ''.join(a.xpath("./div[2]//b[@class='normal-styling']//text()").getall()).strip()
    a5 = ''.join(a.xpath("./div[2]/div[2]//text()").getall()).replace('\n','').replace('  ','').strip()
    a6 = ''.join(a.xpath("./div[2]/div[2]/div[2]//a//text()").getall()).strip()
    a7 = ''.join(a.xpath("./div[2]/div[2]/div[2]//a/@href").getall()).strip()
    data.append([a0, a1, a2, a3, a4, a5, a6, a7])


df = pd.DataFrame(data,columns=['a0','a1','a2','a3','a4','a5','a6','a7'])


df.to_excel('output.xlsx', index=False)
