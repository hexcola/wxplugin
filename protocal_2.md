# 请求登录GET

## General
* Remote Address:127.0.0.1:3213
* Request URL:https://login.weixin.qq.com/jslogin?appid=wx782c26e4c19acffb&redirect_uri=https%3A%2F%2Fwx.qq.com%2Fcgi-bin%2Fmmwebwx-bin%2Fwebwxnewloginpage&fun=new&lang=en_US
* Request Method:GET

## Request Headers
* Cache-Control:no-cache, must-revalidate
* Connection:keep-alive
* Content-Encoding:deflate
* Content-Length:53
* Content-Type:text/javascript
* Content-Type:text/html; charset=gbk
* Request Headers
* view source
* Accept:*/*
* Accept-Encoding:gzip, deflate, sdch
* Accept-Language:en-US,en;q=0.8,zh-CN;q=0.6,zh;q=0.4,zh-TW;q=0.2
* Cache-Control:max-age=0
* Connection:keep-alive
Cookie:ptui_loginuin=6713963; pt_clientip=07917b345485fb0c; pt_serverip=23450aa687cc800b; FTN5K=c857d8ba; o_cookie=1217862958; qz_gdt=2hkjgvlqauajrlad2mqa; verifysession=h012cb6f28fd8131470f7928d198aa7b2dc98e55db22cabf9da0d9b7bdbb36f5b039f398fa3de0d455a; qm_username=1217862958; qm_sid=ed180bd87dbdc15c7f1eb325c234da97,qQlF4ZEQqLXJ5ZURKRlBsLUNvVHlhRlplckI3c2ZZZ0tqSExnbEY2UDZWOF8.; ptisp=cm; RK=23vOEckZYr; ptcz=73fdadcc5c5da6f817c5bf8febb523978fa893ac022439962a7b892176b31d3d; pt2gguin=o1217862958; uin=o1217862958; skey=@oEJncUvdi; qzone_check=1217862958_1436323611; pgv_pvi=1504266240; pgv_si=s5075936256; pgv_info=ssid=s3017264520; ts_refer=www.google.com/; pgv_pvid=1563754496; ts_uid=8902705360; MM_WX_NOTIFY_STATE=1; MM_WX_* SOUND_STATE=1
* DNT:1
* Host:login.weixin.qq.com
* Referer:https://wx.qq.com/
* User-Agent:Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/43.0.2357.132 Safari/537.36

## Query String Parameters
appid:wx782c26e4c19acffb
redirect_uri:https://wx.qq.com/cgi-bin/mmwebwx-bin/webwxnewloginpage
fun:new
lang:en_US

## Response
window.QRLogin.code = 200; window.QRLogin.uuid = "oYoxvQl3XA==";

# 获取登录二维码GET
## General
* Remote Address:127.0.0.1:3213
* Request URL:https://login.weixin.qq.com/qrcode/oYoxvQl3XA==
* Request Method:GET

## Request Headers
* Accept:image/webp,*/*;q=0.8
* Accept-Encoding:gzip, deflate, sdch
* Accept-Language:en-US,en;q=0.8,zh-CN;q=0.6,zh;q=0.4,zh-TW;q=0.2
* Cache-Control:max-age=0
* Connection:keep-alive
Cookie:ptui_loginuin=6713963; pt_clientip=07917b345485fb0c; pt_serverip=23450aa687cc800b; FTN5K=c857d8ba; o_cookie=1217862958; qz_gdt=2hkjgvlqauajrlad2mqa; verifysession=h012cb6f28fd8131470f7928d198aa7b2dc98e55db22cabf9da0d9b7bdbb36f5b039f398fa3de0d455a; qm_username=1217862958; qm_sid=ed180bd87dbdc15c7f1eb325c234da97,qQlF4ZEQqLXJ5ZURKRlBsLUNvVHlhRlplckI3c2ZZZ0tqSExnbEY2UDZWOF8.; ptisp=cm; RK=23vOEckZYr; ptcz=73fdadcc5c5da6f817c5bf8febb523978fa893ac022439962a7b892176b31d3d; pt2gguin=o1217862958; uin=o1217862958; skey=@oEJncUvdi; qzone_check=1217862958_1436323611; pgv_pvi=1504266240; pgv_si=s5075936256; pgv_info=ssid=s3017264520; ts_refer=www.google.com/; pgv_pvid=1563754496; ts_uid=8902705360; MM_WX_NOTIFY_STATE=1; MM_WX_* SOUND_STATE=1
* DNT:1
* Host:login.weixin.qq.com
* Referer:https://wx.qq.com/
* User-Agent:Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/43.0.2357.132 Safari/537.36

# 浏览器轮询客户端是否扫描和登录（频率约25s）GET
## General
* Remote Address:127.0.0.1:3213
* Request URL:https://login.weixin.qq.com/cgi-bin/mmwebwx-bin/login?loginicon=true&uuid=oYoxvQl3XA==&tip=0&r=-1890169253
* Request Method:GET

