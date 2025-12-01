function myfun(p1,p2){
    return p1+p2


}

const result=myfun(4,3)
console.log(result)


let fruits={
    name:"sunny",
    name1:"mango",
    name2:"apple",
    name3:function(){
      return  `${this.name} ${this.name2}`
    }

}
console.log(fruits.name3())


const functionsArray = [
    function() { return "First function"; },
    function() { return "Second function"; },
    function() { return "Third function"; }
  ];
  
  console.log(functionsArray[0]()); 
  console.log(functionsArray[1]());
  console.log(functionsArray[2]());
  function myfunz(p1,p2)
  {
    return p1*p2
  }

  let username=myfunz(100,100)
console.log(username)


let funarray=[
    function(){return "this is functionn"},
    function(){return "ha ha h "   },
]
console.log(funarray[0])





let obj={
    name:"rohith",
    age:30,
    name2:"sunny",
    age:40,

}
obj.name3="pavan"
console.log(obj.age=66,obj)

const name={
    name:"vamsi",
    name1:"44",
    name3:"siva",
}
console.log(name)


const namer=new Object()

namer.fitst="john",
namer.second="doe",
namer.third="zoom",
namer.age="40"

const keygs=Object.keys
(namer)
console.log(keygs)

const person = {
    name: "John",
    age: 30,
    city: "New York"
}
console.log(person)





async function* asyncRange(delay, from, to) {
  for (let i = from; i <= to; i++) {
    await new Promise(r => setTimeout(r, delay)); // simulate async
    yield i;
  }
}

(async () => {
  for await (const n of asyncRange(100, 1, 3)) {
    console.log(n); // prints 1,2,3 with delays
  }
})();



const myNoun = "template literal";

function myTagFunction( myStrings, myPlaceholder ) {
    const myInitialString = myStrings[ 0 ];
    console.log( `${ myInitialString }modified ${ myPlaceholder }.` );
}

myTagFunction`I'm a ${ myNoun }.`;
 "I'm a modified template literal."




 const String = "This is a string.";
 SyntaxError: "string literal contains an unescaped line"

const myString = `This
is a string.`;

console.log( String );

"This is a string"


