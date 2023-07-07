

const fs = require('fs');



const requestHandler = (req, res) => {

    const url = req.url;
    const method = req.method;

    if (url === '/') {
        res.setHeader("content-Type", 'text/html');
        res.write("<html>")
        res.write("head><title>my first express page </title>")
        res.write(`<body>
    <form action="/message" method="POST">
      <label for="inputText">Enter Text:</label>
      <input type="text" id="inputText" name="inputText" required>
      <br>
      <input type="submit" value="Submit">
    </form>`)
        res.write("</html>")
        return res.end()


    }
    if (url === '/message' && method === 'POST') {
        // this  is a blocking code execution 
        // write file sycnc will sto[p the executio of countill it is read and the server becomes un responsive 

        fs.writeFileSync('message.txt', "Dummy")
        res.statusCode = 302;
        res.setHeader('Location', '/')
        return res.end();




    }
    res.setHeader("content-Type", 'text/html');
    res.write("<html>")
    res.write("head><title>my first express page </title>")
    res.write("<body><h1>hello from my loalhost</body>")
    res.write("</html>")
    res.end()




}


module.exports = requestHandler;