// app.js

const express = require('express');
const app = express();
const path = require('path');

// 정적 파일을 제공하기 위한 미들웨어 설정
app.use(express.static(path.join(__dirname, 'public')));
app.use('/models', express.static(path.join(__dirname, 'models')));

// routes/route.js 파일을 사용하여 라우팅 설정
const route = require('./routes/route');
app.use('/', route);

// 서버 시작
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`서버 ON: http://localhost:${PORT}/`);
});
