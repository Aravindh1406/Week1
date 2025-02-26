//1.Get Sum of Squares of Even Numbers
const arr=[1,2,3,4,5,6,7,8,9]
const evenArr=arr.filter((val)=>{
    return val%2===0
})
const squares=evenArr.map((val)=>{
   return val*val
})
const res=squares.reduce((sum,curr)=>{
    return sum+=curr
})
console.log(`sum of squares of Even Numbers is:${res}`)
console.log("------------------------------------------------------------------------------------------------------------")

