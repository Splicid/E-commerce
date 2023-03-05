const connectDB = require("./connection/db");
const express = require('express');
const { default: mongoose } = require("mongoose");
const Shop = require("./schema/schema");
const bodyParser = require('body-parser');
const app = express();
const cors = require("cors");
const {upload} = require("./middleware/storage");
connectDB()

app.use(express.urlencoded({ extended: false }));
app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.json({user: 'geek'})
})

app.post('/poster', upload.array('selectedFile'), async (req, res) => {
    const data = req.body.selectedFile
    console.log(data)
    if (req.file){
        console.log("True")
    } else {
        console.log("False")
    }
    //const insert = await Shop.create({title: req.body.title, price: req.body.price, body: req.body.body })
})

const db_insert = async () => {
    //const ins = await Shop.save({title: "Shirt", price: 99.99, body: "Black sweater"})
    //console.log(ins)
    //const tes = await Shop.create({title: "Black Jeans", price: 100.00, body: "Nice black jeans for casual events" })
    const lookup = await Shop.find({})
    console.log(lookup)
}
db_insert()

mongoose.connection.once('open', () => {
    console.log('Connected to MongoDB')
    app.listen(3000, async() => console.log("Connected to port 3000"))
})