var http = require(`http`)
var log = require(`./log`)
var sayHello = require(`./exportsDemo`)

http.createServer(function(request,response){
    console.log(request.url)
    if(request.url == "/admin"){
        response.writeHead(200,{`Content-Type`:`text/html`})
        response.write(`<html><body><bold>Admin Page</strong></body></html>`)
    }else if(request.url == "/") {
        response.writeHead(200,{`Content-Type`:`text/html`})
        response.write(`<html><body><strong>Home Page</strong></body></html>`)
    }else if (request.url == "/customer") {
           response.writeHead(200,{`Content-Type`:`application/json`})
           response.write(JSON.stringify({name:`Enes`,lastName:`Inan`})
    }

    response.end(`Helsdlo`)
}).listen(8081)

// log.information("it`s live ")
console.log(sayHello())


module.exports = log
