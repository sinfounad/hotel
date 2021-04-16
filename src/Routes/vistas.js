const express = require('express');
const app =express();
var multer = require('multer');
const mimeTypes = require('mime-types');
//const upload = multer({

//storage:store,
//})
var store = multer.diskStorage({
    destination:'uploads/',
    
    filename:function(req,file,cb){
        cb(null, Date.now()+'.'+file.originalname);
    }
});



var upload = multer({storage:store}).single('avatar');

app.post('/files', function(req, res,next){
    upload(req,res,function(err){
        console.log(req);
        if(err){
            return res.status(501).json({error:err});
        }

        console.log("enviado")
        //do all database record saving activity
        return res.json({originalname:req.file.originalname, uploadname:req.file.filename});
    });

});
////

app.get('/', ( req, res)=>{
    console.log(__dirname)
    res.sendFile(__dirname +"/index.html" );
});

/*
app.post("/files", upload.single('avatar'), (req, res)=>{

    res.send("enviado correctamente")
})*/

app.listen(3000, ()=>console.log("servidor Iniciado"));