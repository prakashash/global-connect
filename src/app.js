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

// const routes = require ('./routes')

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }))
 
app.use(bodyParser.json())

// routes.apiRoutes(app);


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

// app.post('/api/user',(req,res)=>{

//     var user = new User(req.body);
//     user.save().then((user)=>{
//         res.status(201).send({
//             user:user
//         })
//     }).catch((err)=>{
//         res.status(500).send(err);
//     })
// })

// app.get('/api/user',(req,res)=>{

//     User.find().then((user)=>{
//         res.status(201).send({
//             user:user
//         })
//     }).catch((err)=>{
//         res.status(500).send(err);
//     })
// })

// app.get('/api/user/:id',(req,res)=>{

//     User.findById(req.params.id).then((user)=>{
//         res.status(201).send({
//             user:user
//         })
//     }).catch((err)=>{
//         res.status(500).send(err);
//     })
// })

// app.put('/api/user/:id',(req,res)=>{

//     User.findByIdAndUpdate(req.params.id, req.body).then((updateduser)=>{
//         res.status(201).send("updated sucessfully")
//     }).catch((err)=>{
//         res.status(500).send(err);
//     })
// })

// app.delete('/api/user/:id',(req,res)=>{

//     User.findByIdAndDelete(req.params.id).then((user)=>{
//         res.status(200).send("Deleted sucessfully")
//     }).catch((err)=>{
//         res.status(500).send(err);
//     })
// })

// app.post('/api/vendor',(req,res)=>{

//     var vendor = new Vendor(req.body);
//     vendor.save().then((vendor)=>{
//         res.status(201).send({
//             vendor:vendor
//         })
//     }).catch((err)=>{
//         res.status(500).send(err);
//     })
// })

// app.get('/api/vendor',(req,res)=>{

//     Vendor.find().then((vendor)=>{
//         res.status(201).send({
//             vendor:vendor
//         })
//     }).catch((err)=>{
//         res.status(500).send(err);
//     })
// })

// app.get('/api/vendor/:id',(req,res)=>{

//     Vendor.findById(req.params.id).then((vendor)=>{
//         res.status(201).send({
//             vendor:vendor
//         })
//     }).catch((err)=>{
//         res.status(500).send(err);
//     })
// })

// app.put('/api/vendor/:id',(req,res)=>{

//     Vendor.findByIdAndUpdate(req.params.id, req.body).then((updatedvendor)=>{
//         res.status(201).send("updated sucessfully")
//     }).catch((err)=>{
//         res.status(500).send(err);
//     })
// })

// app.delete('/api/vendor/:id',(req,res)=>{

//     Vendor.findByIdAndDelete(req.params.id).then((vendor)=>{
//         res.status(200).send("Deleted sucessfully")
//     }).catch((err)=>{
//         res.status(500).send(err);
//     })
// })

// app.post('/api/admin',(req,res)=>{

//     var admin = new Admin(req.body);
//     admin.save().then((admin)=>{
//         res.status(201).send({
//             admin:admin
//         })
//     }).catch((err)=>{
//         res.status(500).send(err);
//     })
// })

// app.get('/api/admin',(req,res)=>{

//     Admin.find().then((admin)=>{
//         res.status(201).send({
//             admin:admin
//         })
//     }).catch((err)=>{
//         res.status(500).send(err);
//     })
// })

// app.get('/api/admin/:id',(req,res)=>{

//     Admin.findById(req.params.id).then((admin)=>{
//         res.status(201).send({
//             admin:admin
//         })
//     }).catch((err)=>{
//         res.status(500).send(err);
//     })
// })

// app.put('/api/admin/:id',(req,res)=>{

//     Admin.findByIdAndUpdate(req.params.id, req.body).then((updatedadmin)=>{
//         res.status(201).send("updated sucessfully")
//     }).catch((err)=>{
//         res.status(500).send(err);
//     })
// })

// app.delete('/api/admin/:id',(req,res)=>{

//     Admin.findByIdAndDelete(req.params.id).then((admin)=>{
//         res.status(200).send("Deleted sucessfully")
//     }).catch((err)=>{
//         res.status(500).send(err);
//     })
// })

// app.post('/api/product',(req,res)=>{

