//const tinderUser = new Object()
const tinderUser={}
tinderUser.id="123abc"
tinderUser.name="manish"
tinderUser.isLoggedIn=false
//console.log(tinderUser)




const regularUser={
    email: "some@gmail.com",
    fullname:{
        userfullname: {
            firstname:"manish",
            lastname:"meena",
        }
    }
}
//console.log(regularUser.fullname?.userfullname.firstname)




const obj1={1:"A",2:"b"}
const obj2={3:"c",4:"D"}
 //const obj3={obj1,obj2}




 //const obj3=Object.assign({},obj1,obj2)
 const obj3={...obj1,...obj2}
 console.log(obj3)
 console.log(Object.keys(tinderUser))
 console.log(Object.values(tinderUser))