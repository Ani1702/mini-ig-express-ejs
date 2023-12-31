const express=require("express")
const app=express();
const path=require("path")


app.use(express.static(path.join(__dirname,"public")));

const port=8080;

app.set("views", path.join(__dirname,"views"));

app.set("view engine","ejs") ;

app.listen(port,()=>{
    console.log(`app is listening to port ${port}`);
});

//Testing purpose:
app.get("/hello",(req,res)=>{
    res.send("hello")
})

app.get("/",(req,res)=>{
    res.render("home.ejs"); 
})


app.get("/ig/:username",(req,res)=>{
    let {username}=req.params;
    const instaData=require("./data.json")
    const data=instaData[username]
    console.log(data);
    console.log(username);
    res.render("instagram.ejs",{data});
})