## Request Headers
* Accept:*/*
* Accept-Encoding:gzip, deflate, sdch
* Accept-Language:en-US,en;q=0.8,zh-CN;q=0.6,zh;q=0.4,zh-TW;q=0.2
* Cache-Control:max-age=0
* Connection:keep-alive
Cookie:ptui_loginuin=6713963; pt_clientip=07917b345485fb0c; pt_serverip=23450aa687cc800b; FTN5K=c857d8ba; o_cookie=1217862958; qz_gdt=2hkjgvlqauajrlad2mqa; verifysession=h012cb6f28fd8131470f7928d198aa7b2dc98e55db22cabf9da0d9b7bdbb36f5b039f398fa3de0d455a; qm_username=1217862958; qm_sid=ed180bd87dbdc15c7f1eb325c234da97,qQlF4ZEQqLXJ5ZURKRlBsLUNvVHlhRlplckI3c2ZZZ0tqSExnbEY2UDZWOF8.; ptisp=cm; RK=23vOEckZYr; ptcz=73fdadcc5c5da6f817c5bf8febb523978fa893ac022439962a7b892176b31d3d; pt2gguin=o1217862958; uin=o1217862958; skey=@oEJncUvdi; qzone_check=1217862958_1436323611; pgv_pvi=1504266240; pgv_si=s5075936256; pgv_info=ssid=s3017264520; ts_refer=www.google.com/; pgv_pvid=1563754496; ts_uid=8902705360; MM_WX_NOTIFY_STATE=1; MM_WX_* SOUND_STATE=1
* DNT:1
* Host:login.weixin.qq.com
* Referer:https://wx.qq.com/
* User-Agent:Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/43.0.2357.132 Safari/537.36

## Query String Parameters
* loginicon:true
* uuid:4aXFLvt3zg==
* tip:1
* r:-1890470241

## 结果
* 用户没有扫描：window.code=408;
* 用户扫描没有确认：window.code=201;window.userAvatar = 'data:img/jpg;base64,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';

* 用户扫描并确认：window.code=200;
window.redirect_uri="https://wx.qq.com/cgi-bin/mmwebwx-bin/webwxnewloginpage?ticket=ATq-2013_rWu5YFQF0ogKBoL@qrticket_0&uuid=4aXFLvt3zg==&lang=en_US&scan=1436409690&vcdataticket=AQbC-CJWYlPpgZ2qpLECosa8&vccdtstr=TowJZQgMIrOrwKGF5VYsrub23E4XNaFPj1n3Rmm7tsVh6hQK31delQt6czomMGi8";
	* ticket=ATq-2013_rWu5YFQF0ogKBoL@qrticket_0
	* uuid=4aXFLvt3zg==
	* lang=en_US
	* scan=1436409690
	* vcdataticket=AQbC-CJWYlPpgZ2qpLECosa8
	* vccdtstr=TowJZQgMIrOrwKGF5VYsrub23E4XNaFPj1n3Rmm7tsVh6hQK31delQt6czomMGi8





# 如果用户扫描并确认后，会获取一个重定向的URL GET
## General
* Remote Address:127.0.0.1:3213
* Request URL:https://wx.qq.com/cgi-bin/mmwebwx-bin/webwxnewloginpage?ticket=ATq-2013_rWu5YFQF0ogKBoL@qrticket_0&uuid=4aXFLvt3zg==&lang=en_US&scan=1436409690&vcdataticket=AQbC-CJWYlPpgZ2qpLECosa8& vccdtstr=TowJZQgMIrOrwKGF5VYsrub23E4XNaFPj1n3Rmm7tsVh6hQK31delQt6czomMGi8&fun=new&version=v2
* Request Method:GET

## Request Headers
* Accept:application/json, text/plain, */*
* Accept-Encoding:gzip, deflate, sdch
* Accept-Language:en-US,en;q=0.8,zh-CN;q=0.6,zh;q=0.4,zh-TW;q=0.2
* Cache-Control:max-age=0
* Connection:keep-alive
Cookie:ptui_loginuin=6713963; pt_clientip=07917b345485fb0c; pt_serverip=23450aa687cc800b; webwxuvid=551e7e72615ba4c56f5e9ca94ffb02074e463c360a978d393becb47923d4e589541242fe4e905230f048c0cb37403cb1; FTN5K=c857d8ba; o_cookie=1217862958; qz_gdt=2hkjgvlqauajrlad2mqa; verifysession=h012cb6f28fd8131470f7928d198aa7b2dc98e55db22cabf9da0d9b7bdbb36f5b039f398fa3de0d455a; qm_username=1217862958; qm_sid=ed180bd87dbdc15c7f1eb325c234da97,qQlF4ZEQqLXJ5ZURKRlBsLUNvVHlhRlplckI3c2ZZZ0tqSExnbEY2UDZWOF8.; ptisp=cm; RK=23vOEckZYr; ptcz=73fdadcc5c5da6f817c5bf8febb523978fa893ac022439962a7b892176b31d3d; pt2gguin=o1217862958; uin=o1217862958; skey=@oEJncUvdi; qzone_check=1217862958_1436323611; pgv_pvi=1504266240; pgv_si=s5075936256; pgv_info=ssid=s3017264520; pgv_pvid=1563754496; mm_lang=en; MM_WX_NOTIFY_STATE=1; * MM_WX_SOUND_STATE=1
* DNT:1
* Host:wx.qq.com
* Referer:https://wx.qq.com/
* User-Agent:Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/43.0.2357.132 Safari/537.36

## Query String Parameters
* ticket:ATq-2013_rWu5YFQF0ogKBoL@qrticket_0
* uuid:4aXFLvt3zg==
* lang:en_US
* scan:1436409690
* vcdataticket:AQbC-CJWYlPpgZ2qpLECosa8
* vccdtstr:TowJZQgMIrOrwKGF5VYsrub23E4XNaFPj1n3Rmm7tsVh6hQK31delQt6czomMGi8
* fun:new
* version:v2

