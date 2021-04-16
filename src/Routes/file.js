var express = require ('express');
var router = express.Router()
const Router = require('express').Router();
var multer = require('multer');
///const path = require('path');
//const nodemailer = require('nodemailer');
var store = multer.diskStorage({
    destination:function(req,file,cb){
        cb(null, './uploads');
    },
    filename:function(req,file,cb){
        cb(null, Date.now()+'.'+file.originalname);
    }
});



var upload = multer({storage:store}).single('file');
router.post('./upload', function(req, res, next){

    upload(req, res, function(err){
     if(err){
         return res.status(501).json({error:err})
     }
     return res.json({originalname:req.file.originalname, upload})
    })
});
module.exports = router;