//     var product = new Product(req.body);
//     product.save().then((product)=>{
//         res.status(201).send({
//             product:product
//         })
//     }).catch((err)=>{
//         res.status(500).send(err);
//     })
// })

// app.get('/api/product',(req,res)=>{

//     Product.find().then((product)=>{
//         res.status(201).send({
//             product:product
//         })
//     }).catch((err)=>{
//         res.status(500).send(err);
//     })
// })

// app.get('/api/product/:id',(req,res)=>{

//     Product.findById(req.params.id).then((product)=>{
//         res.status(201).send({
//             product:product
//         })
//     }).catch((err)=>{
//         res.status(500).send(err);
//     })
// })

// app.put('/api/product/:id',(req,res)=>{

//     Product.findByIdAndUpdate(req.params.id, req.body).then((updatedproduct)=>{
//         res.status(201).send("updated sucessfully")
//     }).catch((err)=>{
//         res.status(500).send(err);
//     })
// })

// app.delete('/api/product/:id',(req,res)=>{

//     Product.findByIdAndDelete(req.params.id).then((product)=>{
//         res.status(200).send("Deleted sucessfully")
//     }).catch((err)=>{
//         res.status(500).send(err);
//     })
// })

// app.post('/api/ad',(req,res)=>{

//     var ad = new Ad(req.body);
//     ad.save().then((ad)=>{
//         res.status(201).send({
//             ad:ad
//         })
//     }).catch((err)=>{
//         res.status(500).send(err);
//     })
// })

// app.get('/api/ad',(req,res)=>{

//     Ad.find().then((ad)=>{
//         res.status(201).send({
//             ad:ad
//         })
//     }).catch((err)=>{
//         res.status(500).send(err);
//     })
// })

// app.get('/api/ad/:id',(req,res)=>{

//     Ad.findById(req.params.id).then((ad)=>{
//         res.status(201).send({
//             ad:ad
//         })
//     }).catch((err)=>{
//         res.status(500).send(err);
//     })
// })

// app.put('/api/ad/:id',(req,res)=>{

//     Ad.findByIdAndUpdate(req.params.id, req.body).then((updatedad)=>{
//         res.status(201).send("updated sucessfully")
//     }).catch((err)=>{
//         res.status(500).send(err);
//     })
// })
// app.delete('/api/ad/:id',(req,res)=>{

//     Ad.findByIdAndDelete(req.params.id).then((ad)=>{
//         res.status(200).send("Deleted sucessfully")
//     }).catch((err)=>{
//         res.status(500).send(err);
//     })
// })

// app.post('/api/address',(req,res)=>{

//     var address = new Address(req.body);
//     address.save().then((address)=>{
//         res.status(201).send({
//             address:address
//         })
//     }).catch((err)=>{
//         res.status(500).send(err);
//     })
// })

// app.get('/api/address',(req,res)=>{

//     Address.find().then((address)=>{
//         res.status(201).send({
//             address:address
//         })
//     }).catch((err)=>{
//         res.status(500).send(err);
//     })
// })

// app.get('/api/address/:id',(req,res)=>{

//     Address.findById(req.params.id).then((address)=>{
//         res.status(201).send({
//             address:address
//         })
//     }).catch((err)=>{
//         res.status(500).send(err);
//     })
// })

// app.put('/api/address/:id',(req,res)=>{

//     Address.findByIdAndUpdate(req.params.id, req.body).then((updatedaddress)=>{
//         res.status(201).send("updated sucessfully")
//     }).catch((err)=>{
//         res.status(500).send(err);
//     })
// })

// app.delete('/api/address/:id',(req,res)=>{

//     Address.findByIdAndDelete(req.params.id).then((address)=>{
//         res.status(200).send("Deleted sucessfully")
//     }).catch((err)=>{
//         res.status(500).send(err);
//     })
// })

// app.post('/api/review',(req,res)=>{

//     var review = new Review(req.body);
//     review.save().then((review)=>{
//         res.status(201).send({
//             review:review
//         })
//     }).catch((err)=>{
//         res.status(500).send(err);
//     })
// })

// app.get('/api/review',(req,res)=>{

//     Review.find().then((review)=>{
//         res.status(201).send({
//             review:review
//         })
//     }).catch((err)=>{
//         res.status(500).send(err);
//     })
// })

// app.get('/api/review/:id',(req,res)=>{

