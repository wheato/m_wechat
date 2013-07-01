/**
 * Created with JetBrains WebStorm.
 * User: wheatowu
 * Date: 13-7-1
 * Time: 下午5:04
 * To change this template use File | Settings | File Templates.
 */

var mongodb = require('mongodb');

function Article(article){
    this.title = article.title;
    this.js = article.js;
    this.html = article.html;
    this.css = article.css;
    this.info = article.info;
    this.image = article.image;
    this.index = article.index;
};

module.exports = Article;

//存储文章内容
Article.prototype.save = function(callback){
    var article = {
        title : this.title,
        js : this.js,
        html : this.html,
        css : this.css,
        info : this.info,
        image : this.image,
        index : this.index
    };

    //打开数据库
    mongodb.open(function(err, db){
        if(err){
            return callback(err);
        }
        //读取articles集合
        db.collection('articles', function(err, collection){
            if(err){
                mongodb.close();
                return callback(err);
            }
            //将文章数据插入 articles 集合
            collection.insert(article,{safe: true}, function(err, article){
                mongodb.close();
                callback(err, "文章添加成功");
            });
        });
    });
};

Article.getList = function(page, callback){
    var PAGENUM = 16;
    page = page ? page : 1;
    //打开数据库
    mongodb.open(function(err, db){
        if(err){
            return callback(err);
        }
        db.collection('articles', function(err, collection){
            if(err){
                mongodb.close();
                return callback(err);
            }
            collection.find(function(err, doc){
                mongodb.colse();
                if(doc){
                    return callback(err, doc);
                } else {
                    return callback(err, null);
                }
            }).skip((page - 1) * PAGENUM).limit(PAGENUM);

        });
    });
};

Article.getById = function(id, callback){
    //打开数据库
    mongodb.open(function(err, db){
        if(err){
            return callback(err);
        }
        db.collection('articles', function(err, collection){
            if(err){
                mongodb.close();
                return callback(err);
            }
            collection.findOne({id:id}, function(err, doc){
                mongodb.close();
                if(doc){
                    return callback(err, doc);
                } else {
                    return callback(err, null);
                }
            });
        });
    });
};

Article.update = function(article, id, callback){
    //打开数据库
    mongodb.open(function(err, db){
        if(err){
            return callback(err);
        }
        db.collection('articles', function(err, collection){
            if(err){
                mongodb.close();
                return callback(err);
            }
            collection.update({id:id}, article, function(err, doc){
                mongodb.close();
                return callback(err, doc);
            });
        });
    });
};
