upload:
	rm big-cats.zip; zip -r big-cats.zip . && curl -X POST https://graph-video.facebook.com/1918442504907856/assets -F 'access_token=EAAYsfZAxiFmMBAJPpHU4JWIphNZCRbCxXZBspYSV9KhMJBQwAYMEYYVvIsMvHPdYDV96J7G5TX0tgPa1C2rzpbPNt6BsqPdBVEYYvBSIctuZC3gbN4RpRX2NO1VmdFhGv3hLL1h4d4EPwq4y9qZC7Gt7pTl9JRXqDfHuoMbtHTwZDZD' -F 'type=BUNDLE' -F 'asset=@./big-cats.zip' -F 'comment=Graph API upload'
