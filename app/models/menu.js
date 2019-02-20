var mongoose = require('mongoose')
var Schema = mongoose.Schema

var Menu = new Schema({
    name: String,
    icon: String,
    children: Schema.Types.Mixed,
    route: String,
    meta: {
        createAt: {
            type: Date,
            dafault: Date.now()
        },
        updateAt: {
            type: Date,
            dafault: Date.now()
        }
    }
})

Menu.pre('save', function (next) {
    if (this.isNew) {
      this.meta.createAt = this.meta.updateAt = Date.now()
    }
    else {
      this.meta.updateAt = Date.now()
    }
    next()
  })

module.exports = mongoose.model('Menu', Menu)



