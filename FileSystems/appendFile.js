const fs=require("fs")
const path=require("path")
const filePath=path.join(__dirname,"sample.txt")
//Asynchornous Append
const msg="I am Learning Node Js"
fs.appendFile(filePath,`\n${msg}`,(err)=>{
    if(err){
        throw err;
    }
    console.log("Data Appended Successfully")
})
const msg1="It is Easy To learn"
fs.writeFile(filePath,`\n${msg1}`,{flag:"a+"},(err)=>{
    if(err){
        throw err;
    }
})
console.log("One More  Append completed Successfully")
//Synchronous Append
const msg2="I am Good"
fs.appendFileSync(filePath,`\n${msg2}`)
console.log("Synchrouns Append Completed...")