## Response

```xml
<error>
	<ret>0</ret>
	<message>OK</message>
	<skey>@crypt_e7dba008_4b024ca6d1bf25be4aa47f158855953b</skey>
	<wxsid>0Gti2KgXF3txL1Q+</wxsid>
	<wxuin>2381672740</wxuin>
	<pass_ticket>oQqrO6P1QKa1yFrOC1RUu7UTkJmtUHHKgqonwPug2T8RLkncicgm%2FuULMYBm%2FTL4</pass_ticket>
	<isgrayscale>1</isgrayscale>
</error>
```
这对我们来说非常重要，因为以下的所有请求基本都需要这些返回的元素：


# 初始化微信 POST
## General
* Remote Address:127.0.0.1:3213
* Request URL:https://wx.qq.com/cgi-bin/mmwebwx-bin/webwxinit?r=-1890469951&pass_ticket=oQqrO6P1QKa1yFrOC1RUu7UTkJmtUHHKgqonwPug2T8RLkncicgm%252FuULMYBm%252FTL4
* Request Method:POST

## Request Headers
* Accept:application/json, text/plain, */*
* Accept-Encoding:gzip, deflate
* Accept-Language:en-US,en;q=0.8,zh-CN;q=0.6,zh;q=0.4,zh-TW;q=0.2
* Connection:keep-alive
* Content-Length:149
* Content-Type:application/json;charset=UTF-8
Cookie:ptui_loginuin=6713963; pt_clientip=07917b345485fb0c; pt_serverip=23450aa687cc800b; webwxuvid=551e7e72615ba4c56f5e9ca94ffb02074e463c360a978d393becb47923d4e589541242fe4e905230f048c0cb37403cb1; FTN5K=c857d8ba; o_cookie=1217862958; qz_gdt=2hkjgvlqauajrlad2mqa; verifysession=h012cb6f28fd8131470f7928d198aa7b2dc98e55db22cabf9da0d9b7bdbb36f5b039f398fa3de0d455a; qm_username=1217862958; qm_sid=ed180bd87dbdc15c7f1eb325c234da97,qQlF4ZEQqLXJ5ZURKRlBsLUNvVHlhRlplckI3c2ZZZ0tqSExnbEY2UDZWOF8.; ptisp=cm; RK=23vOEckZYr; ptcz=73fdadcc5c5da6f817c5bf8febb523978fa893ac022439962a7b892176b31d3d; pt2gguin=o1217862958; uin=o1217862958; skey=@oEJncUvdi; qzone_check=1217862958_1436323611; pgv_pvi=1504266240; pgv_si=s5075936256; pgv_info=ssid=s3017264520; pgv_pvid=1563754496; MM_WX_NOTIFY_STATE=1; MM_WX_SOUND* _STATE=1; wxuin=2381672740; wxsid=0Gti2KgXF3txL1Q+; wxloadtime=1436409695; mm_lang=en_US; webwx_data_ticket=AQbC/CJWYlPpgZ2qpLECosa8
* DNT:1
* Host:wx.qq.com
* Origin:https://wx.qq.com
* Referer:https://wx.qq.com/
* User-Agent:Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/43.0.2357.132 Safari/537.36

## Query String Parameters
r:-1890469951
pass_ticket:oQqrO6P1QKa1yFrOC1RUu7UTkJmtUHHKgqonwPug2T8RLkncicgm%2FuULMYBm%2FTL4

## Request Payload
BaseRequest: {
	DeviceID: "e965569521998987",
	Sid: "0Gti2KgXF3txL1Q+",
	Skey: "@crypt_e7dba008_4b024ca6d1bf25be4aa47f158855953b",
	Uin: "2381672740"
}



## Response:
用户的个人信息列表等。

其中为了保证能和服务器同步聊天信息， 下面的键值对很重要
{
		"Key": 1,
			"Val": 630477379
		}
		,{
			"Key": 2,
			"Val": 630478251
		}
		,{
			"Key": 3,
			"Val": 630478168
		}
		,{
			"Key": 1000,
			"Val": 1436400924
		}
}

# 微信状态通知 POST 目前不知道具体是做什么
## General
* Remote Address:127.0.0.1:3213
* Request URL:https://wx.qq.com/cgi-bin/mmwebwx-bin/webwxstatusnotify?pass_ticket=oQqrO6P1QKa1yFrOC1RUu7UTkJmtUHHKgqonwPug2T8RLkncicgm%252FuULMYBm%252FTL4
* Request Method:POST

## RequestHeaders
* Accept:application/json, text/plain, */*
* Accept-Encoding:gzip, deflate
* Accept-Language:en-US,en;q=0.8,zh-CN;q=0.6,zh;q=0.4,zh-TW;q=0.2
* Connection:keep-alive
* Content-Length:284
* Content-Type:application/json;charset=UTF-8
Cookie:ptui_loginuin=6713963; pt_clientip=07917b345485fb0c; pt_serverip=23450aa687cc800b; webwxuvid=551e7e72615ba4c56f5e9ca94ffb02074e463c360a978d393becb47923d4e589541242fe4e905230f048c0cb37403cb1; FTN5K=c857d8ba; o_cookie=1217862958; qz_gdt=2hkjgvlqauajrlad2mqa; verifysession=h012cb6f28fd8131470f7928d198aa7b2dc98e55db22cabf9da0d9b7bdbb36f5b039f398fa3de0d455a; qm_username=1217862958; qm_sid=ed180bd87dbdc15c7f1eb325c234da97,qQlF4ZEQqLXJ5ZURKRlBsLUNvVHlhRlplckI3c2ZZZ0tqSExnbEY2UDZWOF8.; ptisp=cm; RK=23vOEckZYr; ptcz=73fdadcc5c5da6f817c5bf8febb523978fa893ac022439962a7b892176b31d3d; pt2gguin=o1217862958; uin=o1217862958; skey=@oEJncUvdi; qzone_check=1217862958_1436323611; pgv_pvi=1504266240; pgv_si=s5075936256; pgv_info=ssid=s3017264520; pgv_pvid=1563754496; MM_WX_NOTIFY_STATE=1; MM_WX_SOUND* _STATE=1; wxuin=2381672740; wxsid=0Gti2KgXF3txL1Q+; wxloadtime=1436409695; mm_lang=en_US; webwx_data_ticket=AQbC/CJWYlPpgZ2qpLECosa8
* DNT:1
* Host:wx.qq.com
* Origin:https://wx.qq.com
* Referer:https://wx.qq.com/
* User-Agent:Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/43.0.2357.132 Safari/537.36

