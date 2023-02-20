const multer = require('multer');
const {GridFsStorage} = require('multer-gridfs-storage');
const dotenv = require('dotenv').config({path: __dirname+'/../.env'});
console.log(dotenv)


const storage = new GridFsStorage({ uri })