//     Review.findById(req.params.id).then((review)=>{
//         res.status(201).send({
//             review:review
//         })
//     }).catch((err)=>{
//         res.status(500).send(err);
//     })
// })

// app.put('/api/review/:id',(req,res)=>{

//     Review.findByIdAndUpdate(req.params.id, req.body).then((updatedreview)=>{
//         res.status(201).send("updated sucessfully")
//     }).catch((err)=>{
//         res.status(500).send(err);
//     })
// })

// app.delete('/api/review/:id',(req,res)=>{

//     Review.findByIdAndDelete(req.params.id).then((review)=>{
//         res.status(200).send("Deleted sucessfully")
//     }).catch((err)=>{
//         res.status(500).send(err);
//     })
// })

// app.post('/api/country',(req,res)=>{

//     var country = new Country(req.body);
//     country.save().then((country)=>{
//         res.status(201).send({
//             country:country
//         })
//     }).catch((err)=>{
//         res.status(500).send(err);
//     })
// })

// app.get('/api/country',(req,res)=>{

//     Country.find().then((country)=>{
//         res.status(201).send({
//             country:country
//         })
//     }).catch((err)=>{
//         res.status(500).send(err);
//     })
// })

// app.get('/api/country/:id',(req,res)=>{

//     Country.findById(req.params.id).then((country)=>{
//         res.status(201).send({
//             country:country
//         })
//     }).catch((err)=>{
//         res.status(500).send(err);
//     })
// })

// app.put('/api/country/:id',(req,res)=>{

//     Country.findByIdAndUpdate(req.params.id, req.body).then((updatedcountry)=>{
//         res.status(201).send("updated sucessfully")
//     }).catch((err)=>{
//         res.status(500).send(err);
//     })
// })

// app.delete('/api/country/:id',(req,res)=>{

//     Country.findByIdAndDelete(req.params.id).then((country)=>{
//         res.status(200).send("Deleted sucessfully")
//     }).catch((err)=>{
//         res.status(500).send(err);
//     })
// })

// app.post('/api/state',(req,res)=>{

//     var state = new State(req.body);
//     state.save().then((state)=>{
//         res.status(201).send({
//             state:state
//         })
//     }).catch((err)=>{
//         res.status(500).send(err);
//     })
// })

// app.get('/api/state',(req,res)=>{

//     State.find().then((state)=>{
//         res.status(201).send({
//             state:state
//         })
//     }).catch((err)=>{
//         res.status(500).send(err);
//     })
// })

// app.get('/api/state/:id',(req,res)=>{

//     State.findById(req.params.id).then((state)=>{
//         res.status(201).send({
//             state:state
//         })
//     }).catch((err)=>{
//         res.status(500).send(err);
//     })
// })

// app.put('/api/state/:id',(req,res)=>{

//     State.findByIdAndUpdate(req.params.id, req.body).then((updatedstate)=>{
//         res.status(201).send("updated sucessfully")
//     }).catch((err)=>{
//         res.status(500).send(err);
//     })
// })

// app.delete('/api/state/:id',(req,res)=>{

//     State.findByIdAndDelete(req.params.id).then((state)=>{
//         res.status(200).send("Deleted sucessfully")
//     }).catch((err)=>{
//         res.status(500).send(err);
//     })
// })

// app.post('/api/category',(req,res)=>{

//     var category = new Category(req.body);
//     category.save().then((category)=>{
//         res.status(201).send({
//             category:category
//         })
//     }).catch((err)=>{
//         res.status(500).send(err);
//     })
// })

// app.get('/api/category',(req,res)=>{

//     Category.find().then((category)=>{
//         res.status(201).send({
//             category:category
//         })
//     }).catch((err)=>{
//         res.status(500).send(err);
//     })
// })

// app.get('/api/category/:id',(req,res)=>{

//     Category.findById(req.params.id).then((category)=>{
//         res.status(201).send({
//             category:category
//         })
//     }).catch((err)=>{
//         res.status(500).send(err);
//     })
// })

// app.put('/api/category/:id',(req,res)=>{

//     Category.findByIdAndUpdate(req.params.id, req.body).then((updatedcategory)=>{
//         res.status(201).send("updated sucessfully")
//     }).catch((err)=>{
//         res.status(500).send(err);
//     })
// })