## Query String Paramters
pass_ticket:oQqrO6P1QKa1yFrOC1RUu7UTkJmtUHHKgqonwPug2T8RLkncicgm%2FuULMYBm%2FTL4

## Payload

```json
{
	"BaseRequest": {
			"DeviceID": "e227050461107865",
			"Sid": "0Gti2KgXF3txL1Q+",
			"Skey": "@crypt_e7dba008_4b024ca6d1bf25be4aa47f158855953b",
			"Uin": 2381672740
		},
	"ClientMsgId": 1436409696391,
	"Code": 3
	"FromUserName": "@439298fb2f6f69d44c55beda0c5edde3",
	"ToUserName": "@439298fb2f6f69d44c55beda0c5edde3", // 这个就是当前用户的ID
}
```

## Response

```json
{
	"BaseResponse": {
		"Ret": 0,
		"ErrMsg": ""
		},
	"MsgID": "2627483253941400956"
}
```

# 获取联系人列表 GET
## General
* Remote Address:127.0.0.1:3213
* Request URL:https://wx.qq.com/cgi-bin/mmwebwx-bin/webwxgetcontact?pass_ticket=oQqrO6P1QKa1yFrOC1RUu7UTkJmtUHHKgqonwPug2T8RLkncicgm%252FuULMYBm%252FTL4&r=1436409696499&skey=@crypt_ e7dba008_4b024ca6d1bf25be4aa47f158855953b
* Request Method:GET

