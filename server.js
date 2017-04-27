/**
 * Created by waka on 2017/4/25.
 */

const express = require('express');
const app = express();

// 设置静态目录
app.use(express.static('public'));

const server = app.listen(3000, function () {
    console.log('listening 3000...');
});