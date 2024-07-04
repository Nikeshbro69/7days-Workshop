// Day_3 COnditional statement.

// Ternary operator -> ?:
const age = 21 
const result = age>= 18 ?"Can vote":"cant vote"
console.log(result)

//if....elseif...else condition 
// checking grade using if...elseif..else statement based on marks.
const marks = 70
if (marks>=80 && marks <90){
    console.log("A")
}else if(marks>=70 && marks<80){
    console.log("B+")
}else if (marks>=60 && marks<70){
    console.log("B")
}else{
    console.log("fail")
}


//short circuit
const israining = false
israining && console.log("carry umbrella")

// Exercise: short circuit 
const num = 4
num >=2 && console.log("Right")


// Display the odject data with some extra strings 
const person = {
    name:'Nikesh',
    age : 22,
    address : 'urlabari'
}
for(let key in person){
    
    console.log(key +" is "+ person[key])
}



// regular function
function add(a,b){
    console.log(a+b)
}
add(1,2)

// named regular function:
const add1 = function(a,b){
    console.log(a+b)
}

// square of each elements of an array
const numbers = [1,2,3,4,5] 
function access(numbers){
    for(var i = 0; i<5;i++){
        console.log(numbers[i]**2)
    }
}
access(numbers)

// Display each elements of an array using a function 
function access2(numbers){
    for(let i of numbers){
        console.log(i)
    }
}
access2(numbers)

const num1 = 2
const mul = function(num1){
    for(var i=1; i<=10; i++){
        console.log(num1 + " X " + i +" = " + num1*i)
    }
}
mul(num1)

// Exercise : Display userid, title and ipAddress of the given data
const data = {
    status: 200,
    message: "Code found",
    code: [
        {
            _id: "668510da18d90581711b6292",
            text: "test\n",
            userId: "f959757",
            title: "test",
            ipAddress: "49.244.110.12",
            createdAt: "2024-07-03T08:50:34.704Z"
           
        }
    ]
}

function access_data(data){
    console.log(data.code[0].userId, data.code[0].title,data.code[0].ipAddress)    
}

access_data(data)



