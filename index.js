

//work activity corrected by ally rukundo
//Q1create node js and express project named server_side
//and create atleast five static  endpoint by using different http methods
//there for server must run 300 address and assigniment should be submitted at email
//addreadname full contain your fullnames and levels
//"twiringiyimanaeric42@gmail.com"




const express = require("express")
const port=3000;
const app = express();
//get in  the server  https method1
app.get('/',(req,res)=>{
   console.log("this is node js and express.js from rukundo ally l4sodA");
    res.send("this is node js and express js  from rukundo ally l4sodA");
});
//post in the server https method2
app.post('/createuser',(req,res)=>{
    console.log("user created are success")
    res.send('user created are success')
});
//putting in the server https method3
app.put('/updateuser',(req,res)=>{
    console.log("user update are done")
    res.send('user update are done')
});
//head in the server  https method4
app.head('/retreiveuser',(req,res)=>{
     console.log("user retreived are done")
    res.send('user retreived are done')

});
//delete in the server  https method5
app.delete('/removeuser',(req,res)=>{
     console.log("user removed user are done")
    res.send('user removed user are done')

})

//listening the server
app.listen(port,()=>{

    console.log(`the server is running at localhost:${port}`);
});
//from rukundo ally developer