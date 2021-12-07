// HINT: You can delete this console.log after you no longer need it!
console.log('JavaScript code has loaded!')

// First, tell us your name
let yourName = "Josiah Williams" // HINT: Replace this with your own name!

// We'll use these variables to track the counts of each cookie type
let gb = 0      // Gingerbread
let cc = 0      // Chocolate Chip
let sugar = 0   // Sugar Sprinkle
let total = 0

const plusBtngb = document.querySelector('#add-gb')
const minusBtngb = document.querySelector('#minus-gb')
const productQuantitygb = document.querySelector('#qty-gb')

const plusBtncc = document.querySelector('#add-cc')
const minusBtncc = document.querySelector('#minus-cc')
const productQuantitycc = document.querySelector('#qty-cc')

const PlusBtnsugar = document.querySelector('#add-sugar')
const minusBtnsugar = document.querySelector('#minus-sugar')
const ProductQuantitysugar = document.querySelector('#qty-sugar')

const totalelement = document.querySelector('#qty-total')
totalelement.textContent = total




// Code to update name display 
document.getElementById('credit').textContent = `Created by ${yourName}`



// Event listener for clicks on the "+" button for Gingerbread cookies
plusBtngb.addEventListener('click', function() {
    // HINT: You can delete this console.log after you no longer need it!
    gb++
    productQuantitygb.textContent = gb
    total = gb + cc + sugar 
    totalelement.textContent = total

    // TODO: Write the code to be run when the "+" button for "Gingerbread" is clicked
})

plusBtncc.addEventListener('click', function() {

    cc++
    productQuantitycc.textContent = cc
    total = gb + cc + sugar 
    totalelement.textContent = total
})

PlusBtnsugar.addEventListener('click',function() {
    sugar++
    ProductQuantitysugar.textContent = sugar
    total = gb + cc + sugar 
    totalelement.textContent = total
 
})

minusBtngb.addEventListener('click', function() {
    if (gb > 0) {
        gb--
    }
    
    productQuantitygb.textContent = gb
    total = gb + cc + sugar 
    totalelement.textContent = total

})

minusBtncc.addEventListener('click', function() {
    if (cc > 0) {
        cc--
    }

    productQuantitycc.textContent = cc
    total = gb + cc + sugar 
    totalelement.textContent = total

})

minusBtnsugar.addEventListener('click', function() {
    if (sugar > 0) {
        sugar--
    }

    ProductQuantitysugar.textContent = sugar
    total = gb + cc + sugar 
    totalelement.textContent = total

})

// TODO: Hook up event listeners for the rest of the buttons