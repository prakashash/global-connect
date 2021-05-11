require ('./db/mongoose');

const express = require ("express");
const path = require ("path");
const hbs = require ("hbs");
const app = express();

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

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }))
 
app.use(bodyParser.json())


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

app.post('/api/user',(req,res)=>{

    var user = new User(req.body);
    user.save().then((user)=>{
        res.status(201).send({
            user:user
        })
    }).catch((err)=>{
        res.status(500).send(err);
    })
})

app.post('/api/vendor',(req,res)=>{

    var vendor = new Vendor(req.body);
    vendor.save().then((vendor)=>{
        res.status(201).send({
            vendor:vendor
        })
    }).catch((err)=>{
        res.status(500).send(err);
    })
})

app.post('/api/admin',(req,res)=>{

    var admin = new Admin(req.body);
    admin.save().then((admin)=>{
        res.status(201).send({
            admin:admin
        })
    }).catch((err)=>{
        res.status(500).send(err);
    })
})

app.post('/api/product',(req,res)=>{

    var product = new Product(req.body);
    product.save().then((product)=>{
        res.status(201).send({
            product:product
        })
    }).catch((err)=>{
        res.status(500).send(err);
    })
})

app.post('/api/ad',(req,res)=>{

    var ad = new Ad(req.body);
    ad.save().then((ad)=>{
        res.status(201).send({
            ad:ad
        })
    }).catch((err)=>{
        res.status(500).send(err);
    })
})

app.post('/api/address',(req,res)=>{

    var address = new Address(req.body);
    address.save().then((address)=>{
        res.status(201).send({
            address:address
        })
    }).catch((err)=>{
        res.status(500).send(err);
    })
})

app.post('/api/review',(req,res)=>{

    var review = new Review(req.body);
    review.save().then((review)=>{
        res.status(201).send({
            review:review
        })
    }).catch((err)=>{
        res.status(500).send(err);
    })
})

app.post('/api/country',(req,res)=>{

    var country = new Country(req.body);
    country.save().then((country)=>{
        res.status(201).send({
            country:country
        })
    }).catch((err)=>{
        res.status(500).send(err);
    })
})

app.post('/api/state',(req,res)=>{

    var state = new State(req.body);
    state.save().then((state)=>{
        res.status(201).send({
            state:state
        })
    }).catch((err)=>{
        res.status(500).send(err);
    })
})

app.post('/api/category',(req,res)=>{

    var category = new Category(req.body);
    category.save().then((category)=>{
        res.status(201).send({
            category:category
        })
    }).catch((err)=>{
        res.status(500).send(err);
    })
})

app.post('/api/subcategory',(req,res)=>{

    var subcategory = new Subcategory(req.body);
    subcategory.save().then((subcategory)=>{
        res.status(201).send({
            subcategory:subcategory
        })
    }).catch((err)=>{
        res.status(500).send(err);
    })
})

app.post('/api/plan',(req,res)=>{

    var plan = new Plan(req.body);
    plan.save().then((plan)=>{
        res.status(201).send({
            plan:plan
        })
    }).catch((err)=>{
        res.status(500).send(err);
    })
})

app.post('/api/order',(req,res)=>{

    var order = new Order(req.body);
    order.save().then((order)=>{
        res.status(201).send({
            order:order
        })
    }).catch((err)=>{
        res.status(500).send(err);
    })
})

app.post('/api/cart',(req,res)=>{

    var cart = new Cart(req.body);
    cart.save().then((cart)=>{
        res.status(201).send({
            cart:cart
        })
    }).catch((err)=>{
        res.status(500).send(err);
    })
})

app.post('/api/wishlist',(req,res)=>{

    var wishlist = new Wishlist(req.body);
    wishlist.save().then((wishlist)=>{
        res.status(201).send({
            wishlist:wishlist
        })
    }).catch((err)=>{
        res.status(500).send(err);
    })
})
app.post('/api/payment',(req,res)=>{

    var payment = new Payment(req.body);
    payment.save().then((payment)=>{
        res.status(201).send({
            payment:payment
        })
    }).catch((err)=>{
        res.status(500).send(err);
    })
})

app.get('*', (req, res) => {
    res.render("404")
})

app.listen('2000', ()=>{
    console.log("connected")
})