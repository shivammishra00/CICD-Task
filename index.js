const express = require('express');

const app = express();
app.use(express.json())

app.get("/api/get", (req,res)=>{
    return res.json({Message: "CI/Cd integration"})
})

app.listen(5000, ()=>{
    console.log("server is running on port 5000")
})



