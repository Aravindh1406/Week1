function fetchUserProfile()
{
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve("ARAVINDH")
        },3000)
    })
}
function fetchOrderDetails(user){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve(5)
        },2000)
    })
}
function calLoyaltyPoints(ordercount){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve(ordercount*10)
        },3000)
    })
}
fetchUserProfile()
.then(function(user){
    console.log("User is:",user)
    return fetchOrderDetails(user)
})
.then(function(ordercount){
    console.log("number of Orders are:",ordercount)
    return calLoyaltyPoints(ordercount)
})
.then(function(points){
    console.log("Loyalty Points:",points)
})
.catch(function(error)
{
  console.log(error.message)
})
