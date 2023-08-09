const express = require("express")
const app = express()
const path= require("path")
app.use(express.static("public")) //linea importante para usar img
app.listen(3000,()=>{
  console.log("esta funcionando")
})
app.get ('/',(req, res)=>{
  res.sendFile(path.join(__dirname, "./views/home.html")) //el error fue ponermal la ruta
  // res.sendFile(path.resolve(__dirname,hola.html)

})
app.get('/registro',(req,res)=>{ //aca va solo el nombre
  res.sendFile(path.join(__dirname, "./views/registro.html")); //aca la ruta entera 
})
app.get("/ingresa", (req, res) => {
  res.sendFile(path.join(__dirname, "./views/ingresa.html")); //aca la ruta entera
});