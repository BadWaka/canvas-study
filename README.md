# canvas-study

# 学习canvas

## canvas 绘制七巧板

> GitHub: https://github.com/BadWaka/canvas-study/blob/master/public/2-2/tangram.html

> 参考视频：[慕课网-炫丽的倒计时效果Canvas绘图与动画基础-绘制直线、多边形和七巧板-慕课网](http://www.imooc.com/video/2435)


![](http://upload-images.jianshu.io/upload_images/1828354-ba94c6548b0dbff6.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>七巧板</title>
</head>
<body>
<canvas id="tangram"></canvas>
<script>

    // 数据数组
    var tangramArr = [
        {coordinateArr: [{x: 0, y: 0}, {x: 800, y: 0}, {x: 400, y: 400}], color: '#caff67'},
        {coordinateArr: [{x: 0, y: 0}, {x: 400, y: 400}, {x: 0, y: 800}], color: '#67becf'},
        {coordinateArr: [{x: 800, y: 0}, {x: 800, y: 400}, {x: 600, y: 600}, {x: 600, y: 200}], color: '#ef3d61'},
        {coordinateArr: [{x: 600, y: 200}, {x: 600, y: 600}, {x: 400, y: 400}], color: '#f9f51a'},
        {coordinateArr: [{x: 400, y: 400}, {x: 600, y: 600}, {x: 400, y: 800}, {x: 200, y: 600}], color: '#a594c0'},
        {coordinateArr: [{x: 200, y: 600}, {x: 400, y: 800}, {x: 0, y: 800}], color: '#fa8ecc'},
        {coordinateArr: [{x: 800, y: 400}, {x: 800, y: 800}, {x: 400, y: 800}], color: '#caff67'},
    ];

    window.onload = function () {
        var canvas = document.getElementById('tangram');
        canvas.width = 800;
        canvas.height = 800;

        var ctx = canvas.getContext('2d');
        tangramArr.forEach(function (item, index) {
            draw(item, ctx);
        });
    };

    function draw(item, ctx) {
        var coordinateArr = item.coordinateArr;
        var color = item.color;

        ctx.beginPath();    // beginPath方法类似于开启新的路径绘画或清空已有路径
        ctx.moveTo(coordinateArr[0].x, coordinateArr[0].y);
        for (var i = 1; i < coordinateArr.length; i++) {
            ctx.lineTo(coordinateArr[i].x, coordinateArr[i].y);
        }
        ctx.closePath();    // closePath并不是用来表示结束 而是功能性的 做图形闭合处理（从最后的状态点自动lineTo回归起始点封口）

        ctx.fillStyle = color;
        ctx.fill();
    }
</script>
</body>
</html>
```