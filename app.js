const express = require('express')
const app     = express()
const path    = require('path') 
const port = process.env.PORT || 3000;

app.use(express.static(path.resolve(__dirname,'./public')))


app.get('/',(req,res)=>{
   let ruta = path.resolve(__dirname,'./views/home.html')
   console.log(ruta)
    res.sendFile(ruta)
})

app.listen(port,()=>{
    console.log("server arriba, port: "+port)
} )
