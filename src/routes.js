const apiRoutes = (app)=>{
    app.use('/api/ad', require ('./api/ad'));
}
const apiRoutes = (app)=>{
    app.use('/api/address', require ('./api/address'));
}
const apiRoutes = (app)=>{
    app.use('/api/admin', require ('./api/admin'));
}
const apiRoutes = (app)=>{
    app.use('/api/cart', require ('./api/cart'));
}
const apiRoutes = (app)=>{
    app.use('/api/category', require ('./api/category'));
}
const apiRoutes = (app)=>{
    app.use('/api/country', require ('./api/country'));
}
const apiRoutes = (app)=>{
    app.use('/api/order', require ('./api/order'));
}
const apiRoutes = (app)=>{
    app.use('/api/payment', require ('./api/payment'));
}
const apiRoutes = (app)=>{
    app.use('/api/plan', require ('./api/plan'));
}
const apiRoutes = (app)=>{
    app.use('/api/product', require ('./api/product'));
}
const apiRoutes = (app)=>{
    app.use('/api/review', require ('./api/review'));
}
const apiRoutes = (app)=>{
    app.use('/api/state', require ('./api/state'));
}
const apiRoutes = (app)=>{
    app.use('/api/subcategory', require ('./api/subcategory'));
}
const apiRoutes = (app)=>{
    app.use('/api/user', require ('./api/user'));
}
const apiRoutes = (app)=>{
    app.use('/api/vendor', require ('./api/vendor'));
}
const apiRoutes = (app)=>{
    app.use('/api/wishlist', require ('./api/wishlist'));
}

module.exports = {
    apiRoutes: apiRoutes
}
