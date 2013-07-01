/**
 * Created with JetBrains WebStorm.
 * User: wheatowu
 * Date: 13-7-1
 * Time: 上午10:56
 * To change this template use File | Settings | File Templates.
 */

var settings = require('./settings'),
    Db = require('mongodb').Db,
    Connection  = require('mongodb').Connection,
    Server = require('mongodb').Server;

module.exports = new Db(settings.db,
    new Server(settings.host, Connection.DEFAULT_PORT, {}));

