
var mongoose = require('mongoose')
var Menu = mongoose.model('Menu')
exports.login = async (ctx, next) => {
    ctx.body = {
        success: true,
        data: {},
        message: '登录成功！'
    }
}
exports.menus = async (ctx, next) => {
    var query = Menu.find({});
    var res = await query.exec(function (err, result) {
        if (err) {

        } else {

            return result
        }
    })
    ctx.body = {
        success: true,
        data: res,
        message: '登录成功！'
    }
}

