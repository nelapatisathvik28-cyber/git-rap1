//strings//
let answer ="this is summy";
let answerr  ="i am 'happy'";
console.log(answer, answerr)


//-------------------------------------------------------//





let carName1 = "Volvo XC60"; 
let carName2 = 'Volvo "XC60"';
let carname ="boom"
console.log(carName1 + ""+ carName2 +" "+ carname)

//-----------------------------------//
let view="aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa";
console.log(view.length)

//----------------------------------//


function myfunction(num1,num2){
    return `${num1},${num2}`
    
    }
    
    console.log(myfunction(10,20))
    
    
    function first(num1,num2){
        console.log(arguments)
        }
        first(10,20)
    
        var result=("sunny","boom",88)
    console.log(result)
    
    let usernamer={
        name:"sunny0",name1:"ashok",name3:"pavan"
    }
    console.log("the car type is:"+ usernamer.name)
    //--------------------------------------------//
    let vehicle={
        car:"bmw",car1:"volvo",car2:"kia"
    
    }
    console.log(vehicle)
    const color={
        color1:"red",
        color2:"blue",
        color3:"yellow"
    }
    console.log(color.color1,color.color2,color.color3)
    
    let movie={
        name:"red",name1:"pink",nam2:"rose",fullname: function(){
            return this.name +""+ this.lastname;
        }
    }
    console.log(this.name1)
    
    
   
    
    
    let animaol ="fish";
    let animal2 ="frog";
    let xuv=88
    
    console.log( animaol, animal2)
    //-------------------------------------//
    let username={
        nam:"kishor",
        nam2:"siva",
        nam3:"rohith",
        nam4: function(){
            return this.nam3;
        }
    }
    console.log(username.nam)
    
//-----------------------------------------------//

const kp={
    game:"kabbadi",
    game1:"football",
    game2:"vollyball",

}
const time=Object.values(kp)
console.log(time)

//--------------------------------//

const personf = {
    firstName: "John",
    lastName: "Doe",
    id: 5566,
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
  }; 
  //-----------------------------------------------//
  const persond = {
    beam: "rajesh",
    beam2: "sunny",
    id: 966666,
  };
  persond.name = function() {
    return (this.beam + " " + this.id).toUpperCase();
  };
  console.log(persond.name())
  //-----------------------------------//

  const jp={
    food:"idli",
    food1:"dosa",
    food2:"rice",

  }
  console.log(JSON.stringify(jp))
  //-------------------------------------//

  function inputt(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
  }
  
  
  const myFun = new inputt("tharun", "sunny", 80, "lightgreen");

  console.log(myFun.lastname)//

  //-----------------------------------------//
  let light=`hifi`;
  console.log(light)


  //----------------------------------------------//
  let texter="doEom";
  console.log(texter.charAt(2))
  //--------------------------------------------//
  let texter1="suny";
  console.log(texter1.toUpperCase)

  //------------------------------------------//
  let texter2="suny";
  console.log(texter2.toLowerCase)
  //------------------------------------------//
  let texteru="sttttttttttttttttuny";

  console.log(texteru.length)

  let textery = "moon";
  let texterz = "funmoon";
  
  console.log( `it is  ${textery}, ${texterz}!`)
  
  

  

    