## Reqeust Headers
* Accept:application/json, text/plain, */*
* Accept-Encoding:gzip, deflate, sdch
* Accept-Language:en-US,en;q=0.8,zh-CN;q=0.6,zh;q=0.4,zh-TW;q=0.2
* Connection:keep-alive
Cookie:ptui_loginuin=6713963; pt_clientip=07917b345485fb0c; pt_serverip=23450aa687cc800b; webwxuvid=551e7e72615ba4c56f5e9ca94ffb02074e463c360a978d393becb47923d4e589541242fe4e905230f048c0cb37403cb1; FTN5K=c857d8ba; o_cookie=1217862958; qz_gdt=2hkjgvlqauajrlad2mqa; verifysession=h012cb6f28fd8131470f7928d198aa7b2dc98e55db22cabf9da0d9b7bdbb36f5b039f398fa3de0d455a; qm_username=1217862958; qm_sid=ed180bd87dbdc15c7f1eb325c234da97,qQlF4ZEQqLXJ5ZURKRlBsLUNvVHlhRlplckI3c2ZZZ0tqSExnbEY2UDZWOF8.; ptisp=cm; RK=23vOEckZYr; ptcz=73fdadcc5c5da6f817c5bf8febb523978fa893ac022439962a7b892176b31d3d; pt2gguin=o1217862958; uin=o1217862958; skey=@oEJncUvdi; qzone_check=1217862958_1436323611; pgv_pvi=1504266240; pgv_si=s5075936256; pgv_info=ssid=s3017264520; pgv_pvid=1563754496; MM_WX_NOTIFY_STATE=1; MM_WX_SOUND* _STATE=1; wxuin=2381672740; wxsid=0Gti2KgXF3txL1Q+; wxloadtime=1436409695; mm_lang=en_US; webwx_data_ticket=AQbC/CJWYlPpgZ2qpLECosa8
* DNT:1
* Host:wx.qq.com
* Referer:https://wx.qq.com/
* User-Agent:Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/43.0.2357.132 Safari/537.36

## Query String Parameters
* pass_ticket:oQqrO6P1QKa1yFrOC1RUu7UTkJmtUHHKgqonwPug2T8RLkncicgm%2FuULMYBm%2FTL4
* r:1436409696499
* skey:@crypt_e7dba008_4b024ca6d1bf25be4aa47f158855953b

## Response
JSON file

```json
{
"BaseResponse": {"Ret": 0, "ErrMsg": ""},
"MemberCount": 554,
"MemberList":
		[
			{
				"Uin": 2393861983,
				"UserName": "@8f5a6259e7cbff8e37bc17279a024b64",
				"NickName": "å¾®ä¿¡æ”¯ä»˜",
				"HeadImgUrl": "/cgi-bin/mmwebwx-bin/webwxgeticon?seq=620594322&username=@8f5a6259e7cbff8e37bc17279a024b64&skey=@crypt_e7dba008_4b024ca6d1bf25be4aa47f158855953b",
				"ContactFlag": 1,
				"MemberCount": 0,
				"MemberList": [],
				"RemarkName": "",
				"HideInputBarFlag": 0,
				"Sex": 0,
				"Signature": "å¸®åŠ©è§£å†³å¾®ä¿¡æ”¯ä»˜ä¸­é‡åˆ°çš„å›°éš¾ï¼Œæ”¶é›†å…³äºŽå¾®ä¿¡æ”¯ä»˜çš„å»ºè®®åé¦ˆã€‚",
				"VerifyFlag": 24,
				"OwnerUin": 0,
				"PYInitial": "WXZF",
				"PYQuanPin": "weixinzhifu",
				"RemarkPYInitial": "",
				"RemarkPYQuanPin": "",
				"StarFriend": 0,
				"AppAccountFlag": 0,
				"Statues": 0,
				"AttrStatus": 0,
				"Province": "Guangdong",
				"City": "",
				"Alias": "wxzhifu",
				"SnsFlag": 0,
				"UniFriend": 0,
				"DisplayName": "",
				"ChatRoomId": 0,
				"KeyWord": "gh_"
			},
		]
	
}
```

# 获取联系人头像 GET
## General
* Remote Address:127.0.0.1:3213
* Request URL:https://wx.qq.com/cgi-bin/mmwebwx-bin/webwxgeticon?seq=257057516&username=@439298fb2f6f69d44c55beda0c5edde3&skey=@crypt_e7dba008_4b024ca6d1bf25be4aa47f158855953b
* Request Method:GET

## Request Headers
* Accept:image/webp,*/*;q=0.8
* Accept-Encoding:gzip, deflate, sdch
* Accept-Language:en-US,en;q=0.8,zh-CN;q=0.6,zh;q=0.4,zh-TW;q=0.2
* Connection:keep-alive
Cookie:ptui_loginuin=6713963; pt_clientip=07917b345485fb0c; pt_serverip=23450aa687cc800b; webwxuvid=551e7e72615ba4c56f5e9ca94ffb02074e463c360a978d393becb47923d4e589541242fe4e905230f048c0cb37403cb1; FTN5K=c857d8ba; o_cookie=1217862958; qz_gdt=2hkjgvlqauajrlad2mqa; verifysession=h012cb6f28fd8131470f7928d198aa7b2dc98e55db22cabf9da0d9b7bdbb36f5b039f398fa3de0d455a; qm_username=1217862958; qm_sid=ed180bd87dbdc15c7f1eb325c234da97,qQlF4ZEQqLXJ5ZURKRlBsLUNvVHlhRlplckI3c2ZZZ0tqSExnbEY2UDZWOF8.; ptisp=cm; RK=23vOEckZYr; ptcz=73fdadcc5c5da6f817c5bf8febb523978fa893ac022439962a7b892176b31d3d; pt2gguin=o1217862958; uin=o1217862958; skey=@oEJncUvdi; qzone_check=1217862958_1436323611; pgv_pvi=1504266240; pgv_si=s5075936256; pgv_info=ssid=s3017264520; pgv_pvid=1563754496; MM_WX_NOTIFY_STATE=1; MM_WX_SOUND* _STATE=1; wxuin=2381672740; wxsid=0Gti2KgXF3txL1Q+; wxloadtime=1436409695; mm_lang=en_US; webwx_data_ticket=AQbC/CJWYlPpgZ2qpLECosa8
* DNT:1
* Host:wx.qq.com
* Referer:https://wx.qq.com/
* User-Agent:Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/43.0.2357.132 Safari/537.36

## Query String Parameters
* seq:257057516
* username:@439298fb2f6f69d44c55beda0c5edde3
* skey:@crypt_e7dba008_4b024ca6d1bf25be4aa47f158855953b

## 返回 
132X132图像

# 获取群头像
## General
* Remote Address:127.0.0.1:3213
* Request URL:https://wx.qq.com/cgi-bin/mmwebwx-bin/webwxgetheadimg?seq=630478243&username=@@da5f6a475c9e6360fc077930f24c78d92b84543d12326ca95bf96ecc580fb426&skey=@crypt_e7dba008_4b024ca6d1bf25be4aa47f158855953b
* Request Method:GET

