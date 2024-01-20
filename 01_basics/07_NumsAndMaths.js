const score=400;
const balance=new Number(100);
console.log(balance);
console.log(balance.toString().length);
console.log(balance.toString(2));
const otherNum =23.4541;
console.log(otherNum.toPrecision(2));
console.log(otherNum.toFixed(2).localeSting('en-IN'));
console.log(Math.ceil(4.254));
console.log(Math.floor(4.9));


//Maths Library

//1. Math.max
//console.log(Math.max(45,54545,24))
console.log(Math.floor((Math.random()*10)+1));




/*+++++++++++++++++++++++++++ WE HAVE A TRICK   ++++++++++++++++++++++++++++++++++++*/
const min=10;
const max=20;
console.log(Math.floor(Math.random()*(max-min+1))+min);

// this is a trick to produce random number with a given range

