const choice=parseInt(prompt("Enter Your Choice"))
let day=""
switch(choice)
{
    case 0:
        day="Sunday"
        console.log(`Today the Day is:${day}`)
        break
    case 1:
        day="Monday"
        console.log(`Today the Day is:${day}`)
        break
    case 2:
        day="Tuesday"
        console.log(`Today the Day is:${day}`)
        break
    case 3:
        day="Wednesday"
        console.log(`Today the Day is:${day}`)
        break
    case 4:
        day="Thurday"
        console.log(`Today the Day is:${day}`)
        break
    case 5:
        day="Friday"
        console.log(`Today the Day is:${day}`)
        break
    case 6:
        day="Saturday"
        console.log(`Today the Day is:${day}`)
        break
    default:
        console.log("Enter a Number from 0-6")
        break
}
