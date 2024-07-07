//Day - 5: Reduce: useful in looping as welle perform calculation of numbers

const num = [1,2,3,4,5]
const sum = num.reduce((accumulator,num)=>{ //accumulator stores initial calculated value, num -> value of an array
    return num + accumulator

},0) // 0 => initial value of accumulator
// calculation process:
// 1 + 0 = 1 (accumulator)
// 1 + 2 = 3 (accumulator)
console.log(sum)



// calculate the total price of the products using reduce

const products = [
    {
        product : 'A',
        price : 200,
        quantity : 2
    },
    {
        product : 'B',
        price : 300,
        quantity : 7
    },
    {
        product : 'A',
        price : 600,
        quantity : 3
    },
]

// const total = products.reduce((accu, val)=>{
//     return val.price * val.quantity + accu
// },0)
// console.log(total)


// Accumulator object as inital value : object 

const total1 = products.reduce((acc, obje)=>{
    acc.total = obje.price * obje.quantity + acc.total
    acc.totalquantity = obje.quantity + acc.totalquantity
    return acc 
},{total : 0,
    totalquantity : 0
})
console.log(total1)


// 
const reviews = [
    {
        rating : 2 
    },
    {
        rating : 4
    },
    {
        rating : 5
    }
]
function rats(reviews){
    const totalrat = reviews.reduce(function(accu, totrat){

        
        return accu + totrat.rating
        
    },0)
    console.log(totalrat)
    const average = totalrat / reviews.length
    console.log(average)
}
rats(reviews)

// DOM (Document object model): Also known as the map of website