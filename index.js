const express = require("express")

const app = express()

const PORT = 5000;
app.get("/", (req, res) => {
    res.send("Hello we are running perfectly  docker image")
})

app.listen(PORT,()=>{
    console.log(`Server is running on ${PORT}`)
})