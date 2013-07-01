/**
 * Created with JetBrains WebStorm.
 * User: wheatowu
 * Date: 13-7-1
 * Time: 下午12:51
 * To change this template use File | Settings | File Templates.
 */

var mongodb = require('./db.js');

exports.list = function(req, res){
    res.send('ok');
};

exports.post = function(req, res){

};



exports.login = function(req, res){
    var admin = {};
    admin.username = "admin";
    //验证登录
    mongodb.open(function(err, db){
        if(err){
            return err;
        }

        //读取 admin 集合
        db.collection('admin', function(err, collection){
            if(err){
                mongodb.close();
                return err;
            }
            collection.findOne({'username':admin.username, 'password':admin.password}, function(err, doc){
                if(doc){
                    //TODO:返回用户名和登陆状态
                }
            });
        });
    });
    res.send('ok');
};
exports.push = function(req, res){

};
exports.save = function(req, res){

};

