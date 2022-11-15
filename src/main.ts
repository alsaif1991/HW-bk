interface Iuser {
    name: string,
  age: number,
   Specialization: string,
   bestfriends:string[],
 
}

let customer:Iuser = { 
   name:"saif",
   age:40,
   Specialization:"CS",
   bestfriends:["fahad" ,"saud","ahmed"]
} 


console.log(customer.name);

