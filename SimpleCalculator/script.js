const num1=parseInt(prompt("Enter first Number:"))
const num2=parseInt(prompt("Enter Second Number:"))
const Operation=prompt("Enter Operation [1.Addition 2.Subraction 3.Multiplication 4.Division]")
switch(Operation)
{
    case "1": console.log(`Addition Of two Numbers ${num1} and ${num2} : ${num1+num2}`)
            break
    case "2": console.log(`Subraction Of two Numbers ${num1} and ${num2} : ${num1-num2}`)
            break
    case "3": console.log(`Multiplication Of two Numbers ${num1} and ${num2} : ${num1*num2}`)
            break
    case "4":if(num2!==0)
              {
                console.log(`Division Of two Numbers ${num1} and ${num2} : ${num1/num2}`)
              } 
              else
              {
                console.log("Zero Division Error")
              }
            break
    default:console.log("Enter a Valid Number to Perform Operation")
}

