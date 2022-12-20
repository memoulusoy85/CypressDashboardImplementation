var name="john"
var age=34
var name_object={firstname:"john", lastname:"doe"}
var boolean= true
var sheets=["HTML", "CSS"]
var a=null

var students={
     firstname:"mike",
     lastname:"jack",
     age:25,
     height:180,

     fullName: function(){
        return this.firstname+this.lastname
     }


}

const agevalue=students.age
console.log(agevalue)
console.log(students.fullName())
