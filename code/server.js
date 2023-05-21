const express=require('express');
const port=5500;
const app=express();
app.use(express.static('ScrollBot'));
app.get('/user.html',(req,res)=>{
    res.sendFile("/home/guhan/Cryosis/underground/ScrollBot/code/user.html");

});
app.post('/server',(req,res)=>{
    var datattaken=req.body;
    res.send("done");
});
app.listen(port,()=>{
    console.log("listening");
})
