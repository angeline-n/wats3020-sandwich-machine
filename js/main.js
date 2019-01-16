/* JavaScript for WATS 3020 Sandwich Machine Assignment */


let bread = prompt('What kind of bread (e.g.white, wheat, flat) would you like?');


let meats = prompt('What kind of meat would you like? Separate meats with a comma if you would like more than one (e.g. bacon, turkey)? If you would like none, enter "0".');


let toppings = prompt('What kind of toppings would you like? Separate toppings with a comma (e.g. cheddar cheese, lettuce, tomatoes). If you would like none, enter "0".')


let condiments = prompt('What kind of condiments would you like? Separate condiments with a comma (e.g. mayo, ketchup). If you would like none, enter "0".')


let prices = {
    sandwich: 5, // Base price for a sandwich is $5, includes bread
    meat: 1, // Each kind of meat on a sandwich costs $1
    topping: 0.5, // Each topping costs $0.50
    condiment: 0.25 // Each condiment costs $0.25
};

let meatArray = meats.split(',');
let toppingArray = toppings.split(',');
let condimentArray = condiments.split(',');

if (meats==='0'){
    meatCost = 0;
} else {
    meatCost = meatArray.length * prices.meat; // while it currently costs 1 dollar and thus would be equal to the length, the price may change
};

if (toppings==='0'){
    toppingCost = 0;
} else {
    toppingCost = toppingArray.length * prices.topping;
};

if (condiments==='0'){
    condimentCost = 0;
} else {
    condimentCost = condimentArray.length * prices.condiment;
};

// Combine the costs of each part of the sandwich to get the subtotal.
let subtotal = prices.sandwich + meatCost + toppingCost + condimentCost;

// Calculate the tax owed using the waStateTaxRate.
let waStateTaxRate = 0.065;
let orderTax = subtotal * waStateTaxRate;

// Calculate `totalPrice` by adding `subtotal` and `orderTax`.
let totalPrice = subtotal + orderTax;


let receiptTemplate = `
    <p>SANDWICH ORDER</p>
    <p>Bread: ${bread}</p>
    <p>Meat: ${meats}</p>
    <p>Toppings: ${toppings}</p>
    <p>Condiments: ${condiments}</p>
    <p>---------------------</p>
    <p class="text-right">Sandwich: $${prices.sandwich}</p>
    <p class="text-right">Meat: $${meatCost}</p>
    <p class="text-right">Toppings: $${toppingCost}</p>
    <p class="text-right">Condiments: $${condimentCost}</p>
    <p class="text-right">--------</p>
    <p class="text-right">Subtotal: $${subtotal}</p>
    <p class="text-right">Tax: $${orderTax}</p>
    <p class="text-right">--------</p>
    <p class="text-right">Total: $${totalPrice}</p>
`

///////////////////////////////////////////////////////////////////////
// Do not edit below this line unless you are doing something fancy!
//////////////////////////////////////////////////////////////////////
let receiptText = document.querySelector("#receipt-text");
receiptText.innerHTML = receiptTemplate;
