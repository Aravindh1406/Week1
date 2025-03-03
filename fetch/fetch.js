fetch('https://api.agify.io?name=kapil')
.then(function(response){
    if(!response.ok)
    {
        throw new Error("Network has an Error")
    }
    return response.json()
})
.then(function(data){
    console.log(JSON.stringify(data,null,1))
})
.catch(function(err)
{
    console.log(err)
})