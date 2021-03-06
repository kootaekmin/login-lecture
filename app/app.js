'use strict';

/*
// 이것은 express 안쓰고 코딩하기

const http = require('http');
const app = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
  if (req.url === '/') {
    res.end('this is route');
  } else if (req.url === '/login') {
    res.end('여기는 로그인 입니다.');
  }
});

app.listen(3001, () => {
  console.log('http로 가동된 서버입니다.');
});
*/
// 모듈
const express = require('express');
const app = express();

// 라우팅
const home = require('./src/routes/home');

// 앱 세팅
app.set('views', './src/views');
app.set('view engine', 'ejs');
app.use(express.static(`${__dirname}/src/public`));

app.use('/', home); //use는 미들웨어를 등록해주는 메서드.

module.exports = app;
