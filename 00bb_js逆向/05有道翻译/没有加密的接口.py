import requests

headers = {
    'Referer': 'http://dict.youdao.com/',
    'Upgrade-Insecure-Requests': '1',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36',
}


inupt_text= 'hello'

response = requests.get(f'https://dict.youdao.com/w/{inupt_text}/', headers=headers)


print(response.text)