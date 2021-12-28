const express =require('express')
const mongoose=require('mongoose')
const cors= require('cors')
const app=express()
const RegisterModel=require('./models/Register')
mongoose.connect('mongodb://localhost:27017/mydb',{useNewUrlParser:true} )
app.use(express.json())
app.use(cors())
app.listen(3001,()=>{console.log('connect to http://localhost:3001/')})
app.post("/insert",async(req,res)=>{
    const firstname=req.body.firstname
    const lastname=req.body.lastname
    const fathername=req.body.fathername
    const mothername=req.body.mothername
    const date=req.body.date
    const gender=req.body.gender
    const email=req.body.email
    const password=req.body.password
    const phoneno=req.body.phoneno
    const address=req.body.address
     console.log(req.body.firstname)
     console.log(req.body.lastname)
     console.log(req.body.fathername)
     console.log(req.body.mothername)
     console.log(req.body.date)
     console.log(req.body.gender)
     console.log(req.body.email)
     console.log(req.body.password)
     console.log(req.body.phoneno)
     console.log(req.body.address)
    const reg=new RegisterModel({firstname:firstname,lastname:lastname,fathername:fathername,mothername:mothername,date:date,gender:gender,email:email,password:password,phoneno:phoneno,address:address})
    try{ 
         await reg.save()
         res.send("record inserted")
         console.log('record inserted')
    }
    catch(err){
        console.log(err)
    }
})

app.get("/show", async(req,res)=>{
    RegisterModel.find({},(err,result)=>{
        if(err){
            res.send("Record failed to Load")
        }
        res.send(result)
        console.log(result)
    })
})

app.post('/findByFirstname', async (req,res)=>{
    const firstname=req.body.firstname
    RegisterModel.findOne({firstname:firstname},(err,result)=>{ if(err) console.log('error in searching');
        console.log(result.firstname,' ',result.address);
      res.send(result)
    })
})
app.post("/update",async(req,res)=>{
    const firstname=req.body.firstname
    const lastname=req.body.lastname
    const fathername=req.body.fathername
    const mothername=req.body.mothername
    const date=req.body.date
    const gender=req.body.gender
    const email=req.body.email
    const password=req.body.password
    const phoneno=req.body.phoneno
    const address=req.body.address
  console.log('Update started');  
 const reg=new RegisterModel({firstname:firstname,lastname:lastname,fathername:fathername,mothername:mothername,date:date,gender:gender,email:email,password:password,phoneno:phoneno,address:address})
   try{
   await RegisterModel.findOneAndUpdate(
    {"$set" : {"firstname":req.body.firstname,
    "lastname":req.body.lastname,
     "fathername":req.body.fathername,
     "mothername":req.body.mothername,
     "date":req.body.date,
     "gender":req.body.gender,
     "email":req.body.email,
     "password":req.body.password,
     "phoneno":req.body.phoneno,
     "address":req.body.address}},{new:true}).exec((err,reg)=>{
        console.log("Welcome to Jntuk")
        if(err) console.log(err)

        else
        //res.status(200).send(employee)
        console.log({"firstname":req.body.firstname,
        "lastname":req.body.lastname,
         "fathername":req.body.fathername,
         "mothername":req.body.mothername,
         "date":req.body.date,
         "gender":req.body.gender,
         "email":req.body.email,
         "password":req.body.password,
         "phoneno":req.body.phoneno,
         "address":req.body.address})
    })
      // res.send("record updated")
        console.log("Record found updated")
        console.log(req.body.address)
   }
   catch(err){
       console.log(err)
   }
})

app.post('/delRec',async (req,res)=>{
    var myquery={firstname:req.body.firstname};
    console.log(req.body.firstname)
    await registerModel.deleteOne(myquery).then(function(){
        console.log("Data delected");//Success
    }).catch(function(error){
        console.log(error);//Failure
    });
});
