function fetchUserProfile(callback)
{
    setTimeout(function(){
        callback("ARAVINDH")
    },3000)
}
function fetchOrderDetails(user,callback){
    setTimeout(function(){
        callback(7)
    },4000)
}
function calLoyaltyPoints(ordercount,callback)
{
    setTimeout(function(){
        callback(ordercount*10)
    },3000)
}
fetchUserProfile(function(user){
    console.log("User Name is:",user)
    fetchOrderDetails(user,function(ordercount){
        console.log("Number of Orders are:",ordercount)
        calLoyaltyPoints(ordercount,function(points){
            console.log("Loyalty Points are:",points)
        })
    })
})