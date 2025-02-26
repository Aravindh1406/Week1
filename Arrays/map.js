//1.Square of num
const arr=[1,2,3,4,5]
const square=arr.map((val)=>{
    return val*val
})
console.log(square)
console.log("------------------------------------------------------------------------------------------------------------")
//2. To UpperCase
const fruits=['apple','banana','cherry','guava','watermelon']
const upperCase=fruits.map((nameOfFruit)=>{
    return nameOfFruit.toUpperCase()
})
console.log(upperCase)
console.log("------------------------------------------------------------------------------------------------------------")
//3 Printing Index and Value
const animals=['dog','cat','rabbit','cow','yalk']
const mp=animals.map((val,index)=>
{
    return `${index}: ${val}`
})
console.log(mp)
