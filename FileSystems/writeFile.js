//Asynchronous
const fs=require("fs")
const path=require("path")
const filePath=path.join(__dirname,"sample.txt")
const con="Hello World"
fs.writeFile(filePath,con,(err)=>{
    if(err){
        throw new Error("Something is Wrong")
    }
    console.log("Write Operation Completed")
})
const content="Welcome to Node JS"
fs.writeFile(filePath,content,(err)=>{
    if(err)
    {
        throw new Error("Something is Wrong")
    }
    console.log("Write Operation completed Again...")
})


//synchronous
/*content1="Good Afternoon"
fs.writeFileSync(filePath,content1)
console.log("Synchronous writing Operation Completed")
const content2="I am Aravindh"
fs.writeFileSync(filePath,content2)
console.log("Synchronous writing Operation Completed again....")*/



