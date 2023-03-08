const crypto = require('crypto');
const multer  = require('multer');
const {GridFsStorage} = require('multer-gridfs-storage');
const { default: mongoose } = require("mongoose");
const dotenv = require('dotenv');
const { Schema } = require('mongoose');
dotenv.config({path: __dirname+'/../.env'});

const storage = new GridFsStorage({
    url: process.env.URI,
    options: {
      useNewUrlParser: true
    },
    file: (req, file) => {
      return new Promise((resolve, reject) => {
        crypto.randomBytes(16, (err, buf) => {
          if (err) {
            return reject(err)
          }
          const filename = file.originalname
          const fileInfo = {
            filename: filename,
            bucketName: 'uploads'
          }
          resolve(fileInfo)
        })
      })
    }
  })

const upload = multer({ storage });
const metadata = mongoose.model("GFS", new Schema({}, {strict: false}), "uploads.files") 
module.exports = {upload, metadata}