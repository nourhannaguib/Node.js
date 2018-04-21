var mongoose = require('mongoose');
let mongo_url = 'mongodb://localhost/node-my-project';

if(process.env.NODE_ENV === 'production'){
    mongo_url = 'mongodb://nourhannaguib:123456@ds249299.mlab.com:49299/node-my-project'
}

mongoose.connect(mongo_url);