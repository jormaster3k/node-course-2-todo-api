const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

var id = '5b995fb457e8254b7436ef14';

Todo.findByIdAndRemove(id).then((todo) => {
    if (!todo) { return console.log('Todo Id not found'); }
    console.log(JSON.stringify(todo,undefined,2));
}).catch((e) => console.log(e));