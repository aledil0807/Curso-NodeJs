const http = require('node:http') // protocolo HTTP
const fs = require('node:fs')
const desiredPort = process.env.PORT ?? 1234

const processRequest = (req, res) => {
  res.setHeader('Content-type', 'text/html; charset=utf-8')
  if (req.url == '/'){
    res.end('<h1>Bienvenido a mi página de inicio</h1>')
  }
  else if (req.url == '/contacto'){
    res.end('Contacto')
  }
  else if (req.url == '/poster01.jpeg'){
    fs.readFile('clase2/poster01.jpeg', (err,data) =>{
      if(err){
        res.setHeader('Content-type', 'text/plain; charset=utf-8')
        res.statusCode= 500
        console.log(err)
        res.end('<h1>500 Internal server Error</h1>')
      }
      else{
        res.setHeader('Content-Type', 'image/jpeg')
        res.end(data)
      }
    })

    
  }
  else{
    res.statusCode = 404 //Ok
    res.setHeader('Content-type', 'text/plain; charset=utf-8')
    res.end('404')
  }
}

const server = http.createServer(processRequest)


server.listen(desiredPort, () => {
console.log(`server listening on port http://localhost:${desiredPort}`)
})

