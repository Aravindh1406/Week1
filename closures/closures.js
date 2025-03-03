let global=50
function outSide()
{
    let a=5;
    function inSide()
    {
        let b=10;
        console.log(`This is ${global} from Global Space`)
        console.log(`This is ${a} from Outside Function`)
        console.log(`This is ${b} from inside Function`)
    }
    return inSide()
}
outSide()