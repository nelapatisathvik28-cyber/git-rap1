//functions//
//function declaraions//



function myfunction(name){
    
console.log(name)
}
myfunction("sathvik")




function username(names){
console.log(`hello,hii ${names}`)
}
username("boom")

//---------------------------------//
function animal(jig){
console.log(`i am:${jig}`)
}
animal("dog")

//--------------------------------//
function first(num1,num2){
console.log(arguments)
}
first(10,20)

//----------------------------------//

function carname(a,b){
    return a+b;

}

console.log(carname(10,50))

//-----------------------------------//
function name1(...restofparames){
   
   return restofparames

}
var result=name1("sunny","boom",88)
console.log(result)
//-------------------------------------------//
//A FUNCTION CAN BE ASSIGN TO A VARIABLES//
//WE CAN CALL THE FUNCTIONS EXPRESSIONS//
let swimi=function(num1,num2){
return num1+num2
}
console.log(swimi(100,100))

//--------------------------------------------//

function beam(a,b,c,d){
    d(`i am sathvik`)
return a*b
}
console.log(beam(1,20,"sunny",function(){
    console.log(
    "this is my name")
}))
//----------------------------------------//
//functions is an objects//
function king(){

}
king.description="IT SI SBEAUTIFUL"
console.log(king.description)
//-------------------------------------//


//objects//
let usernamer={
    name:"sunny0",name1:"ashok",name3:"pavan"
}
console.log("the car type is:"+ usernamer.name)
//--------------------------------------------//
let vehicle={
    car:"bmw",car1:"volvo",car2:"kia"

}
console.log(vehicle)
//----------------------------//

const color={
    color1:"red",
    color2:"blue",
    color3:"yellow"
}
console.log(color.color1,color.color2,color.color3)

//-------------------------------------------//
const wifi={
    wifi1:1,wifi2:2,wifi3:5,wifi4:2874,

}
const xv = wifi
xv.color3="temple"
console.log(xv)
//----------------------------------------------//
const wifii={
    name:"sunny",
    name1:"boom",
    name3:"sunnnn",
};
const gang=wifii;
gang.name3="resume";
console.log(gang)
//----------------------------------------------------//
const personf = {
    firstname: "dolly",
    lastname: "Doe",
    age: 100,
    eyecolor: "green"}
personf.nasinality="english";
personf.add="beams"
console.log(personf)

