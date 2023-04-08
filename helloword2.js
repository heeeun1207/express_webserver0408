const http = require('http')
const port = process.env.PORT || 3000

const server = http.createServer((req,res)=> {
  // 쿼리스트링 , 옵션인 마지막 슬래시를 없애고 소문자롤 바꿔서 url을 정규화한다. 
  const path =req.url.replace(/\/?(?:\?.*)?$/,'').toLowerCase()  //<- ? 무슨의미지 
  switch(path){
    case '':
    res.writeHead(200, {'Content-Type' : 'text/plain'})
    res.end('Homepage')
    break
    case '/about':
      res.writeHead(200, {'Content-Type' : 'text/plain'})
      res.end('About')
      break
    default:
        res.writeHead(404, {'Content-Type' : 'text/plain'})
        res.end('not found')
        break
  }
})

server.listen(port , ()=> console.log(`server started on port ${port}; `+ 
'press Crtl -C to terminate...'))