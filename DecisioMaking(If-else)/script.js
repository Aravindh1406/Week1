alert("Enter Marks between 1-100 only")
const teluguMarks=parseInt(prompt("Enter Marks in Telugu")) 
const hindiMarks=parseInt(prompt("Enter Marks in Hindi")) 
const englishMarks=parseInt(prompt("Enter Marks in English"))
const mathsMarks=parseInt(prompt("Enter Marks in Maths"))
const scienceMarks=parseInt(prompt("Enter Marks in Science")) 
const socialMarks=parseInt(prompt("Enter Marks in Social") )
const sum=(teluguMarks+hindiMarks+englishMarks+mathsMarks+scienceMarks+socialMarks)
let avg=sum/6
console.log(`Sum of total Marks:${sum}`)
avg=(avg*100)/100
console.log(`Average Marks from all Subjects:${avg}`)
if(avg>=90&&avg<=100)
{
    grade="O"
}
else if(avg<90&&avg>=80)
{
    grade="A"
}
else if(avg<80&&avg>=70)
{
    grade="B"
}
else if(avg<70&&avg>=60)
{
    grade="C"
}
else if(avg<60&&avg>=50)
{
    grade="D"
}
else if(avg<50&&avg>=40)
{
    grade="E"
}
else
{
    grade="F"
}
console.log(`The student Grade is:${grade}`)