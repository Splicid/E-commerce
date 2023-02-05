const connectDB = require("./connection/db");
const expres = require('express');
const { default: mongoose } = require("mongoose");
const app = expres()
connectDB()
app.get('/', (req, res) => {
    res.json({user: 'geek'})
})

mongoose.connection.once('open', () => {
    console.log('Connected to MongoDB');
    app.listen(3000, async() => console.log(`Server running on port 3000`))
})