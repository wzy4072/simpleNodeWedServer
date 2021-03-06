var mongoose =  require('mongoose')
var User = mongoose.model('User')

// 通过电话号码查询
exports.findById = async ({id}) => {
	var query = User.find({id})
	var res = null
	await query.exec(function(err, user) {
		if(err) {
			res = {}
		}else {
			res = user
		}
	})
	return res;
}

// 查找所用用户
exports.findAllUsers = async () => {
	var query = User.find({});
	var res = []
	await query.exec(function(err, users) {
		if(err) {
			res = []
		}else {
			res = users;
		}
	})
	return res
}

// 增加用户
exports.addUser = async (user) => {
	user = await user.save()
	return user
}

// 删除用户
exports.deleteUser = async ({id}) => {
	var flag = false
	await User.remove({id}, function(err) {
		if(err) {
			flag = false
			// return false
		}else{
			flag = true
		}
		
	})
	return flag
}
