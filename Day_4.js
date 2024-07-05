// Day -4 : Call back function, Higher order function: 
// Higher-order function -> forEach(), Map(), Filter() and reduce() 

// Example of Higher order and call back function:
function display(){ //Higher-order function: accept other function as parameter:
    const getname =get_name()
    console.log(getname)
}
function get_name(){//Call back function: Used as the parameter of other function 
    const name = 'Nikesh'
    return name
}
display(get_name)


// forEach method: Brings changes in an original array
//squared each element of an array and push it to an empty array.
const fruits = ['apple','bananna','orange','mango']
fruits.forEach(function(nic){
    console.log(nic)
})

const nums = [1,2,3,4,5]
const sq_num = []
nums.forEach(function(sq){
    sq_num.push(sq**2)
})
console.log(sq_num)



const data = [
    {
        firstname : 'manish',
        lastname : 'basnet',
        address : 'ithari'
    },
    {
        firstname : 'nikesh',
        lastname : 'dhimal',
        address : 'urlabari'
    },
    {
        firstname : 'mandeep',
        lastname : 'limbu',
        address : 'dharan'
    },
]
 

data.forEach(function(data){
    console.log('my name is '+data.firstname +" " + data.lastname)
}
)


// Map Method : no changes in original array and return a new array 
// cubed each elements of an array and returned as a new array
const num = [1,2,3,4,5]
const cubed = num.map(function(num){
    return num**3
})
console.log(cubed)



const result = data.map((data)=>{
    return{
        fullname : data.firstname+data.lastname
    }
})
console.log(result)



const num1 = [1,2,3,4,5]
const output= num1.map(function(data){
    return{
        text: 'A', 
        number: data
    }
})
console.log(output)

//Spread operator (...)
const result1 = data.map(function(obj){
    return {
        ...obj,
        fullname : obj.firstname + " " + obj.lastname
    }
})
console.log(result1)


// Filter methotd (Higher-order function): Same as map method and can apply some condition on returning values
// Display number greater than 5 using filter method 
const num2 = [1,2,3,4,5,6,7,8,9,10]
const result2 = num2.filter((ob)=>{
    return ob >5
    
})
console.log(result2)

// Display even numbers usinf filter HOF 
const evn_num = num2.filter(function(nu){
    return nu % 2 == 0
})
console.log(evn_num)


// WAP to return the list of books published after 2000 using filter HOF
books = [
    {
        title : "You can win",
        author : 'shiv khera',
        publishedAt : 2001
    },
    {
        title : "Think like a monk",
        author : 'Jay shetty',
        publishedAt : 2022
    },
    {
        title : "Cashflow quadrant",
        author : 'Robert T. Kiyosaki',
        publishedAt : 1909
    },
    {
        title : "You can win2",
        author : 'shiv khera',
        publishedAt : 1990
    },
    {
        title : "Think like a monk2",
        author : 'Jay shetty',
        publishedAt : 1999
    },
    {
        title : "Cashflow quadrant2",
        author : 'Robert T. Kiyosaki',
        publishedAt : 2010
    }
]
const result3 = books.filter(function(obb){
    return obb.publishedAt > 2000
})
console.log(result3)


//filter the given files with extension .js using map HOF & endswith() method or includes
const files = ['index.html','app.js','app.java','test.js']

const result4 = files.filter((obje)=>{
    // return obje.endsWith('.js')
    return obje.includes(".js")
})
console.log(result4)


// remove the null and undefined data from the given array with filter HOF 
const lasttrack = [1,2,null, undefined, 'manish', 'haha','hehe']
const out = lasttrack.filter((obs)=>{
    // return obs != null && obs !=undefined
    if(obs != null && obs != undefined){
        return obs
    }

})
console.log(out)


// write a prgram to display name which endswith "sh", marks >500 and whose status is pass from the data given below:
const data1 = [
    {
        name : "Manish",
        marks : 800,
        status : "pass"
    },
    {
        name : "Anish",
        marks : 500,
        status : "fail"
    },
    {
        name : "Pranjal",
        marks : 900,
        status : "pass"
    },
    {
        name : "Bob",
        marks : 100,
        status : "fail"
    },
    {
        name : "Hari",
        marks : 550,
        status : "fail"
    },
    {
        name : "Shyam",
        marks : 600,
        status : "pass"
    },
    {
        name : "Laxman",
        marks : 300,
        status : "fail"
    }
]

const ret = data1.filter((on)=>{
    return on.marks>500 && on.name.endsWith("sh") && on.status == "pass"
})
console.log(ret)

// Examples 
function name (get_name){
    const get = get_name()
    console.log(get)
}
function get_name(){
    const name = "nikesh"
    return name 
}

name(get_name)


// Reduced method
// const array = [15, 16, 17, 18, 19];

// const re = array.reduce((acc,cur,init)=>{
//     const sum = acc + cur
//     return sum
// })
// console.log(re)

const numbers = [1,2,3,4,5,6,5,6,7,8,9]


