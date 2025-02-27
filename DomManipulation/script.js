function loginDetails()
{
    let arr=[]
    const name=document.getElementById("name").value
    const email=document.getElementById("email").value
    if(name==="")
    {
       arr.push("Name is Required")
    }
    const exp=/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if(!exp.test(email)){
        arr.push("Please Enter a Valid Email")
    }
    if(arr.length>0){
        document.getElementById("report").innerHTML=arr.join("<br>")
        return false;
    }
    document.getElementById("report").innerHTML = "Form Validated Successfully!"
    return true
}