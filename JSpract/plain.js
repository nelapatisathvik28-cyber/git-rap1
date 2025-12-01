let name={name:"raghu",name1:"teja",name3:"kittu"}
name.name4="pavan";
name={num:"rfe"}
delete name.num;
console.log(name)

 function myfun(run,First,second,fast)
 {
 this.firstname=run;
 this.secondname=First;
 this.thridname=second;
 this.fourthname=fast;
 }
 let result=new myfun("wee","boxing","kick","break ur face")
 console.log(result)


 let num= new Date("2025-04-25")
 console.log(Number(num))


 let use=Number.MAX_VALUE
 
let USERT=Number.MIN_VALUE
 console.log(use)
 console.log(USERT)


 let ink=["time","break","moves"];
 ink.push("ooopps")
 ink[0]="9999"
 delete ink[2]
 console.log(ink)


 let numbe=[1,2,3,4,56,6,7,8,9,9887]
 let upper=numbe.flatMap(x=> [x,x*10]);
 console.log(upper)
  

 let cars=["bmw","audi","ferrari","wokeswagen",'kia']
 cars.splice(2,0 ,"tesla","rangerover")
 console.log(cars)

const jk={name:"sunny",name2:"dolly",name3:"rohith",name4:[{cars:"kia",cars1:"rollsroyakls"}]}
jk.namee="iiiii"
jk.name="pppopppp"
jk.name4.cars="KTM"
console.log(jk)


//--------------------------------------------------------------------------------------------------//


function person(first,second,thrid,fourth)
{
    this.firstname=first,
    this.secondname=second,
    this.thridname
}
const upe= new person("gov","vind","vinod")
console.log(upe)

let namert=123
let iop=namert.toString()
console.log(typeof iop)

let x=12
console.log(x.toExponential())

let YP=13.34567
let range=YP.toFixed(2)
console.log(range)

let np=15.999
let no=np.toPrecision()
console.log( no)


const color=["red","blue","rose","pink"]
color[0]="grenn"
let yui=color[color.length-1]
console.log(yui)


const points=new Array("supply","supliment","increment")
points[0]="green"
points.shift()
console.log(points instanceof Object)


const flowers=["roseflower","gulab flower"]
const flow=flowers.pop()
console.log(flow)

let animal=["horse","rat","dog","cat","snake"]
let ani=animal.copyWithin(2,4)
console.log(ani)




let member=[1, 30, 4, 21, 100000];
let nomber=member.sort();
console.log( member)

const equp=[1,312,4,35,554,253,54]
equp.sort(function(a,b){return b-a})
console.log(equp[2])


const yummy=[1,3123,24342,343,3,4]
let hyper=yummy.sort(function(a,b){
    return b-a })
    console.log(hyper)


const x1=[4,25,30,55,65,75,85,95]
let x2=x1.find(myfunnu)

function myfunnu(value ,index, array){
    return value > 18;

}
console.log(x2)


const cool=[2,3]
const cools=cool.findIndex(myfuner)
function myfuner(index,value,array){
    return array>3
}
console.log(cools)

const names=[1,2,3,4,9,9]
let wrap=names.sort(function(){
    return 0.5 - Math.random()
})
console.log(wrap)


let jps=[1,2,3,45,5,6,6,7,,45,range,67,,456,45,64,,]

const d= new Date()
console.log(d,jps)



let router=["wifi","connect","internet"]
let innk=new Date(2123-4-44-4)
console.log(router,"\n",innk)

let jp=["banana","apple","carret","vegies"]
jn=Math.round(8.9)
console.log(jn)

let pipe=new Date("2003-04-25")
pipe.setFullYear(2020)
console.log(pipe)

let dt=new Date(2022-6-25)
dt.getMilliseconds()
console.log(dt)

//-------------------------------------------//

const de=new Date(0)
console.log(de.toDateString())

const timerr=new Date("2002-4-26")
timerr.getMonth()
console.log(timerr)

console.log(10<11)
let van=Boolean(100<11)
console.log(van)

console.log(Math.floor(Math.random()*100))

console.log(Math.random()*11)

let namej="fjk dvc"
namej.at()
console.log(namej)

let driver;
switch(new Date().getDay()){
    case 0:
        day = "mondey";
        break;
        case 1:
}


if (new Date().getHours()>18)
    console.log("good day!")

else{
    console.log("good EVENING!@!")
}
 
const hour = new Date().getHours();

if (hour >= 5 && hour < 12) {
  console.log("Good morning!");
} else if (hour >= 12 && hour < 17) {
  console.log("Good afternoon!");
} else if (hour >= 17 && hour < 21) {
  console.log("Good evening!");
} else {
  console.log("Good night!");
}

let textr=new Date().getHours();
let greeting;

if(textr<10)
{
    greeting="goodmorning"

}
else if(textr< 20){
    greeting="goodday"
}
else{
    greeting="night "
}
console.log(greeting)





let day;
switch(new Date().getDay()){
    case 0:
    day="sunday";
    break;
    case 1:
    day="mondey";
    break;
    case 2:
    day="tuesday";
    break;
    case 3:
    day = "Wednesday";
    break;
    case 4:
        day = 'Thursday';
        case 5:
            day="friday";
            break;
            case 7:
                day="saturday"
}
console.log(day)








