var fs = require(`fs`)

fs.readFile("file.txt","utf8",function(err,data){
  
    if(err){
        throw err;
    }
    console.log(data.toString())
})  

fs.writeFile("file2.txt","enesJS", function(err){
    if (err) {
        throw err;
    }
    console.log("Writed");
});

fs.appendFile("file2.txt","enesNode", function(err){
    if (err) {
        throw err;
    }
    console.log("Appended");
});


fs.unLink("file2.txt", function(err){
    if (err) {
        throw err;
    }
    console.log("Deleted");
});