## Request Header
* Accept:image/webp,*/*;q=0.8
* Accept-Encoding:gzip, deflate, sdch
* Accept-Language:en-US,en;q=0.8,zh-CN;q=0.6,zh;q=0.4,zh-TW;q=0.2
* Connection:keep-alive
Cookie:ptui_loginuin=6713963; pt_clientip=07917b345485fb0c; pt_serverip=23450aa687cc800b; webwxuvid=551e7e72615ba4c56f5e9ca94ffb02074e463c360a978d393becb47923d4e589541242fe4e905230f048c0cb37403cb1; FTN5K=c857d8ba; o_cookie=1217862958; qz_gdt=2hkjgvlqauajrlad2mqa; verifysession=h012cb6f28fd8131470f7928d198aa7b2dc98e55db22cabf9da0d9b7bdbb36f5b039f398fa3de0d455a; qm_username=1217862958; qm_sid=ed180bd87dbdc15c7f1eb325c234da97,qQlF4ZEQqLXJ5ZURKRlBsLUNvVHlhRlplckI3c2ZZZ0tqSExnbEY2UDZWOF8.; ptisp=cm; RK=23vOEckZYr; ptcz=73fdadcc5c5da6f817c5bf8febb523978fa893ac022439962a7b892176b31d3d; pt2gguin=o1217862958; uin=o1217862958; skey=@oEJncUvdi; qzone_check=1217862958_1436323611; pgv_pvi=1504266240; pgv_si=s5075936256; pgv_info=ssid=s3017264520; pgv_pvid=1563754496; MM_WX_NOTIFY_STATE=1; MM_WX_SOUND* _STATE=1; wxuin=2381672740; wxsid=0Gti2KgXF3txL1Q+; wxloadtime=1436409695; mm_lang=en_US; webwx_data_ticket=AQbC/CJWYlPpgZ2qpLECosa8
* DNT:1
* Host:wx.qq.com
* Referer:https://wx.qq.com/
* User-Agent:Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/43.0.2357.132 Safari/537.36

## Query string Paramters
* seq:630478243
* username:@@da5f6a475c9e6360fc077930f24c78d92b84543d12326ca95bf96ecc580fb426
* skey:@crypt_e7dba008_4b024ca6d1bf25be4aa47f158855953b

## 返回
139 x 139 头像



# 同步聊天记录
## General
* Remote Address:127.0.0.1:3213
* Request URL:https://webpush.weixin.qq.com/cgi-bin/mmwebwx-bin/synccheck?r=1436409696503&skey=%40crypt_e7dba008_4b024ca6d1bf25be4aa47f158855953b&sid=0Gti2KgXF3txL1Q%2B&uin=2381672740&deviceid=e529904824448749& synckey=1_630477379%7C2_630478251%7C3_630478168%7C1000_1436400924&pass_ticket=oQqrO6P1QKa1yFrOC1RUu7UTkJmtUHHKgqonwPug2T8RLkncicgm%252FuULMYBm%252FTL4
* Request Method:GET

## Reqeust Headers
* Accept:*/*
* Accept-Encoding:gzip, deflate, sdch
* Accept-Language:en-US,en;q=0.8,zh-CN;q=0.6,zh;q=0.4,zh-TW;q=0.2
* Connection:keep-alive
Cookie:ptui_loginuin=6713963; pt_clientip=07917b345485fb0c; pt_serverip=23450aa687cc800b; FTN5K=c857d8ba; o_cookie=1217862958; qz_gdt=2hkjgvlqauajrlad2mqa; verifysession=h012cb6f28fd8131470f7928d198aa7b2dc98e55db22cabf9da0d9b7bdbb36f5b039f398fa3de0d455a; qm_username=1217862958; qm_sid=ed180bd87dbdc15c7f1eb325c234da97,qQlF4ZEQqLXJ5ZURKRlBsLUNvVHlhRlplckI3c2ZZZ0tqSExnbEY2UDZWOF8.; ptisp=cm; RK=23vOEckZYr; ptcz=73fdadcc5c5da6f817c5bf8febb523978fa893ac022439962a7b892176b31d3d; pt2gguin=o1217862958; uin=o1217862958; skey=@oEJncUvdi; qzone_check=1217862958_1436323611; pgv_pvi=1504266240; pgv_si=s5075936256; pgv_info=ssid=s3017264520; ts_refer=www.google.com/; pgv_pvid=1563754496; ts_uid=8902705360; webwx_data_ticket=AQbC/* CJWYlPpgZ2qpLECosa8
* DNT:1
* Host:webpush.weixin.qq.com
* Referer:https://wx.qq.com/
* User-Agent:Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/43.0.2357.132 Safari/537.36

## Querying String Parameters 
* r:1436409696503
* skey:@crypt_e7dba008_4b024ca6d1bf25be4aa47f158855953b
* sid:0Gti2KgXF3txL1Q+
* uin:2381672740
* deviceid:e529904824448749
* synckey:1_630477379|2_630478251|3_630478168|1000_1436400924
* pass_ticket:oQqrO6P1QKa1yFrOC1RUu7UTkJmtUHHKgqonwPug2T8RLkncicgm%2FuULMYBm%2FTL4

## 返回
无消息：window.synccheck={retcode:"0",selector:"0"}
有消息：window.synccheck={retcode:"0",selector:"2"}
如果有消息，则向请求微信同步

# 微信状态同步
## General
* Remote Address:127.0.0.1:3213
* Request URL:https://wx.qq.com/cgi-bin/mmwebwx-bin/webwxsync?sid=0Gti2KgXF3txL1Q+&skey=@crypt_e7dba008_4b024ca6d1bf25be4aa47f158855953b&pass_ticket=oQqrO6P1QKa1yFrOC1RUu7UTkJmtUHHKgqonwPug2T8RLkncicgm%252FuULMYBm%252FTL4
* Request Method:POST

## Request Headers
* Accept:application/json, text/plain, */*
* Accept-Encoding:gzip, deflate
* Accept-Language:en-US,en;q=0.8,zh-CN;q=0.6,zh;q=0.4,zh-TW;q=0.2
* Connection:keep-alive
* Content-Length:359
* Content-Type:application/json;charset=UTF-8
Cookie:ptui_loginuin=6713963; pt_clientip=07917b345485fb0c; pt_serverip=23450aa687cc800b; webwxuvid=551e7e72615ba4c56f5e9ca94ffb02074e463c360a978d393becb47923d4e589541242fe4e905230f048c0cb37403cb1; FTN5K=c857d8ba; o_cookie=1217862958; qz_gdt=2hkjgvlqauajrlad2mqa; verifysession=h012cb6f28fd8131470f7928d198aa7b2dc98e55db22cabf9da0d9b7bdbb36f5b039f398fa3de0d455a; qm_username=1217862958; qm_sid=ed180bd87dbdc15c7f1eb325c234da97,qQlF4ZEQqLXJ5ZURKRlBsLUNvVHlhRlplckI3c2ZZZ0tqSExnbEY2UDZWOF8.; ptisp=cm; RK=23vOEckZYr; ptcz=73fdadcc5c5da6f817c5bf8febb523978fa893ac022439962a7b892176b31d3d; pt2gguin=o1217862958; uin=o1217862958; skey=@oEJncUvdi; qzone_check=1217862958_1436323611; pgv_pvi=1504266240; pgv_si=s5075936256; pgv_info=ssid=s3017264520; pgv_pvid=1563754496; MM_WX_NOTIFY_STATE=1; MM_WX_SOUND* _STATE=1; mm_lang=en_US; wxloadtime=1436409695_expired; wxpluginkey=1436403226; wxuin=2381672740; wxsid=0Gti2KgXF3txL1Q+; webwx_data_ticket=AQbC/CJWYlPpgZ2qpLECosa8
* DNT:1
* Host:wx.qq.com
* Origin:https://wx.qq.com
* Referer:https://wx.qq.com/
* User-Agent:Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/43.0.2357.132 Safari/537.36

