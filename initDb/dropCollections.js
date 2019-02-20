
const mongoose = require('mongoose')
const baseSet = require('./baseSet')
var async = require("async");

mongoose.connect(baseSet.dbName, { useMongoClient: true })

let db = mongoose.connection;
db.once('open', function () {
    console.log('db opend!')
    /**
 * 清空collections
 */
    var collectionNames = ['users']
    var db = mongoose.connection.db;
    async.forEachOf(collectionNames, (value, key, callback) => {
        db.dropCollection(value, function (err, result) {
            if (err) console.log(err);
            console.log(value, 'drop finished!')
            callback(null);
        })
    }, err => {
        if (err) console.error(err.message);
    });
});

