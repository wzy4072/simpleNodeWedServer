
const mongoose = require('mongoose')
const baseSet = require('./baseSet')

mongoose.connect(baseSet.dbName, { useMongoClient: true })

let db = mongoose.connection;
db.once('open', function () {
    console.log('db opend!')
    /**
     * 清空整个数据库
     */
    mongoose.connection.db.dropDatabase((err, result) => {
        if (err) {
            console.log(err)
        }
        if (result) {
            console.log('finished!')
            db.close();
        }
    })
});

