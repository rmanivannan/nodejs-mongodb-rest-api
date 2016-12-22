Nodejs mongodb REST API
=======================================
Boilerplate for REST API with oauth(login)  using nodejs mongoose/mongodb expressjs

##Prerequisites 

 - GIT, if not you have Download as zip option (Thanks to github)
 - Nodejs
 - Mongodb
    - if it is taking more time to setup MongoDB, use online DB(https://mlab.com), there is free plan ☺
 - REST Client Tool (POST Mastor tool - Chrome plugin)

you are ready to explore this Boilerplate !!!

##Steps to setup this application

 - git clone https://github.com/rmanivannan/nodejs-mongodb-rest-api.git
 - cd nodejs-mongodb-rest-api
 - npm install 
    - i prefer to use "yarn"
 - node app.js
    - before that update MongoDB url in "file:app.js"
     ```var connStr = 'mongodb://<username>:<password>@<domainName>:<port>/<DatabaseName>';```
 
##Use the APIs

###Open REST Client

Use below API details to Create User Account 

```
POST /api/register HTTP/1.1
Host: localhost:5000
Content-Type: application/json
Cache-Control: no-cache
Postman-Token: c35d5445-824f-49b5-17a3-7c02a87eeaed
Request Payload
{
	"username": "username1w",
	"password" : "myPassword",
	"cid":"C00671",
	"salutation": "Mr",
	"fname":"Manivannan",
	"lname":"Radhak",
	"email":"manivannan13tnj@gmail.com",
	"phone":"5577442233",
	"state":"KA",
	"role":"user"
}
Response Header
Status:200
Response Data
{
    "username": "username11w",
    "cid": "C6",
    "salutation": "Mr",
    "fname": "Manivannan",
    "lname": "Radhak",
    "email": "manivannan13tnj@gmail.com",
    "phone": "5577442233",
    "state": "KA",
    "role": "USER",
    "id": "5842709fa094f938a07ca1a1"
}

```

Use below API details to Login

```
POST /api/login HTTP/1.1
Host: localhost:5000
Content-Type: application/json
Cache-Control: no-cache
Postman-Token: 6a560992-53a1-bcdc-fc2b-cff6efff8baf
Request Payload
{
	"username": "username11w",
	"password" : "myPassword"
}

Response Header
Status 200
Response Data
{
  "success": true,
  "message": "Enjoy your token!",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyIkX18iOnsic3RyaWN0TW9kZSI6dHJ1ZSwiZ2V0dGVycyI6e30sIndhc1BvcHVsYXRlZCI6ZmFsc2UsImFjdGl2ZVBhdGhzIjp7InBhdGhzIjp7InJvbGUiOiJpbml0IiwicGhvbmUiOiJpbml0IiwiZW1haWwiOiJpbml0IiwibG5hbWUiOiJpbml0IiwiZm5hbWUiOiJpbml0IiwiY2lkIjoiaW5pdCIsInBhc3N3b3JkIjoiaW5pdCIsInVzZXJuYW1lIjoiaW5pdCIsIl9fdiI6ImluaXQiLCJzdGF0ZSI6ImluaXQiLCJzYWx1dGF0aW9uIjoiaW5pdCIsIl9pZCI6ImluaXQifSwic3RhdGVzIjp7Imlnbm9yZSI6e30sImRlZmF1bHQiOnt9LCJpbml0Ijp7Il9fdiI6dHJ1ZSwicm9sZSI6dHJ1ZSwic3RhdGUiOnRydWUsInBob25lIjp0cnVlLCJlbWFpbCI6dHJ1ZSwibG5hbWUiOnRydWUsImZuYW1lIjp0cnVlLCJzYWx1dGF0aW9uIjp0cnVlLCJjaWQiOnRydWUsInBhc3N3b3JkIjp0cnVlLCJ1c2VybmFtZSI6dHJ1ZSwiX2lkIjp0cnVlfSwibW9kaWZ5Ijp7fSwicmVxdWlyZSI6e319LCJzdGF0ZU5hbWVzIjpbInJlcXVpcmUiLCJtb2RpZnkiLCJpbml0IiwiZGVmYXVsdCIsImlnbm9yZSJdfSwiZW1pdHRlciI6eyJkb21haW4iOm51bGwsIl9ldmVudHMiOnt9LCJfZXZlbnRzQ291bnQiOjAsIl9tYXhMaXN0ZW5lcnMiOjB9fSwiaXNOZXciOmZhbHNlLCJfZG9jIjp7Il9fdiI6MCwicm9sZSI6IlVTRVIiLCJzdGF0ZSI6IktBIiwicGhvbmUiOiI1NTc3NDQyMjMzIiwiZW1haWwiOiJtYW5pdmFubmFuMTN0bmpAZ21haWwuY29tIiwibG5hbWUiOiJSYWRoYWsiLCJmbmFtZSI6Ik1hbml2YW5uYW4iLCJzYWx1dGF0aW9uIjoiTXIiLCJjaWQiOiJDNiIsInBhc3N3b3JkIjoiJDJhJDEwJG01ZFhCSzNSaW5EZ2pYMXcyVndHdC5zcUV4TnpicUlNUURiTDhPNXdlcHU5Szc4R2NtUFhPIiwidXNlcm5hbWUiOiJ1c2VybmFtZTExdyIsIl9pZCI6IjU4NDI3MDlmYTA5NGY5MzhhMDdjYTFhMSJ9LCJfcHJlcyI6eyIkX19vcmlnaW5hbF9zYXZlIjpbbnVsbCxudWxsLG51bGxdLCIkX19vcmlnaW5hbF92YWxpZGF0ZSI6W251bGxdLCIkX19vcmlnaW5hbF9yZW1vdmUiOltudWxsXX0sIl9wb3N0cyI6eyIkX19vcmlnaW5hbF9zYXZlIjpbXSwiJF9fb3JpZ2luYWxfdmFsaWRhdGUiOltdLCIkX19vcmlnaW5hbF9yZW1vdmUiOltdfSwiaWF0IjoxNDgwNzQ5NDgzLCJleHAiOjE0ODA3NTQyODN9.wLUBRKen6KfCpOImDndXsU5gevxEjD7UwamlaN_h2Yo"
}
```
Here you go :-) , AUTH Token is created. You can user this access token to acccess other APIs.
