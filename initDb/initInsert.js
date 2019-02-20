
const mongoose = require('mongoose')
const baseSet = require('./baseSet')
mongoose.connect(baseSet.dbName, { useMongoClient: true })
let db = mongoose.connection;


function onInsert(err, docs) {
    if (err) {
        console.error(err)
    } else {
        console.info('successfully stored.', docs.result.n);
        // 如果初始化多个表格时 这里不应该关闭
        // db.close();
    }
}


db.once('open', function () {
    console.log('db opend!')
    /**
     * 批量插入
     */
    let User = require('../app/models/user.js')
    var docs = [
        { userName: '铁锈', realName: '周树人', passWord: 123, sex: 1, age: 16, email: 'aaa@132.com' },
        { userName: '米兰', realName: '花不弃', passWord: 123, sex: 0, age: 12, email: 'ddd@132.com' },
        { userName: '迷失', realName: '张三丰', passWord: 123, sex: 1, age: 18, email: 'fff@132.com' },
        { userName: '爱国', realName: '李世民', passWord: 123, sex: 1, age: 19, email: 'ggg@132.com' }
    ]
    User.collection.insert(docs, onInsert);

    let Menu = require('../app/models/user.js')
    let menus = [
        {
            "name": "欢迎页",
            "icon": "menu",
            "route": "/welcome"
        },
        {
            "name": "用户管理",
            "icon": "goods",
            "children": [
                {
                    "name": "用户列表",
                    "route": "/user/list"
                }
            ]
        },
        {
            "name": "用户管理",
            "icon": "menu",
            "route": "/user"
        }
    ]
    Menu.collection.insert(menus, onInsert);

});

