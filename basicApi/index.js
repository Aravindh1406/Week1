const http=require("http")
const port=3000
const server=http.createServer((req,res)=>{
    if(req.method==='GET')
    {
        res.statusCode=200
        res.write(JSON.stringify({title:"Valid Get Request",message:"Welcome to NOde Js"}))
        res.end()
    }
    if(req.method === 'POST')
        {
            res.statusCode=200
            res.write(JSON.stringify({title:"Valid Post Request",message:"Welcome to NOde Js"}))
            res.end()
        }
})

server.listen(port,()=>{
    console.log(`server running on Port:${port}`)
})

