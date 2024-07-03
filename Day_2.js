// Day -2 Array method and object
const name2 = ['hari','shyam','ram','kumar']
//  index:      [0] ,   [1],   [2],   [3]          

// length of an array:
len = name2.length
console.log(len)

// Indexing:
console.log(name2[3])

// Push operation: Insert element in array[length]  
name2.push('Nikesh')
console.log(name2)

// pop operation: Delete element from array[length-1] : lenghth -> after push operation 
name2.pop()
console.log(name2)

// Unshift operation: Insert element in array[0]
name2.unshift('Hello')
console.log(name2)

// Shift operation: Delete element from array[0]
name2.shift()
console.log(name2)

// Slice operation: Sliced an array based on the provided arguments .
//slice(startingindex, endingindex) -> endingindex is exclusive so, prints the elements from startingindex:(1) to endingindex-1(3-1).
const data = name2.slice(1, 3)
console.log(data)

// Splice operation: Replace the elements of an array based on the given arguments -> arr-name(starting_index, num_of_elements,replacing_value)
const days = ['sunday','monday','tuesday','wednesday']
days.splice(1,1,'bye') // Replacing element on index [1] (given by starting_index)  
console.log(days)

//examples 1:
const alpha = ['a','b','c','d','e','f']
alpha.splice(0,2,'hello','bye','world') //Replacing multiple elements based on te given arguments stating index [0] upto number of elements [2] 
//by the replacing_values -. hello, bye, world (replaced value -> a,b)
console.log(alpha)

// example :2 : Display the position of these alphbets
const alpha2 = ['n','i','k','e','s','h']
alpha2.splice(0,alpha2.length,14,9,11,5,19,8)
console.log(alpha2)

// Split method: 
const text = "My name is nikesh"
splitted_text = text.split(" ")
console.log(splitted_text)

// DAY -2 Object 

const person = {  //creating an object person
        name:'nikesh',
        address : 'mangalbare',
        nationality : 'nepali'
}
person.age = 22  //Adding one more characteristics of an object (age) -> person 
console.log(person)

// Freeze method in object -> Prevent external alternation of an object members making it static

const person2 = Object.freeze({
        name : 'himesh',
        address : 'mumbai',
        natonality : 'indian'
})

person2.age = 45
console.log(person2)


// in object data are stored in (key:value) format
// find key element
console.log(Object.keys(person2))
// find values 
console.log(Object.values(person2))



// Array inside object 

const fruit = {
        fruits : ['mango','apple','orange','grapes']
}
//insert and deleting an additional element in array inside object using push, pop, unshift and shift
fruit.fruits.push('banana')
console.log(fruit)

fruit.fruits.pop()
console.log(fruit)

fruit.fruits.unshift('banana')
console.log(fruit)

fruit.fruits.shift()
console.log(fruit)

console.log("\n")

// Object inside an array
const animal = [
        {
                name: 'tiger'
        },
        {
                name: 'elephant'

        },
        {
                name: 'bear'
        }
]
console.log(animal)

// insert and delete object from an array
//1. Push method
animal.push({
        name: 'lion'
})
console.log(animal)

//2. Pop method
animal.pop()
console.log(animal)

//3. Unshift method
animal.unshift({
       name:  'deer'
})
console.log(animal)

//4. Shift method
animal.shift()
console.log(animal)



// Replacing using spilce with while loop
const name1 = ['nikesh','nimesh','rikesh','manish','himesh']
const re_value = 'bye'
var ind = 1
const num_of_element = 4

while (ind <=num_of_element){
        name1.splice(ind,num_of_element,re_value)
        ind++
}
console.log(name1)



