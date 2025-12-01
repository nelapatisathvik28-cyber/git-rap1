//variables//
//function level scope//

var x=10;
var pp="sunny";
console.log(pp)
//-------------------------------------------------------------------//

var user="syed";
{
    var user="kishor";

}
{
    var user="sai";
}
{
    var user ="yeswanth";
}

console.log(user)
//---------------------------------------------------------------------//

function boom(){
        var person="dear";

    }
    {
        var person=8;
    }
    {
        var person=9;
        console.log(person);
    }


    boom()

    //---------------------------------------//
    function beam(){
        var username="sathvik";
        
    }
    {
        username="zebra";
    }
    usernamee="kalyan";
console.log(username)
beam()
//--------------------------------------------------//