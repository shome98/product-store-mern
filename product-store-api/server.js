import http from "http";
const port=process.env.PORT
http.createServer((req, res) => res.writeHead(200,{ 'Content-type': 'text/html' }).end('<h1>Server is on or not</h1>'))
.listen(port,()=>console.log(`Server is running on port ${port}`))