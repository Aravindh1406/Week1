//1. values Greater Than 90
const arr=[95,75,45,87,95,24,99,67]
let count=0;
const l=arr.filter((val)=>{
    return val>90
})
console.log(l)
console.log("------------------------------------------------------------------------------------------------------------")
//2.values whose length greater than 3
const word=['cat','dog','elephant','bat','yalk','rabbit']
const gtthree=word.filter((val)=>{
    return val.length>3
})
console.log(gtthree)
console.log("------------------------------------------------------------------------------------------------------------")
