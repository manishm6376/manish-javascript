const array=["manish","meena","boy"]
let myObject={
    name:  "manish",
    age:  12,
}
 const myFunction = function(){
    console.log("manish")
 }
console.log(typeof array)
console.log(typeof myFunction)
console.log(typeof myObject)

// primitive datatype store in stack and non primitive datatype store in heap 
 let myname="manish"
 let myanothername=myname
myanothername="banty"
 console.log(myname)
 console.log(myanothername)
// see the above code , but in non primitive type when we change the other one properties which is holding same refrence memory then in original data  type the value also chnage  
let myObject1={
    email: "manish@gmail.com",
    age: 12,
}
let myObject2=myObject1
myObject2.email="manish@iitk.ac.in"
console.log(myObject1)
console.log(myObject2)