// app.delete('/api/category/:id',(req,res)=>{

//     Category.findByIdAndDelete(req.params.id).then((category)=>{
//         res.status(200).send("Deleted sucessfully")
//     }).catch((err)=>{
//         res.status(500).send(err);
//     })
// })

// app.post('/api/subcategory',(req,res)=>{

//     var subcategory = new Subcategory(req.body);
//     subcategory.save().then((subcategory)=>{
//         res.status(201).send({
//             subcategory:subcategory
//         })
//     }).catch((err)=>{
//         res.status(500).send(err);
//     })
// })

// app.get('/api/subcategory',(req,res)=>{

//     Subcategory.find().then((subcategory)=>{
//         res.status(201).send({
//             subcategory:subcategory
//         })
//     }).catch((err)=>{
//         res.status(500).send(err);
//     })
// })

// app.get('/api/subcategory/:id',(req,res)=>{

//     Subcategory.findById(req.params.id).then((subcategory)=>{
//         res.status(201).send({
//             subcategory:subcategory
//         })
//     }).catch((err)=>{
//         res.status(500).send(err);
//     })
// })

// app.put('/api/subcategory/:id',(req,res)=>{

//     Subcategory.findByIdAndUpdate(req.params.id, req.body).then((updatedsubcategory)=>{
//         res.status(201).send("updated sucessfully")
//     }).catch((err)=>{
//         res.status(500).send(err);
//     })
// })

// app.delete('/api/subcategory/:id',(req,res)=>{

//     Subcategory.findByIdAndDelete(req.params.id).then((subcategory)=>{
//         res.status(200).send("Deleted sucessfully")
//     }).catch((err)=>{
//         res.status(500).send(err);
//     })
// })

// app.post('/api/plan',(req,res)=>{

//     var plan = new Plan(req.body);
//     plan.save().then((plan)=>{
//         res.status(201).send({
//             plan:plan
//         })
//     }).catch((err)=>{
//         res.status(500).send(err);
//     })
// })

// app.get('/api/plan',(req,res)=>{

//     Plan.find().then((plan)=>{
//         res.status(201).send({
//             plan:plan
//         })
//     }).catch((err)=>{
//         res.status(500).send(err);
//     })
// })

// app.get('/api/plan/:id',(req,res)=>{

//     Plan.findById(req.params.id).then((plan)=>{
//         res.status(201).send({
//             plan:plan
//         })
//     }).catch((err)=>{
//         res.status(500).send(err);
//     })
// })

// app.put('/api/plan/:id',(req,res)=>{

//     Plan.findByIdAndUpdate(req.params.id, req.body).then((updatedplan)=>{
//         res.status(201).send("updated sucessfully")
//     }).catch((err)=>{
//         res.status(500).send(err);
//     })
// })

// app.delete('/api/plan/:id',(req,res)=>{

//     Plan.findByIdAndDelete(req.params.id).then((plan)=>{
//         res.status(200).send("Deleted sucessfully")
//     }).catch((err)=>{
//         res.status(500).send(err);
//     })
// })

// app.post('/api/order',(req,res)=>{

//     var order = new Order(req.body);
//     order.save().then((order)=>{
//         res.status(201).send({
//             order:order
//         })
//     }).catch((err)=>{
//         res.status(500).send(err);
//     })
// })

// app.get('/api/order',(req,res)=>{

//     Order.find().then((order)=>{
//         res.status(201).send({
//             order:order
//         })
//     }).catch((err)=>{
//         res.status(500).send(err);
//     })
// })

// app.get('/api/order/:id',(req,res)=>{

//     Order.findById(req.params.id).then((order)=>{
//         res.status(201).send({
//             order:order
//         })
//     }).catch((err)=>{
//         res.status(500).send(err);
//     })
// })

// app.put('/api/order/:id',(req,res)=>{

//     Order.findByIdAndUpdate(req.params.id, req.body).then((updatedorder)=>{
//         res.status(201).send("updated sucessfully")
//     }).catch((err)=>{
//         res.status(500).send(err);
//     })
// })

// app.delete('/api/order/:id',(req,res)=>{

//     Order.findByIdAndDelete(req.params.id).then((order)=>{
//         res.status(200).send("Deleted sucessfully")
//     }).catch((err)=>{
//         res.status(500).send(err);
//     })
// })

