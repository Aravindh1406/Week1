//Asynchronous
const fs=require("fs")
const path=require("path")
const filePath=path.join(__dirname,"sample.txt")
const newFpth=path.join(__dirname,"simple.txt")
/*fs.rename(filePath,newFpth,(err)=>{
    if(err)
    {
        throw err;
    }
    console.log("Rename of File  completed")
})*/

//synchoronous
fs.renameSync(filePath,newFpth)
console.log("Synchrornous Rename file")