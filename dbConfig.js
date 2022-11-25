//object destructuring from console module and mongodb module which are both objects
const { Console } = require("console");
const { MongoClient } = require("mongodb"); 
require('dotenv').config()
// Create a new MongoClient
//const client = new MongoClient(process.env.DATABASE_LOCAL);
const client = new MongoClient(process.env.DATABASE_ATLAS);
console.log("Database Connected")
module.exports = {client};  //we can import client anywhere needed further, for crud, we need this while declaring database=> client.db
//module.exports is a special nodejs object for exporting modules
//export{class/func/var} =>used in javascript
//exports.mod/func/var = mod/func/var is used in nodejs, it's exports not export and it's an object