
const fs=require("fs")
const path=require("path")
const filePath=path.join(__dirname,"sample.txt")
//Asynchronous
fs.readFile(filePath,"utf-8",(err,data)=>{
    if(err)
    {
        throw new Error("Something Is Wrong")
    }
    console.log(data)
    console.log("Asynchronous Reading Completed....")
})
//Synchronous
const data=fs.readFileSync(filePath,"utf-8")
console.log(data)
console.log("Synchronous Reading Completed....")

