const db = require('./connnection');

const messages = db.get('messages');

function getAll(){
 return messages.find()
}


module.exports = {
  getAll
};