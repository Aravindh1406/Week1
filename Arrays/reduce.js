//1. Greatest Element
const nums=[2,5,8,1,9]
const max=nums.reduce((acc,curr)=>{
    return acc>curr?acc:curr
})
console.log("Greatest Element:",max)
console.log("------------------------------------------------------------------------------------------------------------")
//2. Counting Frequnecy of target 
const fruits=['apple','banana','apple','orange','apple']
const target='apple'
const freq=fruits.reduce((acc,curr)=>{
    if(curr===target){
        acc+=1
    }
    return acc
},0)
console.log("Frequency of Target:",freq)
console.log("------------------------------------------------------------------------------------------------------------")
//3.Frequency of Each Element
const fru=["apple","banana","cherry","apple","apple","guava","banana","guava"]
const fre=fru.reduce((obj,curr)=>{
     if(obj[curr]){
        obj[curr]++
     }
     else{
        obj[curr]=1
     }
     return obj
},[])
console.log(fre)
