const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');


// Todo.remove({}).then((result) => {
//     console.log(result);
// });

Todo.findOneAndRemove({ _id: '5b55766d5405880b83d45755' }).then((todo) => {

});

Todo.findByIdAndRemove('5b55766d5405880b83d45755').then((todo) => {
    console.log(todo);
});
