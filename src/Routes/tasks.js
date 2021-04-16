const Router = require('express').Router();
const mongojs = require ('mongojs');
const db = mongojs('bdBA', ['tasks']);
const dbm = mongojs('bdBA', ['mails']);
const bodyparser=require('body-parser');
const express = require('express');
const fs= require('fs');
//const exphbs = require('express-handlebars');
const path = require('path');
const nodemailer = require('nodemailer');
const multipart = require('connect-multiparty');
const app = express();
const multer =require('multer');
//app.engine('.html', cons.jade);
app.set('view engine', 'html');

var store = multer.diskStorage({
    destination:function(req,file,cb){
        cb(null, '/uploads');
    },
    filename:function(req,file,cb){
        cb(null, Date.now()+'.'+file.originalname);
    }
});


var upload = multer({storage:store}).single('file');

Router.post('/subir', function(req,res, formData, next){
    
    upload(req,res,function(err){
        if(err){
            return res.status(501).json({error:err});
        }
        //do all database record saving activity
        return res.json({originalname:req.file.originalname, uploadname:req.file.filename});
    });
});

app.use(bodyparser.urlencoded({extended :true}))
app.use(bodyparser.json())
app.use('/public', express.static(path.join(__dirname, 'public')));

const  multiPartMiddleware = multipart({
  uploadDir: './subudas'


});










Router.get('/getFiles', (req, res, next )=>{
  fs.readdir(__dirname+"/uploads", 'utf8', (error, files)=>{
    if (error){
  
      throw error
    }
    console.log("Finalizando lectura");
    res.json(files);
    console.log(files)
  });
  
});

var files= fs.readdirSync("./subudas")
console.log('Iniciando lectura');
console.log(files);




Router.get('/', ( req, res)=>{

  res.sendFile(__dirname +"index.html" );
});

/*
res.json({
  'message': 'File uploaded succesfully.'
});
console.log(req)*/

Router.post('/download', function(req,res,next){
  console.log(req.body.filename+ " Prueba");
  filepath = path.join(__dirname,'./uploads') +'/'+ req.body.filename;
  console.log(filepath+3);
  res.sendFile(filepath);
});

app.get('/descargar', function(req, res){

  console.log(req.body.filename+ "Prueba");
  console.log(req.params.id+ " Prueba");
  
  res.download(__dirname+'/uploads/'+req.params.id,
  req.params.id, function(err){

    if(err){
      console.log("Este es el error: "+err);
    }else{
       console.log("Hecho !!!!");
    }
   
  });

  
});

app.post('/api/upload', multiPartMiddleware, (req, res, next) => {  
  res.json({
      'message': 'File uploaded succesfully.'
  });
  
});

Router.get('/task', (req, res, next )=>{
    db.tasks.find((err, tasks)=>{
    if (err) return next(err);
    console.log("hola pues papa");
    res.json(tasks);
    console.log(tasks);
    });
    
});

Router.get('/fact', (req, res, next )=>{
    db.tasks.find((err, tasks)=>{
    if (err) return next(err);
    console.log("hola pues papa");
    res.json(tasks);
    console.log(tasks);
    });
    
});

Router.get('/task/:id', (req, res, next )=>{
    db.tasks.findOne({_id: mongojs.ObjectId(req.params.id)}, (err, task)=>{
    if (err) return next(err);
    res.json(task);
    });
    
});

Router.post('/task', (req, res, next)=>{

    const task =req.body;
    if(!task.title || !(task.isDone + '')){
        res.status(400).json({
          error: 'Bad data'
        });
    }else{

        db.tasks.save(task, (err, task) => {
            
            if (err) return next(err);
            res.json(task);
            console.log("post");

        });
    }
    
});

Router.post('/fact', (req, res, next)=>{

    const fact =req.body;
    if(!fact.nombre || !(fact.documento + '')){
        res.status(400).json({
          error: 'Bad data'
        });
    }else{

        dbm.tasks.save(fact, (err, task) => {
            
            if (err) return next(err);
            res.json(task);
            console.log("postw");

        });
    }
    
});


Router.post('/msg', (req, res, next)=>{
     console.log("e");
   const fact =req.body;
    if(!fact.Nombre || !(fact.Email + '')){
        res.status(400).json({
          error: 'Bad data'
        });
    }else{

        dbm.mails.save(fact, (err, mails) => {
            
            if (err) return next(err);
            res.json(mails);
            console.log("postw");



        });
    }


    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'devcofst@gmail.com',
          pass: 'cygakieqmtmiwgaf',
          clientID:'320026281799-amc2ekue5p5r78in9a7nahpt2avd79op.apps.googleusercontent.com',
          clientSecret:'fHWlX6LLbejRnQ7YItoCWAzJ',
          refresToquen:'1/rFPpJovj6zjKjkk8hTwPHEQOljD2Cs7hfTG3Zqesw5wqbFH0gXvXMjiSrsTzCMmL'
      
        },
      
        tls:{rectUnauthorized:false
        
        }
      
        
      });
      
      
      var mailOptions = {
        from: '"Cliente Hotel" ivanpinedita@gmail.com',
        to: 'ivanpin971@hotmail.com',
        subject: `Comunicacion de ${fact.Nombre}`,
       
        text: `${fact.Mensaje}`,
        html: `<h1>Remite</h1><br>
        <p>${fact.Email}, <br> ${fact.Mensaje}</p>  `,
      
      };
      
      
        transporter.sendMail(mailOptions, function(error, info){
          if (error) {
            console.log(error);
          } else {
            console.log('Email sent: ' + info.response);
            express.render('contact', {msg:'Email has been sent'});
          }
        }); 
      
});

/*
Router.delete('/task/:_id', (req, res, next)=>{

   db.tasks.remove({_id: mongojs.ObjectID(req.params.id)}, (err, result)=>{
    if (err) return next(err);
    res.json(result);
    consolole.log("2443dda")

   });
   
});*/

Router.post('/Delete', function (req,  res) {
    console.log("entra2");
  var id = req.body._id;

    //var id = req.params;
    //console.log(id.title);
    var id2="5e800862a184533dfcfe0a1e";
   console.log(id);
   db.tasks.remove({ _id: db.ObjectId(id) }, function(e, results){console.log(results);
  
});

  });



Router.put('/update',(req, res, next)=>{
    const task = req.body;
   
    console.log(task+"5555")
    console.log(task._id+"999")
    console.log(task.nombre);
    db.tasks.update( { _id: db.ObjectId(task._id) }, {$set: { "nombre" : task.nombre, "documento": task.documento, "direccion": task.direccion, "correo": task.correo, "telefono":task.telefono, "habitacion":task.habitacion,"entrada":task.entrada, "salida":task.salida }});
    
    //  nombre: string;
    
    
    /*
    const task = req.body;
    const updateTask = {}; 
    if(task.isDone){

        updateTask.isDone=task.isDone;
    }

    if(task.title){
        update.title = task.title;
    }

    if(!updateTask){
        res.status(400).json({
         error: 'Bad request'
        });
    } else{
        db.task.update({_id: mongojs.ObjectID(req.params.id)}, (err, task)=>{

            if (err) return next(err);
            res.json(task);

        });

    }
  */ 
});

module.exports = Router;