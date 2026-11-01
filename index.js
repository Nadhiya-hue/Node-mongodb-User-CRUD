const path = require('path');
const ejs = require('ejs');
const express = require('express');
const mongoose = require('mongoose');
const usermodel = require(`./models/user`)
const app = express();

app.use(express.json());
app.use(express.urlencoded({extented:true}));
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');

app.get('/', (req, res)=>{
    res.render('app');
})

app.post('/create', async (req, res)=>{
    let {name , imageurl , email} = req.body;
    let createduser = await usermodel.create({
        name,
        imageurl,
        email
    })
    res.redirect('/');
})

app.get('/read', async (req, res)=>{
    let allusers = await usermodel.find()
    res.render('read', {users: allusers});
})

app.get('/delete/:id', async (req,res)=>{
    let users = await usermodel.findOneAndDelete({_id: req.params.id});
    res.redirect('/read')
})

app.get('/edit/:userid', async (req,res)=>{
    let user = await usermodel.findOne({_id: req.params.userid});
    res.render('edit', {user})
})

app.post('/update/:userid', async (req, res)=>{
    let {name, imageurl, email} = req.body;
    let user = await usermodel.findOneAndUpdate({_id: req.params.userid}, {name, imageurl, email}, {new: true});
    res.redirect('/read')
})
app.listen(3000);