# Noom  
  
NodeJS와 WebRTC, Websockets를 이용한 Zoom 클론코딩  
  
+ Babel, Nodemon,Express을 활용해서 NodeJS 프로젝트 설정  
> **서버설정**
> + 프로젝트 생성 → npm init -y → package.json 설정변경  
> + nodemon 설치 → babel.config.json, nodeemon.json 생성  
> + src/server.js 생성  
  
> **Babel** 설치  
>> npm i @babel/core @babel/cli @babel/node @babel/preset-env -D  
>> + gitignore에 /node_modules 추가  
> + nodemone.json에 exec 명령어 추가  
> + babel.config.json에 preset 설정 추가  
> + package.json에 scripts : dev추가 → dev는 nnodemon을 호출  
  
> **express** 설치  
> + pug 설치  
> + server.js에 express import  
> + 실행: npm run dev  
  
  
# FrontEnd  
server.js 파일  
+ Pug로 view engine 설정  
+ Express에 template 경로 지정  
+ public url 생성하여 클라이언트에가 파일 공유  
+ route handler 생성 → home.pug를 render  
---  
MVP css를 이용하여 ui를 꾸며준다  