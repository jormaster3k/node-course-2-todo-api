const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id = 'b9944dab7b675f439a15c7d';

// if (!ObjectID.isValid(id)) {
//     console.log('ID is not valid');
// }

// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos', todos);
// });

// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     if (!todo) { return console.log('Id not found'); }
//     console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//     if (!todo) { return console.log('Id not found'); }
//     console.log('Todo by id', todo);
// }).catch((e) => console.log(e));

var id = '5b97e46ddf40cb47637f8ecd';

User.findById(id).then((user) => {
    if (!user) { return console.log('User Id not found'); }
    console.log(JSON.stringify(user,undefined,2));
}).catch((e) => console.log(e));