const { mongoose } = require('mongoose');
const dotenv = require('dotenv').config({path: __dirname+'/../.env'});

const connectDB = async () => {
    const uri = `mongodb+srv://${process.env.USERNAME}:${process.env.PASSWORD}@cluster0.f4werh5.mongodb.net/Shopper?retryWrites=true&w=majority`;
    console.log(process.env.PASSWORD)
    try{
        await mongoose.connect(uri, {
            useUnifiedTopology: true,
            useNewUrlParser: true
        });
    } catch(err) {
        console.log(err);
    }
}

module.exports = connectDB;