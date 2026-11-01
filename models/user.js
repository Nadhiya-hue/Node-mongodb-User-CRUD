const mongoose = require('mongoose');
mongoose.connect(`mongodb://localhost:27017/users`);

// model structure
const Users = mongoose.Schema({
    name : String,
    imageurl : String,
    email : String
})

module.exports = mongoose.model('user', Users);