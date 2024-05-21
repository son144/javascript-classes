console.log("hii");
 class Human{
    printMyName(name,age){
console.log("my name is",name,"and my age is ",age);
    }
    printMyAge(age){
console.log("my age is",age);
    }
}
let person1=new Human()
let person2=new Human()
person1.printMyName("harsh",18)
person2.printMyName("sonal")
console.log("person1 is ",person1);
console.log("person2 is ",person2);