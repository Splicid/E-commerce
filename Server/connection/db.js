const { mongoose } = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const connectDB = async () => {
    const uri = `mongodb+srv://${process.env.USERNAME}:${process.env.PASSWORD}@cluster0.f4werh5.mongodb.net/?retryWrites=true&w=majority`;
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