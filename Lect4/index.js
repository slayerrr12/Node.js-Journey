//parsing the requestconst http = require("http")
const http = require("http")

//custom module exports
const routes = require('./routes')

const server = http.createServer(routes)



server.listen(3000)