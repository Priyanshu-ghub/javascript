
/*            CODE AUR CHAI (remove the comment block to access)
//++++++++++++++++++ DATES++++++++++++
//      1

let myDate = new Date();
console.log(myDate);
console.log(myDate.toString('IN'));
console.log(myDate.toDateString());
console.log(myDate.toLocaleDateString());
console.log(typeof (myDate));
console.log(myDate.toUTCString());
console.log();
console.log();
console.log();
console.log();
console.log();

//      2
let myCreatedDate=new Date(2023,0,22);
console.log("RAM RAJYA ON  "+myCreatedDate.toTimeString());
console.log("Ram Rajya on "+ myCreatedDate.toDateString());
console.log();
console.log();
console.log();
console.log();

//      3
//(In this format the month starts from 01 for january unlike other two declaration type)        
let myCreatedDate3=new Date("2023-012-22");  
console.log(myCreatedDate3);

//====================================================================================================

//                  TIME
let myTimeStamp = Date.now();
console.log(myTimeStamp);
console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000));
console.log(`The time is ${Math.floor(Date.now()/1000)}`);

myCreatedDate.toLocaleString('default',{
    weekday :"long", 
    
});
console.log(myCreatedDate);*/





//- - - - - - - - - - -MDN- - - - - - - - - - - - - -
const Date1= new Date();
console.log(Date.parse(`EN-IN`));
console.log(new Date().toLocaleTimeString());