## Query String Paramters 
sid:0Gti2KgXF3txL1Q 
skey:@crypt_e7dba008_4b024ca6d1bf25be4aa47f158855953b
pass_ticket:oQqrO6P1QKa1yFrOC1RUu7UTkJmtUHHKgqonwPug2T8RLkncicgm%2FuULMYBm%2FTL4

## Requst Payload

```json
{
	"BaseReqeust":{
		"DeviceID": "e809848617063835",
		"Sid": "0Gti2KgXF3txL1Q+",
		"Skey": "@crypt_e7dba008_4b024ca6d1bf25be4aa47f158855953b",
		"Uin": 2381672740
	},
	"SyncKey": {
		"Count": 6,
		"List":[
			{"Key": 1, "Val": 630477379},
			{"Key": 2, "Val": 630478255},
			{"Key": 3, "Val": 630478168},
			{"Key": 11, "Val": 630478247},
			{"Key": 201, "Val": 1436409745},
			{"Key": 1000, "Val": 1436403226}
		],
		"rr": -1890672329
	}

}
```

## Response
有消息

``` json
{
"BaseResponse": {
"Ret": 0,
"ErrMsg": ""
}
,
"AddMsgCount": 1,
"AddMsgList": [{
"MsgId": "3000089369891155132",
"FromUserName": "@@da5f6a475c9e6360fc077930f24c78d92b84543d12326ca95bf96ecc580fb426",
"ToUserName": "@439298fb2f6f69d44c55beda0c5edde3",
"MsgType": 1,
"Content": "@70ebb8d6dfbf14d45216795725322d93eb983abf21125a6a5644af0f0e5f9382:<br/>æ€»ç»“çš„ä¸é”™ã€‚",
"Status": 3,
"ImgStatus": 1,
"CreateTime": 1436409749,
"VoiceLength": 0,
"PlayLength": 0,
"FileName": "",
"FileSize": "",
"MediaId": "",
"Url": "",
"AppMsgType": 0,
"StatusNotifyCode": 0,
"StatusNotifyUserName": "",
"RecommendInfo": {
"UserName": "",
"NickName": "",
"QQNum": 0,
"Province": "",
"City": "",
"Content": "",
"Signature": "",
"Alias": "",
"Scene": 0,
"VerifyFlag": 0,
"AttrStatus": 0,
"Sex": 0,
"Ticket": "",
"OpCode": 0
}
,
"ForwardFlag": 0,
"AppInfo": {
"AppID": "",
"Type": 0
}
,
"HasProductId": 0,
"Ticket": "",
"ImgHeight": 0,
"ImgWidth": 0,
"SubMsgType": 0,
"NewMsgId": 3000089369891155132,
"MD5": ""
}
],
"ModContactCount": 0,
"ModContactList": [],
"DelContactCount": 0,
"DelContactList": [],
"ModChatRoomMemberCount": 0,
"ModChatRoomMemberList": [],
"Profile": {
"BitFlag": 0,
"UserName": {
"Buff": ""
}
,
"NickName": {
"Buff": ""
}
,
"BindUin": 0,
"BindEmail": {
"Buff": ""
}
,
"BindMobile": {
"Buff": ""
}
,
"Status": 0,
"Sex": 0,
"PersonalCard": 0,
"Alias": "",
"HeadImgUpdateFlag": 0,
"HeadImgUrl": "",
"Signature": ""
}
,
"ContinueFlag": 0,
"SyncKey": {
"Count": 6,
"List": [{
"Key": 1,
"Val": 630477379
}
,{
"Key": 2,
"Val": 630478256
}
,{
"Key": 3,
"Val": 630478168
}
,{
"Key": 11,
"Val": 630478247
}
,{
"Key": 201,
"Val": 1436409749
}
,{
"Key": 1000,
"Val": 1436403226
}
]
}
,
"SKey": ""
}

```


