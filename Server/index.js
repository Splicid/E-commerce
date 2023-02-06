const connectDB = require("./connection/db");
const expres = require('express');
const { default: mongoose } = require("mongoose");
const Shop = require("./schema/schema");
const app = expres()
connectDB()
app.get('/', (req, res) => {
    res.json({user: 'geek'})
})


const db_insert = async () => {
    //const ins = await Shop.save({title: "Shirt", price: 99.99, body: "Black sweater"})
    //console.log(ins)
    const tes = await Shop.find({})
    //const collection = await Shop.createCollection()
    console.log(tes)
}
db_insert()

mongoose.connection.once('open', () => {
    console.log('Connected to MongoDB')
    app.listen(3000, async() => console.log("Connected to port 3000"))
})