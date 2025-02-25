const http=require("http")
const port=3000
const server=http.createServer(function(req,res)
{
    res.statusCode=200
    res.setHeader("Content-Type","application/json")
    res.write(JSON.stringify({Title:"Valid Request",message:"Welocome to NodeJS"},null,1))
    res.end()
})
server.listen(port , function()
{
    console.log(`server running on port:${3000}`)
})
