var express = require(`express`)
var app = express()
var bodyParser = require(`body-parser`)

var urlEncodedParser = bodyParser.urlencoded({extended:false})

app.get(`/`, function(request,response){
    response.send("Hello Express!")
})

app.get(`/admin`, function(request,response){
    response.send("Hello Admin!")
})

app.get(`/product`, function(request,response){
     
    console.log(`ID : ` + request.query.id)
    console.log(`Category ID : ` + request.query.categoryid)
    response.send("Hello Product!")
})

app.get(`/team`, function(request,response){
    response.send("Hello Team!")
})

app.post(`/product`,urlEncodedParser,function(request,response){
    
    console.log(request.body.isim)
    response.send("Post Request")
})

app.delete(`/product`, function(request,response){
    response.send("Delete Request")
})

app.get(`/customer*`, function(request,response){
    response.send(`customers listed`)
})

var server = app.listen(8081);
