var express = require('express'),
    app = express(),
    http = require('http'),
    routes = require('./routes');


/*
 * 设置静态文件地址
 * html文件夹里面所放的为前端的HTML页面，包括以后静态化之后的HTML页面
 * upload是发布一个特效所包含的文件
 */
app.use(express.static('/wechat', __dirname + '/html'));
app.use(express.static('/wechat', __dirname + '/uploads'));

//网站路由
app.get('/list/:id', routes.list);
app.get('/post/:id', routes.post);


app.post('/login', routes.login);
app.post('/push', routes.push);
app.post('/save', routes.save);


http.createServer(app).listen(3000, function(){
    console.log('Express server listening on port ' + 3000);
});


