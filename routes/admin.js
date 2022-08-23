const { application } = require('express');
const express = require('express');
const path = require('path');
const rootDir = require('../util/path.js');
const router = express.Router();

router.get('/add-product',(req, res, next) => {
    // console.log('In middleware!');
    // res.send('<form action="/admin/product" method="POST"><input type="text" name="title"><input type="submit"></form>');
    res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
});

router.post('/product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
}); 


module.exports = router;