import express from "express"

const app= express();

app.get("/api/notes",(req,res)=>{
    res.send("Here You Go!!!");
});

app.listen(5001,()=>{
    console.log("Server running on port 5001");
});