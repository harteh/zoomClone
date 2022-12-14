# Noom  
NodeJS와 WebRTC, Websockets를 이용한 Zoom 클론코딩  
<br>

# :blue_heart: 개발환경  
:star2: Babel, Nodemon,Express을 활용해서 NodeJS 프로젝트 설정  
+ nodemon: 프로젝트에 변경사항이 있을 때 서버를 재시작 하는 프로그램  
+ babel: 작성한 코드를 일반 Node.js 코드로 컴파일  
+ server.js → BackEnd, app.js → FrontEnd에서 구동  

> **서버설정**
> + 프로젝트 생성 → npm init -y → package.json 설정변경  
> + nodemon 설치 → babel.config.json, nodeemon.json 생성  
> + src/server.js 생성  
  
> **Babel** 설치  
>> npm i @babel/core @babel/cli @babel/node @babel/preset-env -D  
>> gitignore에 /node_modules 추가  
> + nodemone.json에 exec 명령어 추가  
> + babel.config.json에 preset 설정 추가  
> + package.json에 scripts : dev추가 → dev는 nnodemon을 호출  
  
> **express** 설치  
> + pug 설치  
> + server.js에 express import  
> + 실행: npm run dev  
  
<br>

# FrontEnd  
+ server.js 파일에서 설정  
> Pug로 view engine 설정  
> Express에 template 경로 지정  
> public url 생성하여 클라이언트에가 파일 공유  
> route handler 생성 → home.pug를 render  

+ MVP css를 이용하여 ui를 꾸며준다  

<br>

# WebSocket을 이용한 실시간 채팅  
:star2: webSockket은 protocol이며 프로그래밍 언어에 국한되어있지 않다.  
> **Node.js로 webSocket 서버 만들기**  
> ws package 이용  

<br>

+ JavaScript object를 string으로 만드는 방법  
> JSON.stringify(msg)  
> websocket은 브라우저에 있는 API이기 때문에 JavaScript object가 아닌 string을 보내야한다  
>  
> JSON.parse() : string을 JavaScript object로 변환한다  