# 如果未加载用户的头像信息：则需要从服务器加载用户头像：

# 如果用户发图片，则需要从服务器同步的消息ID（MsgID）来获取信息图片：
## General
Remote Address:127.0.0.1:3213
Request URL:https://wx.qq.com/cgi-bin/mmwebwx-bin/webwxgetmsgimg?&MsgID=3604577953165653298&skey=%40crypt_e7dba008_4b024ca6d1bf25be4aa47f158855953b&type=slave
Request Method:GET

## Request Headers:
Accept:image/webp,*/*;q=0.8
Accept-Encoding:gzip, deflate, sdch
Accept-Language:en-US,en;q=0.8,zh-CN;q=0.6,zh;q=0.4,zh-TW;q=0.2
Connection:keep-alive
Cookie:ptui_loginuin=6713963; pt_clientip=07917b345485fb0c; pt_serverip=23450aa687cc800b; webwxuvid=551e7e72615ba4c56f5e9ca94ffb02074e463c360a978d393becb47923d4e589541242fe4e905230f048c0cb37403cb1; FTN5K=c857d8ba; o_cookie=1217862958; qz_gdt=2hkjgvlqauajrlad2mqa; verifysession=h012cb6f28fd8131470f7928d198aa7b2dc98e55db22cabf9da0d9b7bdbb36f5b039f398fa3de0d455a; qm_username=1217862958; qm_sid=ed180bd87dbdc15c7f1eb325c234da97,qQlF4ZEQqLXJ5ZURKRlBsLUNvVHlhRlplckI3c2ZZZ0tqSExnbEY2UDZWOF8.; ptisp=cm; RK=23vOEckZYr; ptcz=73fdadcc5c5da6f817c5bf8febb523978fa893ac022439962a7b892176b31d3d; pt2gguin=o1217862958; uin=o1217862958; skey=@oEJncUvdi; qzone_check=1217862958_1436323611; pgv_pvi=1504266240; pgv_si=s5075936256; pgv_info=ssid=s3017264520; pgv_pvid=1563754496; MM_WX_NOTIFY_STATE=1; MM_WX_SOUND_STATE=1; mm_lang=en_US; wxloadtime=1436409695_expired; wxpluginkey=1436403226; wxuin=2381672740; wxsid=0Gti2KgXF3txL1Q+; webwx_data_ticket=AQbC/CJWYlPpgZ2qpLECosa8
DNT:1
Host:wx.qq.com
Referer:https://wx.qq.com/
User-Agent:Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/43.0.2357.132 Safari/537.36

## Query String Paramters:
MsgID:3604577953165653298
skey:@crypt_e7dba008_4b024ca6d1bf25be4aa47f158855953b
type:slave

##  返回图片



# 退出登录
## General
Remote Address:127.0.0.1:3213
Request URL:https://wx.qq.com/cgi-bin/mmwebwx-bin/webwxlogout?redirect=1&type=0&skey=%40crypt_e7dba008_4b024ca6d1bf25be4aa47f158855953b
Request Method:POST

## Reqeust Headers
Accept:text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8
Accept-Encoding:gzip, deflate
Accept-Language:en-US,en;q=0.8,zh-CN;q=0.6,zh;q=0.4,zh-TW;q=0.2
Cache-Control:max-age=0
Connection:keep-alive
Content-Length:37
Content-Type:application/x-www-form-urlencoded
Cookie:ptui_loginuin=6713963; pt_clientip=07917b345485fb0c; pt_serverip=23450aa687cc800b; webwxuvid=551e7e72615ba4c56f5e9ca94ffb02074e463c360a978d393becb47923d4e589541242fe4e905230f048c0cb37403cb1; FTN5K=c857d8ba; o_cookie=1217862958; qz_gdt=2hkjgvlqauajrlad2mqa; verifysession=h012cb6f28fd8131470f7928d198aa7b2dc98e55db22cabf9da0d9b7bdbb36f5b039f398fa3de0d455a; qm_username=1217862958; qm_sid=ed180bd87dbdc15c7f1eb325c234da97,qQlF4ZEQqLXJ5ZURKRlBsLUNvVHlhRlplckI3c2ZZZ0tqSExnbEY2UDZWOF8.; RK=23vOEckZYr; pgv_pvi=1504266240; pgv_si=s5075936256; pgv_info=ssid=s3017264520; pgv_pvid=1563754496; MM_WX_NOTIFY_STATE=1; MM_WX_SOUND_STATE=1; mm_lang=en_US; wxloadtime=1436409695_expired; ptisp=cm; ptcz=73fdadcc5c5da6f817c5bf8febb523978fa893ac022439962a7b892176b31d3d; pt2gguin=o1217862958; uin=o1217862958; skey=@P0LfDbKax; qzone_check=1217862958_1436418663; wxpluginkey=1436403226; wxuin=2381672740
DNT:1
Host:wx.qq.com
Origin:https://wx.qq.com
Referer:https://wx.qq.com/
User-Agent:Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/43.0.2357.132 Safari/537.36

## Query String Paramters
redirect:1
type:0
skey:@crypt_e7dba008_4b024ca6d1bf25be4aa47f158855953b

## Form Data
sid:0Gti2KgXF3txL1Q+
uin:2381672740