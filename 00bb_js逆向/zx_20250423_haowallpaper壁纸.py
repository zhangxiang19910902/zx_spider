

from base64 import b64encode, b64decode
from Crypto.Cipher import AES
from Crypto.Util.Padding import pad, unpad
import binascii,json,random,requests



'''
https://haowallpaper.com/

双向AES加密
'''


key = '68zhehao2O776519'  # 密钥
iv = 'aa176b7519e84710'   # 初始向量

def aes_encrypt(plain_text, key, iv):
    try:
        # 将明文转换为字节并进行填充
        plain_bytes = plain_text.encode('utf-8')
        key_bytes = key.encode('utf-8')
        iv_bytes = iv.encode('utf-8')

        # 创建 AES 加密器对象
        cipher = AES.new(key_bytes, AES.MODE_CBC, iv_bytes)

        # 使用 PKCS7 填充模式填充明文，确保其大小是 AES 块大小的倍数
        padded_data = pad(plain_bytes, AES.block_size)

        # 执行加密操作
        encrypted_data = cipher.encrypt(padded_data)

        # 将加密后的字节数据编码为 Base64
        encrypted_base64 = b64encode(encrypted_data).decode('utf-8')

        return encrypted_base64
    except Exception as e:
        print(f"Error during encryption: {e}")
        return None

def aes_decrypt(encrypted_base64_str, key, iv):
    try:
        # 解码 Base64 加密字符串
        encrypted_data = b64decode(encrypted_base64_str)

        # 将密钥和 IV 转换为 bytes
        key_bytes = key.encode('utf-8')
        iv_bytes = iv.encode('utf-8')

        # 创建 AES 解密器对象
        cipher = AES.new(key_bytes, AES.MODE_CBC, iv_bytes)

        # 解密数据并去除 padding
        decrypted_data = unpad(cipher.decrypt(encrypted_data), AES.block_size)

        # 将解密后的数据转换为 UTF-8 字符串
        decrypted_str = decrypted_data.decode('utf-8')
        return decrypted_str
    except Exception as e:
        print(f"Error during decryption: {e}")
        return None

def getWallpaperList():
    headers = {
        'Accept-Language': 'zh-CN,zh;q=0.9',
        'Connection': 'keep-alive',
        'Referer': 'https://haowallpaper.com/?isSel=true&page=8',
        'Sec-Fetch-Dest': 'empty',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Site': 'same-origin',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36',
        'accept': 'application/json',
        'cache-control': 'no-cache',
        'sec-ch-ua': '"Google Chrome";v="135", "Not-A.Brand";v="8", "Chromium";v="135"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
        'token': 'ack:_17453956386931941466022278',
        'Cookie': 'askId=ack%3A_17453956386931941466022278; Hm_lvt_3c3619543a455fffe6917f75aba0e02b=1745395654; HMACCOUNT=5DE3CF85C315AE1F; downEdit=true; isWebsiteLog=ok; cropperHint=ok; isShowElNotice=ok; Hm_lpvt_3c3619543a455fffe6917f75aba0e02b=1745403447',
    }
    url = "https://haowallpaper.com/link/pc/wallpaper/getWallpaperList"
    data = '{"page":"8","sortType":3,"isSel":"true","rows":9,"isFavorites":false,"wpType":1}'

    encrypted_data = aes_encrypt(data, key, iv)
    #print("Encrypted Data (Base64):", encrypted_data)
    params = {
        "data":encrypted_data
    }
    res = requests.get(url,headers=headers,verify=False,params=params)
    #print(res.text)
    data_code = res.status_code
    if data_code != 200 :
        return ""

    decrypted_data = aes_decrypt(res.json()["data"], key, iv)
    print("Decrypted Data:", decrypted_data)
    decrypted_data = decrypted_data.replace('\x00', '').replace('true', 'True').strip()
    print(type(eval(decrypted_data)))
    


if __name__ == "__main__":
    # encrypted_base64_str='NQnuUZeqJ/cI/ShycM/nzzu/p1X3FYS6/EKR3k/9HKFNUFxXsNL0/6twrNvaaLty0Ir/3aspKi1jLDZLO7aBYHZ/z86nChRsLZRWzMOZNF5ETL/GXmWMthzK1tdZibyf'
    # aaa = aes_decrypt(encrypted_base64_str, key, iv)
    getWallpaperList()