var xss = require('xss')
var mongoose =  require('mongoose')
var User = mongoose.model('User')
var uuid = require('uuid')
// var userHelper = require('../dbhelper/userHelper')
import userHelper from '../dbhelper/userHelper'

// 注册新用户
exports.signup = async (ctx, next) => {
  const userName = xss(ctx.request.body.userName.trim())
	var user = await User.findOne({
	  userName: userName
	}).exec()
	if (!user) {
    var accessToken = uuid.v4() // '10ba038e-48da-487b-96e8-8d3b99b6d18a'
    let reqBody = ctx.request.body
	  user = new User({
      userName:xss(reqBody.userName.trim()),
      realName:xss(reqBody.realName.trim()),
      passWord:xss(reqBody.passWord.trim()),
      sex:reqBody.sex,
      age:reqBody.age,
      email:reqBody.email
	  })

    try {
      user = await user.save()
      ctx.body = {
        success: true,
        data:'注册成功'
      }
    }
    catch (e) {
      ctx.body = {
        success: false
      }
      console.log(e)
      return next
    }
	}
	else {
    ctx.body = {
        success: false,
        data:'该号码已经注册过'
      }
	}
}

// 更新用户信息操作
exports.update = async (ctx, next) => {
  var body = ctx.request.body
  var user = ctx.session.user
  var fields = 'avatar,gender,age,nickname,breed'.split(',')

  fields.forEach(function(field) {
    if (body[field]) {
      user[field] = xss(body[field].trim())
    }
  })

  user = await user.save()

  ctx.body = {
    success: true,
    data: {
      nickname: user.nickname,
      accessToken: user.accessToken,
      avatar: user.avatar,
      age: user.age,
      breed: user.breed,
      gender: user.gender,
      _id: user._id
    }
  }
}



/*获取所有用户*/
exports.users = async (ctx, next) => {
  var data = await userHelper.findAllUsers()
  ctx.body = {
    success: true,
    data
  }
}

/*删除某个用户*/

exports.deleteUser = async (ctx, next) => {
  // var data  = await userHelper.deleteUser({})
  ctx.body = {
    success: true,
    data:'删除成功'
  }
}