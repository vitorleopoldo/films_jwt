const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UsersSchema = new Schema({
    name: { type: String },
    email: { type: String },
    password: { type: String },
    created_at: {type: Date, default: Date.now() },
    updated_at: {type: Date, default: Date.now() },    
});

const UsersModel = mongoose.model('Users', UsersSchema);


module.exports = UsersModel;