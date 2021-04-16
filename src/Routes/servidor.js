// server.js

const path = require('path');
const express = require('express');
const multer = require('multer');
const bodyParser = require('body-parser')
const app = express();

const DIR = './uploads';



var mime = require('mime'); 
app.get('/download', function(req, res){ var file = __dirname + DIR+'/Diapositiva1.jpg'; 
var filename = path.basename(file); var mimetype = mime.lookup(file);
res.setHeader('Content-disposition', 'attachment; filename=' + filename); 
res.setHeader('Content-type', mimetype); var filestream = fs.createReadStream(file); 
filestream.pipe(res); 
});


 
let storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, DIR);
    },
    filename: (req, file, cb) => {
      cb(null, file.originalname + '-' + Date.now() + '.' + path.extname(file.originalname));
    }
});
let upload = multer({storage: storage});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
 
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
  res.setHeader('Access-Control-Allow-Methods', 'POST');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

Router.post('/download', function(req,res,next){
  console.log(req.body.filename+ " Prueba");
  filepath = path.join(__dirname,'./uploads') +'/'+ req.body.filename;
  console.log(filepath);
  res.sendFile(filepath);
});
 
app.get('/api', function (req, res) {
  res.end('file upload');
});
 
app.post('/api/upload',upload.single('file'), function (req, res) {
    if (!req.file) {
        console.log("Your request doesn’t have any file");
        return res.send({
          success: false
        });
    
      } else {
        console.log('Your file has been received successfully');
        return res.send({
          success: true
        })
      }
});

var http = require('http'); var fs = require('fs'); 
var file = fs.createWriteStream("file.jpg"); 
var request = http.get("http://i3.ytimg.com/vi/J---aiyznGQ/mqdefault.jpg", function(response) { response.pipe(file); });




  
  





const PORT = process.env.PORT || 4000;
 
app.listen(PORT, function () {
  console.log('Node.js server is running on port ' + PORT);
});



