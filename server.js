const http = require('http')
const fs = require('fs');

const home = fs.readFileSync('./index.html')


const PORT = 4000;
const hostname = "localhost;"
const server = http.createServer((req, res)=>{
    

    if(req.url === '/'){
        return res.end(home)
    }
    if(req.url === '/about'){
        return res.end('<h1>This Is About Page</h1>')
    }
    if(req.url === '/contact'){
        return res.end('<h1>This is Contact Page</h1>')
    }
    if(req.url === '/service'){
        return res.end('<h1>This is service page</h1>')
    }
    else{
        return res.end('<h1>404 Page Not Found</h1>')
    }
    
})


server.listen(PORT, {hostname}, ()=>{
    console.log(`server started at port ${PORT}`)
})