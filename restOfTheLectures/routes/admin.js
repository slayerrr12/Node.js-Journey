const express = require('express');



const router = express.Router();


router.get('/add-product', (req, res, next) => {
    res.send(` <form action="/admin/products" method="POST">
   <label for="product">Product:</label>
   <input type="text" id="product" name="product" required>
   <br>
   <input type="submit" value="Submit">
 </form>`)
})


router.post("/products", (req, res, next) => {
     
    console.log(req.body)
    res.send("<h1>hello bhau</h1>")

})




module.exports = router;