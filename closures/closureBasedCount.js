function Counter()
{
    const temp=createCounter();
    temp.increase()
    temp.increase()
    temp.decrease()
    temp.reset()
    temp.increase()
    temp.increase()
}
function createCounter()
{
    let temp=0
     const obj= {
        increase:function(){
            temp++;
            console.log(temp)
        },
        decrease:function(){
            temp--;
            console.log(temp)
        },
        reset:function()
        {
            temp=0;
            console.log(temp)
        }
    }
    return obj
}
Counter()