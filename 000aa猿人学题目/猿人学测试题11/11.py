import requests
import re
import execjs
from scrapy import Selector

cookies = {
    'sessionid': 'z0nz6vmpqlam7dla8r4bpw78ld8oj2fb',
}

headers = {
    'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
    'accept-language': 'zh-CN,zh;q=0.9',
    'cache-control': 'no-cache',
    'pragma': 'no-cache',
    'priority': 'u=0, i',
    'referer': 'https://www.python-spider.com/challenge/11',
    'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"Windows"',
    'sec-fetch-dest': 'document',
    'sec-fetch-mode': 'navigate',
    'sec-fetch-site': 'same-origin',
    'sec-fetch-user': '?1',
    'upgrade-insecure-requests': '1',
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/136.0.0.0 Safari/537.36',
    # 'cookie': 'sessionid=z0nz6vmpqlam7dla8r4bpw78ld8oj2fb; __jsl_clearance=1747713003.561|0|clD4VpfqhdaLBWywKWy%2FZyfi6d_e4c26689431b8edfecd84c0f04e65de73D',
}

response = requests.get('https://www.python-spider.com/challenge/11', cookies=cookies, headers=headers)


res = response.text

js_code = res.replace('<script>','').replace('</script>','').strip()

js_text = open('11.js', 'r', encoding='utf-8').read()
js_text = js_text.replace('__zx',js_code)

cookie_text = execjs.compile(js_text).call('zx')

cookies['__jsl_clearance'] = re.findall('__jsl_clearance=(.*?);',cookie_text)[0]


response = requests.get('https://www.python-spider.com/challenge/11', cookies=cookies, headers=headers)


res = Selector(text=response.text)


num = res.xpath("//td[@class='info']//text()").getall()

total = 0
for s in num:
    total += int(s.strip())


print(total)