const connectDB = require("./connection/db");
const expres = require('express');
const { default: mongoose } = require("mongoose");
const Shop = require("./schema/schema");
const bodyParser = require('body-parser');
const app = expres()
connectDB()


app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.json({user: 'geek'})
})

app.get('/insert', async (req, res) => {
    console.log(req.body.title)
    //const insert = await Shop.create({title: "Black Jeans", price: 100.00, body: "Nice black jeans for casual events" })
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