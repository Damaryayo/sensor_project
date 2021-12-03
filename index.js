const express= require("express");
const app =express();

app.get('distance1',function(req, res){
    res.send("24 meters"); //read page 60 of full stack book
})

app.get('distance 2', function(req, res){
    res.send(`${2*50}`);
})

app.listen(3000, function(){
    console.log('server is listening on port 3000')
    // listen method of app starts up the server and has it listen port 3000 of the Pi.
})