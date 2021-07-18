const mongoose = require('mongoose');

const CONNECTION_URL = process.env.CONNECTION_URL;

const connect = async () => {
    try {
        mongoose.connect(CONNECTION_URL, {
            useCreateIndex: true,
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false
        })
        console.log('connect successfully');
    } catch(error) {
        console.log('connect failure');
        console.log(error.message);
    }
}

module.exports = connect