console.log("Hello World")

// DOM manipulation: Document Object Model
// changing the content(Hello world) to Bye world
const val2 = document.getElementsByTagName('h1')[0]
val2.textContent = 'hehe'


// Through tag(H3)
const val = document.getElementsByTagName('h3')[0]
val.textContent = 'fail'

// Through Id
// content : Bye to HI
const val1 = document.getElementById("test")
val1.textContent = 'HI'

const var2 = document.getElementById('fall')
var2.textContent = 'always'

// document.getElementById('fall').innerHTML = 'Never'

// Through ID intro and also using .innerHTML property 
//.innerHTML is a property which makes easier to access content of HTML Element and change it.
// Content: (Hello my name is pedro)  to (Hello My name is Nikesh)
document.getElementById('intro').innerHTML = 'Hello my name is Nikesh Dhimal'



// Count the numer of H3 tag inside a div = division using getElementById & getElementByTag

const change1 = document.getElementById('divisions')
const check = change1.getElementsByTagName('p')
let numb = check.length



