
const express=require("express")
const bodyParser = require("body-parser")
require("dotenv").config();
const sgMail=require("@sendgrid/mail")
sgMail.setApiKey("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");
const sendMail=async(msg)=>{
    try{
        await sgMail.send(msg)
        console.log("message sent")

    }catch(error){
        console.log('error',error)
    }
}



const app=express()


app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static("public"))
app.get('/',(req,res)=>{
    res.sendFile(__dirname+"/index.html")
})
app.post('/',(req,res)=>{

    const EmailID=req.body.EmailID;
    sendMail({
        to:EmailID,
        from:"ekambehl@gmail.com",
        subject:"Joining NewsLetter",
        text:"Thanks for joining our news letter!!",
    });
    

    res.send("Thanks for subscribing")
    
    console.log("POST")
})



app.listen(8080,(req,res)=>{
    console.log("Server is running")
})

