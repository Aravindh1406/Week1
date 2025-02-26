let student = {
    name: 'Aravindh',
    age: 20,
    city: 'Hyderabad',
    branch:'CSE'
};
console.log(student)
//dynamicall ADD
student.cgpa=8.6
student['Mob']=9392769102
console.log("==>After Adding")
console.log(student)
//updation
student.name="Nani"
student['age']=22
console.log("==>After updating")
console.log(student)
//delete
delete student.Mob
delete student.city
console.log("==>After Deleting")
console.log(student)
//reADD
student.city="Hyderabad"
student['Mob']=9392769102
console.log("==>After ReAdding Deleted Keys")
console.log(student)
//nested Object
console.log("==>Working with Nested Object")
let employee={
    name:"Bunny",
    age:28,
    job:"Software",
    address:{
        location:'Gachibowli',
        city:'Hyderbad',
        state:'Telangana',
        zipcode:501303

    },
    work:function(){
        return "He is Backend Developer"
    }
}
console.log(employee)
console.log(employee.work())
//accessing seperate values in Nested Object
console.log("==>Accessing in Nested Object")
console.log(employee.address.zipcode)
console.log(employee.address['zipcode'])
//Adding in Nested Object
employee.address.native="Jagital"
employee.address['nativeZip']=505327
console.log("==>After Adding in Nested Object")
console.log(employee)
//updating in Nested Object
employee.address.zipcode=501302
employee.address['city']="Mumbai"
console.log("==>After updating in Nested Object")
console.log(employee)
//deletion from Nested Object
delete employee.address.native
delete employee.address['nativeZip']
console.log("==>After Deleting in Nested Object")
console.log(employee)
//this keyWord
let car={
    name:"Toyota",
    year:2015,
    color:"Blue",
    mileage:15000,
    electric:"no",
    carDetails:function(){
        return `Name=${this.name} Color=${this.color} Mileage=${this.mileage}`
    },
    totalMilage:function(distanceInMiles){
        this.mileage+=distanceInMiles
        return `Now the Total Mileage is: ${this.mileage}`
    },
    service:function(){
        if(this.mileage>=50000){
            return `It is time to Provide service to car because it reached ${this.mileage}`
        }
        return `Since It has Only reached ${this.mileage}.You can use until it reaches Limit `
    }
}
console.log("==>Usage of This KeyWord")
console.log(car.carDetails())
console.log(car.totalMilage(2000))
console.log(car.service())
//destructuring object
console.log("==>After Destructuring")
let {name,age}=employee
console.log(name)
console.log(age)
//spread Opeartor
console.log("==>Using spread to create new Object")
let obj={...employee}
console.log(obj)
//enhanced object Literal
console.log("==>Using Object Literals to create new Object")
const named="Aravindh"
const aged=50
const person={named,aged}
console.log(person)
console.log("==>Listing Keys")
console.log(Object.keys(employee))
console.log("==>Listing Keys of Nested List")
console.log(Object.keys(employee.address))
console.log("==>Listing Values")
console.log(Object.values(employee))
console.log("==>Listing Keys and values")
console.log(Object.entries(employee))
//assign
console.log("==>Using Assign method of Object To create new Object")
let obj2=Object.assign(person,{branch:"ECE"},{college:"SNIST"})
console.log(obj2)
