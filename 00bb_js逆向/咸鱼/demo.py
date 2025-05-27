import requests
import execjs

cookies = {
    'cna': 'DGagIMHgHgICAXx/kSNsrsWy',
    'xlly_s': '1',
    'mtop_partitioned_detect': '1',
    '_m_h5_tk': 'e9a4a392cfbf5c3f8ec0d72bea34c439_1746510039439',
    '_m_h5_tk_enc': '46fdd9bd19dfdb53296ab1ff67662cc5',
    'cookie2': '1d5c46a36b0a7d0ddd4f3fd91abae185',
    'tfstk': 'gtrKQ01j41fnuQqKIJ7MrjeTurWgpN2U-WyXqbcHP5FTh-RnPkm3wUF3U705TDq868NALYfUqpzai-t3xwok2DorVsfcmivUL0o7hO1gHB-sUxjkVegSYcTbtJIAmi2UdpDCnRs0qMv5AfGSV2gS5AGZEvG7N2T6ffkrFBMWAOBt_vOBVYgB1RMo1biSR7G_Cfk-VvNSVAXApbvIg3U2sorMZeXwq3qtp2hJqft8QktmyjOnsntQijupKJG9V3ZTy0a_HX_2IbonTJkLai-EA4U7xcZC1gibu5E-lmQlLmZUFrz7QBB-ORVUDDZA9HDiyXU_AVpWV-wI6VU896LEOyVtuAg6eikgifwUAPBy1JNm9DMsSi6YC4agYqrh1HnbuJm3PS1M-XaxFgSQmo3tuIcxEe6OBU8rRA5AiYzFv-i_pAhcINYyzVHZBjXOBU8rRAktiOr2zUutQ',
}

headers = {
    'accept': 'application/json',
    'accept-language': 'zh-CN,zh;q=0.9',
    'content-type': 'application/x-www-form-urlencoded',
    'origin': 'https://www.goofish.com',
    'priority': 'u=1, i',
    'referer': 'https://www.goofish.com/',
    'sec-ch-ua': '"Google Chrome";v="135", "Not-A.Brand";v="8", "Chromium";v="135"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"Windows"',
    'sec-fetch-dest': 'empty',
    'sec-fetch-mode': 'cors',
    'sec-fetch-site': 'same-site',
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36',
    # 'cookie': 'cna=DGagIMHgHgICAXx/kSNsrsWy; xlly_s=1; mtop_partitioned_detect=1; _m_h5_tk=e9a4a392cfbf5c3f8ec0d72bea34c439_1746510039439; _m_h5_tk_enc=46fdd9bd19dfdb53296ab1ff67662cc5; cookie2=1d5c46a36b0a7d0ddd4f3fd91abae185; tfstk=gtrKQ01j41fnuQqKIJ7MrjeTurWgpN2U-WyXqbcHP5FTh-RnPkm3wUF3U705TDq868NALYfUqpzai-t3xwok2DorVsfcmivUL0o7hO1gHB-sUxjkVegSYcTbtJIAmi2UdpDCnRs0qMv5AfGSV2gS5AGZEvG7N2T6ffkrFBMWAOBt_vOBVYgB1RMo1biSR7G_Cfk-VvNSVAXApbvIg3U2sorMZeXwq3qtp2hJqft8QktmyjOnsntQijupKJG9V3ZTy0a_HX_2IbonTJkLai-EA4U7xcZC1gibu5E-lmQlLmZUFrz7QBB-ORVUDDZA9HDiyXU_AVpWV-wI6VU896LEOyVtuAg6eikgifwUAPBy1JNm9DMsSi6YC4agYqrh1HnbuJm3PS1M-XaxFgSQmo3tuIcxEe6OBU8rRA5AiYzFv-i_pAhcINYyzVHZBjXOBU8rRAktiOr2zUutQ',
}




js_code = open("test.js", "r", encoding="utf-8").read()

data = {
    'data': '{"pageNumber":1,"keyword":"手机","fromFilter":false,"rowsPerPage":30,"sortValue":"","sortField":"","customDistance":"","gps":"","propValueStr":{},"customGps":"","searchReqFromPage":"pcSearch","extraFilterValue":"{\\"divisionList\\":[{\\"province\\":\\"北京\\"}],\\"excludeMultiPlacesSellers\\":\\"0\\",\\"extraDivision\\":\\"\\"}","userPositionJson":"{}"}',
}

js_dict = execjs.compile(js_code).call('get_sign', data['data'])


params = {
    'jsv': '2.7.2',
    'appKey': '34839810',
    't': js_dict['t'],
    'sign': js_dict['sign'],
    'v': '1.0',
    'type': 'originaljson',
    'accountSite': 'xianyu',
    'dataType': 'json',
    'timeout': '20000',
    'api': 'mtop.taobao.idlemtopsearch.pc.search',
    'sessionOption': 'AutoLoginOnly',
    'spm_cnt': 'a21ybx.search.0.0',
    'spm_pre': 'a21ybx.home.categories.1.4c053da6MzWvPJ',
    'log_id': '4c053da6MzWvPJ',
}


response = requests.post(
    'https://h5api.m.goofish.com/h5/mtop.taobao.idlemtopsearch.pc.search/1.0/',
    params=params,
    cookies=cookies,
    headers=headers,
    data=data,
)

print(response.json())