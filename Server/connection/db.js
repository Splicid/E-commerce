const { mongoose } = require('mongoose');
const dotenv = require('dotenv').config({path: __dirname+'/../.env'});

const connectDB = async () => {
    const uri = `mongodb+srv://${process.env.USERNAMES}:${process.env.PASSWORD}@cluster0.f4werh5.mongodb.net/Shopper?retryWrites=true&w=majority`;
    const conn = mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true})
        .then((result ) => console.log('connected to db' + result))
        .catch((err) => console.log(err))
}

module.exports = connectDB;