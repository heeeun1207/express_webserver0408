const http = require('http')
const port = process.env.PORT || 3000

const server = http.createServer((req,res)=> {
  res.writeHead(200, {'Content-Type' : 'text/plain'})
  res.end('Hello worldç !')
})

server.listen(port , ()=> console.log(`server started on port ${port}; `+ 
'press Crtl -C to terminate...'))
