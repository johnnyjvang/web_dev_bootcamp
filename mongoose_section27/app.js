// require the mongoose npm
const mongoose = require('mongoose');

// how to connect to mongodb server with "database"
// if database does not exist, will make a new one
mongoose.connect('mongodb://localhost:27017/testDB');

// can add a Schema of how the collection is composed/arrange

const Cat = mongoose.model('Cat', { name: String });

const kitty = new Cat({ name: 'Zildjian' });
kitty.save().then(() => console.log('meow'));
