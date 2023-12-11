const mongoose = require("mongoose");


const TasksModel = mongoose.model('Tasks', {
    title: { type: String },
    description: { type: String },
    done: {   type: Boolean },
    created_at: {type: Date, default: Date.now() },
    updated_at: {type: Date, default: Date.now() },    
});

module.exports = TasksModel;