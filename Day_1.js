// Day 1 : Basics of Javascript
// DAta types, variable and array

console.log("Hello world")
console.log("Bye world")

// Data types
const str = 'Nikesh' //string , variable_name -> str
const num = 23 // integer,  variable_name -> num
const num2 = 23.5 //float,  variable_name -> num2
const bool = true //Boolean,  variable_name -> bool
const comparision = { // object data type
    num11 : 63746285379875943958479384759384759739587345979573459n, //Biginteger
    num12 : 63746285379875943958479384759384759739587345979573459   // normal integer
}
console.log("This is Big integer: ",comparision.num11,"\n","This is normal integer: ",comparision.num12)


//Array
const friend1 = 'Nimesh'  //Normal ways to store values takes lots of time
const friend2 = 'Nishesh'
const friend3 = 'Niketan'
const friend4 = 'Nitesh'

console.log(friend1, friend2, friend3, friend4)


const friends = ['Nimesh','Nishesh','Niketan','Nitesh'] //Using array makes its easier and easier

console.log(friends)


// object: 
const me = {
    name : 'Nikesh',
    age : 22,
    address : 'Urlabari'
}

// displaying object values
console.log(me.name);
console.log(me.age);
console.log(me.address);
