/* JavaScript for WATS 3020 Sandwich Machine Assignment */

// Get what type of bread the customer wants using prompt
let bread = prompt('What kind of bread (e.g.white, wheat, flat) would you like?');

// Get what types (if any) meats the customer wants using prompt
let meats = prompt('What kind of meat would you like? Separate meats with a comma if you would like more than one (e.g. bacon, turkey)? If you would like none, enter "0".');

// Get what types (if any) toppings the customer wants using prompt
let toppings = prompt('What kind of toppings would you like? Separate toppings with a comma (e.g. cheddar cheese, lettuce, tomatoes). If you would like none, enter "0".');

// Get what types (if any) condiments the customer wants using prompt
let condiments = prompt('What kind of condiments would you like? Separate condiments with a comma (e.g. mayo, ketchup). If you would like none, enter "0".');

let prices = {
    sandwich: 5, // Base price for a sandwich is $5, includes bread
    meat: 1, // Each kind of meat on a sandwich costs $1
    topping: 0.5, // Each topping costs $0.50
    condiment: 0.25 // Each condiment costs $0.25
};

// Change string inputs into arrays by splitting at comma
let meatArray = meats.split(',');
let toppingArray = toppings.split(',');
let condimentArray = condiments.split(',');

if (meats==='0'){
    meatCost = 0; // if input was 0, then customer wanted no meat and the price would be $0
} else {
    meatCost = meatArray.length * prices.meat; // otherwise the length of the array is the number of meats; that multiplied by the price is the cost
}; // while it currently costs 1 dollar and thus would be equal to the length, the price may change

// Find toppingCost in same way as meatCost
if (toppings==='0'){
    toppingCost = 0; 
} else {
    toppingCost = toppingArray.length * prices.topping;
};

// Find condimentCost in same way as meatCost and toppingCost
if (condiments==='0'){
    condimentCost = 0; 
} else {
    condimentCost = condimentArray.length * prices.condiment;
};

// Combine the costs of each part of the sandwich to get the subtotal.
let subtotal = prices.sandwich + meatCost + toppingCost + condimentCost;


let waStateTaxRate = 0.065;
let orderTax = subtotal * waStateTaxRate; // Calculate the tax owed using the waStateTaxRate.

// Calculate `totalPrice` by adding `subtotal` and `orderTax`.
let totalPrice = subtotal + orderTax;

// Calculate totals for 10%, 15%, and 20% tips
let tenPercent = totalPrice * 1.10;
let fifteenPercent = totalPrice * 1.15;
let twentyPercent = totalPrice * 1.20;


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
    <p>---------------------</p>
    <p>Suggested Tips:</p>
    <p class="text-right">Total with 10% Tip: $${tenPercent}
    <p class="text-right">Total with 15% Tip: $${fifteenPercent}
    <p class="text-right">Total with 20% Tip: $${twentyPercent}
`;

///////////////////////////////////////////////////////////////////////
// Do not edit below this line unless you are doing something fancy!
//////////////////////////////////////////////////////////////////////
let receiptText = document.querySelector("#receipt-text");
receiptText.innerHTML = receiptTemplate;

/*
TODO Implement some kind of special deal logic that provides a discount to the user. (First two toppings at X price; 20% discount on toppings if you order more than three toppings,  etc.)
TODO Implement a more complex discount that prompts the user with something like: "You've added two toppings, so you qualify for a free third topping! What would you like to add to your sandwich?" or "Would you like to double your meat today?" Be sure to include that additional information in your output of the order and adjust your price according to whatever your discount concept is.
*/