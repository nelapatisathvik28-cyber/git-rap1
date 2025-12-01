let gp ="sunny;"
console.log("gp")

let van="fiat";
console.log("it is" +"<br>"+van)  //doubt//


const animal={
    dog:"eye",
    dog1:"nose",
    dog3:"teeth",
    dog4:"legs"

};
animal.dog5="hair"  //it will be added to object//
console.log(animal)

//----------------------------------//

const house={
    color:"red",color:500,doorcolor:"grey"
}
house.greet=99
console.log(house.color,house.greet)


//-----------------------------------//
const jk={}

jk.city="kkkk",
jk.city="jjjjj",
jk.city="dgfweudagj"
jk.kk="efdwefwersdf"
console.log(jk)
//-------------------------------------//

const array={
    boom:"red",boome:"pink",
    boom:"gold"
}
array.hiwi=88
console.log(array)
//----------------------------------//
 
let city={
    type:"hitec-city",city:"rfrrf"
}
city.citwy="boom"
console.log(city)

//-------------------------------------//

let dresses={
    name1:"shirt",
    name2:"panth",
    nam3:"bunny",
};
dresses.name2="pooopp"
console.log(dresses)
//--------------------------------------//
const oppps={
    name:"fiat",
    name1:"sunny",
    name2:"boom",
    name3:"dolly",

name5:45



}
oppps.name6="krish";

console.log(oppps)
//-------------------------------------//
const personx={
name:"flower",
nam2:"rose",

}
personx.name2="green-light"
personx.name3="user"
console.log(personx)

//----------------------------//
let persony=
new Object();
persony.firstname="sunny";
persony.lastname="dimple";
persony.age=69;

persony.age=88;
console.log(persony)

//---------------------------------//
const loop={
    firstname:"hoop",
    lastname:"joke",
    age:499

}
const x=loop;
x.age=777
console.log(x)

//OBJECT PROPERTIES//
 const user={
    name:"kishor",
    name1:"ashok",
    name2:"adhi",
 }
 user.name="gooood"
 console.log(user["name"])
 //---------------------------------------------//
 
 const jp={
    a:"fish",
    b:'dog',
    c:'cat',
 };
 jp.nationality='english';
 console.log(jp)

 //--------------------------------------------------//
 const resume={
    home:"tharun",
    home1:"pavi",
    home2:"rk beast",

 }
 resume.home="gooppp"
 const y1=resume.home2
 console.log(resume,y1,y1)
 //-----------------------------------------------------//
//deleting properties//
const game={
    game1:"vollyball",
    game2:"football",
    game3:"flower",
    age:9999,
};
delete game.age;

console.log(game)

//--------------------------------------------//
const pop={
    name1:"sunny",
    name2:"jk",
    name3:"jp",
    name4:2874,
    cars: {
        car1:"bmw",
        car2:"volvo",
        car3:"bmw1",
    }
    
}
pop["cars"]["car4"]="wokeswagwen"
console.log(pop.cars["car4"])

//------------------------------------------------//
const fx={
    animal:"hoop",
    animal2:"fishes",
    animal3:"food",
animals4:{
    dog:"5 years",
    dog1:"white-color",
    dog2:"15years",
}

}

fx.animals4.dog1=606060
delete fx.animals4.dog1
console.log(fx.animals4.dog)

//------------------------------------//

var username={
    book:"telugu",
    book1:"english",
    book2:"sanskrit",
    
    book:{
        book:"beam",
        book1:"physics",
        book6:"chemistry",
    }
}
console.log(username.book1)

//--------------------------------------//
const home={
    snack1:"biscuit",
    snack2:"chocklet",
    snack3:"water",
    snack4:{
        water:"cooldrink",
        bottle:"warm"
    }
}
home.snack1="hhhhhhh";
home.snack4.snackp="zebbb"
home.snack4.watermm="yyyyyyyyyyy"

delete home.snack4.bottle
console.log(home)


//---------------------------------//
const list={
    list1:"uday",
    list2:"avi",
    list3:"monaj",
    list4:{
        car:"kia",
        car1:"bmw",
        car2:"volvo"

    }

}
list.list1="hiwifiboom";
delete list.list4.car3;

console.log(list)

//------------------------------------------//
 //object methods//
  const cars={
    carr1:"kia",
    carr2:"telsa",
    carr3: function(){
    return this.carr1+" "+this.carr2
    },
  };
cars.carr2="fff"
console.log(cars.carr3())
//-----------------------------------------//

const live={
    fruit:"apple",
    fruit1:"banana",
    fruit2:"pineapple",
    fruitname: function(){
      console.log(this.fruit +" "+ this.fruit1)
    }

}
live.fruitname()

//----------------------------------------//

const citys={
    city:"banglore",
    city1:"hyderbad",
    city2:"chennai",
    city3:function(){
      console.log(this.city1 +" "+this.city2)  
    }
}
citys.city3()
//--------------------------------//

const temple={
    user:"dear",
    userno:99,
    user1:"tharun",
    myfunction:function(){
        return this.user+" "+this.userno
    }
}
console.log(temple.myfunction())


//displaying objects//

const hello={
    hello1:"kumar",
    hello2:"teja",
    hello3:"varun",
    hello4:function(){
        return this.hello1+" "+this.hello2
    }
}
console.log(hello.hello4())


const pipe={
    namea:"llp",
    nameb:"boop",
    name3:"hji",

}
const machine= Object.keys(pipe);
console.log(machine)
//----------------------------------------//

function Personss(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
  }
  
  const boomes = new Personss("surys", "boom", 50, "blue");
  console.log(boomes)

//-----------------------------------//

function usernamee(Adhi, ashok, siva){
    this.adhi= second;
    this.ashok= last;
    this.siva= Medium;
    }
    const myfun = new usernamee("dog","beam","50")
    console.log(myfun)

  