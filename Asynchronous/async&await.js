function fetchUserProfile(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve("Aravindh")
        },2000)
    })
}
function fetchUserOrders(user){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve(6)
        },3000)
    })
}
function calLoyaltyPoints(orders){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve(orders*10)
        },2000)
    })
}
async function CustomerDetails(){
    try{
        const user=await fetchUserProfile();
        console.log("User name is:",user)
        const order=await fetchUserOrders(user)
        console.log("Orders are:",order)
        const points=await calLoyaltyPoints(order)
        console.log("Loyalty Points are:",points)
    }
    catch (error) {
        console.error("An error occurred:", error);
    }
}
CustomerDetails();