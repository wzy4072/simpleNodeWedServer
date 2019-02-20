const Router = require('koa-router')
const User = require('../app/controllers/user')
const Account = require('../app/controllers/account')
const App = require('../app/controllers/app')

module.exports = function () {
  var router = new Router({
  })
  // prefix: '/api'

  // user

  // router.post('/signup', App.hasBody, User.signup)
  // router.post('/update', App.hasBody, App.hasToken, User.update)
  // router.get('/user/users',User.users)
  // router.post('/user/delete', App.hasBody, User.deleteUser)
  // router.post('/user/save', App.hasBody, User.signup)
  router.post('/user/list', User.users)
  router.post('/account/login', Account.login)
  router.get('/account/loginstate', Account.login)

  router.post('/getMenus', Account.menus)
  
  return router
}