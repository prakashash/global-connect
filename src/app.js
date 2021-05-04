const express = require ("express");
const path = require ("path");
const hbs = require ("hbs");
const app = express();

const publicDirPath = path.join(__dirname,'../public');
const viewPath = path.join(__dirname,'../template/views');
const partialPath = path.join(__dirname,'../template/partials');

app.use(express.static(publicDirPath));
app.set('view engine', 'hbs');
app.set('views', viewPath);

hbs.registerPartials(partialPath);

app.get('',(req,res)=>{
    res.render("login")
})

app.get('/home',(req,res)=>{
    res.render("home")
})

app.get('/forget',(req,res)=>{
    res.render("forget")
})

app.get('/register',(req,res)=>{
    res.render("register")
})

app.get('/admin',(req,res)=>{
    res.render("admin")
})

app.get('/admin/add',(req,res)=>{
    res.render("admin/add")
})

app.listen('2000', ()=>{
    console.log("connected")
})