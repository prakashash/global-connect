require ('./db/mongoose');

const express = require ("express");
const path = require ("path");
const hbs = require ("hbs");
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
const routes = require ('./routes')


const User = require ('./models/user');
const Vendor = require ('./models/vendor');
const Admin = require ('./models/admin');
const Product = require ('./models/product');
const Ad = require ('./models/ad');
const Address = require ('./models/address');
const Review = require ('./models/review');
const Country = require ('./models/country');
const State = require ('./models/state');
const Category = require ('./models/category');
const Subcategory = require ('./models/subcategory');
const Plan = require ('./models/plan');
const Order = require ('./models/order');
const Cart = require ('./models/cart');
const Wishlist = require ('./models/wishlist');
const Payment = require ('./models/payment');

routes.apiRoutes(app);


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

app.get('/test',(req,res)=>{
    res.render("test")
})

app.get('/admin/add',(req,res)=>{
    res.render("add")
})

// app.get('*', (req, res) => {
//     res.render("404")
// })

app.listen('2000', ()=>{
    console.log("connected")
})