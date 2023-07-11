const express = require('express');
const bodyParser = require('body-parser')


const app = express();

// Middleware for parsing JSON bodies
app.use(express.json());

// Middleware for parsing URL-encoded bodies
app.use(express.urlencoded({ extended: true }));




app.use('/add-product', (req, res, next) => {
    res.send(` <form action="/products" method="POST">
   <label for="product">Product:</label>
   <input type="text" id="product" name="product" required>
   <br>
   <input type="submit" value="Submit">
 </form>`)
})


app.get("/products", (req, res, next) => {
     
    console.log(req.body)
    res.send("hi")

})


app.use('/', (req, res, next) => {
    res.send("<h1>hello from localhost</h1>")

})

app.listen(3000)