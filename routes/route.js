// routes/route.js

const express = require('express');
const router = express.Router();
const path = require('path');

// GET 요청을 처리하는 라우트 추가
router.get('/', (req, res) => {
    // index.html 파일을 클라이언트에게 전송
    res.sendFile(path.join(__dirname, '..', 'public', 'views', 'index.html'));
});

module.exports = router;
