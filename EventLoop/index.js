console.log("start")
setTimeout(function(cbf){
    console.log("This is a Call Back Function")
},2000)
document.getElementById("btn").addEventListener("click",function(){
    console.log("Button Clicked")
})
fetch('https://api.agify.io?name=kapil')
.then(function(response){
    if(!response.ok)
    {
        throw new Error("Network has an Error")
    }
    return response.json()
})
.then(function(data){
    console.log(data)
})
.catch(function(err)
{
    console.log(err)
})
console.log("End")