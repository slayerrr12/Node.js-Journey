const express = require('express');
const path = require('path');

const router = express.Router();


router.get('/add-product', (req, res, next) => {
    res.sendFile(path.join(__dirname, "../", "Views", "add-product.html"))
})


router.post("/products", (req, res, next) => {

    console.log(req.body)
    res.send("<h1>hi</h1>")

})




module.exports = router;