// app.post('/api/cart',(req,res)=>{

//     var cart = new Cart(req.body);
//     cart.save().then((cart)=>{
//         res.status(201).send({
//             cart:cart
//         })
//     }).catch((err)=>{
//         res.status(500).send(err);
//     })
// })

// app.get('/api/cart',(req,res)=>{

//     Cart.find().then((cart)=>{
//         res.status(201).send({
//             cart:cart
//         })
//     }).catch((err)=>{
//         res.status(500).send(err);
//     })
// })

// app.get('/api/cart/:id',(req,res)=>{

//     Cart.findById(req.params.id).then((cart)=>{
//         res.status(201).send({
//             cart:cart
//         })
//     }).catch((err)=>{
//         res.status(500).send(err);
//     })
// })

// app.put('/api/cart/:id',(req,res)=>{

//     Cart.findByIdAndUpdate(req.params.id, req.body).then((updatedcart)=>{
//         res.status(201).send("updated sucessfully")
//     }).catch((err)=>{
//         res.status(500).send(err);
//     })
// })

// app.delete('/api/cart/:id',(req,res)=>{

//     Cart.findByIdAndDelete(req.params.id).then((cart)=>{
//         res.status(200).send("Deleted sucessfully")
//     }).catch((err)=>{
//         res.status(500).send(err);
//     })
// })

// app.post('/api/wishlist',(req,res)=>{

//     var wishlist = new Wishlist(req.body);
//     wishlist.save().then((wishlist)=>{
//         res.status(201).send({
//             wishlist:wishlist
//         })
//     }).catch((err)=>{
//         res.status(500).send(err);
//     })
// })

// app.get('/api/wishlist',(req,res)=>{

//     Wishlist.find().then((wishlist)=>{
//         res.status(201).send({
//             wishlist:wishlist
//         })
//     }).catch((err)=>{
//         res.status(500).send(err);
//     })
// })

// app.get('/api/wishlist/:id',(req,res)=>{

//     Wishlist.findById(req.params.id).then((wishlist)=>{
//         res.status(201).send({
//             wishlist:wishlist
//         })
//     }).catch((err)=>{
//         res.status(500).send(err);
//     })
// })

// app.put('/api/wishlist/:id',(req,res)=>{

//     Wishlist.findByIdAndUpdate(req.params.id, req.body).then((updatedwishlist)=>{
//         res.status(201).send("updated sucessfully")
//     }).catch((err)=>{
//         res.status(500).send(err);
//     })
// })

// app.delete('/api/wishlist/:id',(req,res)=>{

//     Wishlist.findByIdAndDelete(req.params.id).then((wishlist)=>{
//         res.status(200).send("Deleted sucessfully")
//     }).catch((err)=>{
//         res.status(500).send(err);
//     })
// })

// app.post('/api/payment',(req,res)=>{

//     var payment = new Payment(req.body);
//     payment.save().then((payment)=>{
//         res.status(201).send({
//             payment:payment
//         })
//     }).catch((err)=>{
//         res.status(500).send(err);
//     })
// })

// app.get('/api/payment',(req,res)=>{

//     Payment.find().then((payment)=>{
//         res.status(201).send({
//             payment:payment
//         })
//     }).catch((err)=>{
//         res.status(500).send(err);
//     })
// })

// app.get('/api/payment/:id',(req,res)=>{

//     Payment.findById(req.params.id).then((payment)=>{
//         res.status(201).send({
//             payment:payment
//         })
//     }).catch((err)=>{
//         res.status(500).send(err);
//     })
// })

// app.put('/api/payment/:id',(req,res)=>{

//     Payment.findByIdAndUpdate(req.params.id, req.body).then((updatedpayment)=>{
//         res.status(201).send("updated sucessfully")
//     }).catch((err)=>{
//         res.status(500).send(err);
//     })
// })

// app.delete('/api/payment/:id',(req,res)=>{

//     Payment.findByIdAndDelete(req.params.id).then((payment)=>{
//         res.status(200).send("Deleted sucessfully")
//     }).catch((err)=>{
//         res.status(500).send(err);
//     })
// })

app.get('*', (req, res) => {
    res.render("404")
})

app.listen('2000', ()=>{
    console.log("connected")
})