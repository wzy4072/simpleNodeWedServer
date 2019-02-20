
const mongoose = require('mongoose')
var ObjectId = require('mongodb').ObjectID;
var async = require("async");

mongoose.Promise = require('bluebird')
mongoose.connect('mongodb://localhost/nodeapi', { useMongoClient: true })

let db = mongoose.connection;
db.once('open', function () {
    console.log('okay db opend!')

    /**
     * 清空整个数据库
     */
    //  mongoose.connection.db.dropDatabase()


    /**
     * 清空collections
     */
    // var collectionNames = ['test3','tests']
    // var db = mongoose.connection.db;
    // async.forEachOf(collectionNames, (value, key, callback) => {
    //     db.dropCollection(value, function (err) {
    //         if (err && err.message != 'ns not found') return done(err);
    //         callback(null);
    //     })

    // }, err => {
    //     if (err) console.error(err.message);
    // });



    /**
     * 批量插入
     */

    // let User = require('./app/models/user.js')
    // var docs = [
    //     { userName: '铁锈', realName: '周树人', passWord: 123, sex: 1, age: 16, email: 'aaa@132.com' },
    //     { userName: '米兰', realName: '花不弃', passWord: 123, sex: 0, age: 12, email: 'ddd@132.com' },
    //     { userName: '迷失', realName: '张三丰', passWord: 123, sex: 1, age: 18, email: 'fff@132.com' },
    //     { userName: '爱国', realName: '李世民', passWord: 123, sex: 1, age: 19, email: 'ggg@132.com' }
    // ]
    // User.collection.insert(docs, onInsert);

    // function onInsert(err, docs) {
    //     if (err) {
    //         console.error(err)
    //     } else {
    //         console.info('successfully stored.', docs.result.n);
    //     }
    // }


});

