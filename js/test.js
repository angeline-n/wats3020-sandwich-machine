/* JavaScript for WATS 3020 Sandwich Machine Assignment */

// Get what type of bread the customer wants using prompt
let bread = prompt('What kind of bread (e.g.white, wheat, flat) would you like?');

// Get what types (if any) meats the customer wants using prompt
let meats = prompt('What kind of meat would you like? Separate meats with a comma if you would like more than one (e.g. bacon, turkey)? If you would like none, enter "0".');

// Get what types (if any) toppings the customer wants using prompt
let toppings = prompt('What kind of toppings would you like? Separate toppings with a comma (e.g. cheddar cheese, lettuce, tomatoes). If you would like none, enter "0".')

// Change string input into array by splitting at comma
let toppingArray = toppings.split(',');

// Topping special deal: get one free topping for every two
let moreToppings = []; 

if (toppingArray.length !== 0 || toppingArray.length !== 1){ // if qualify for the special
	specialQuantity = Math.floor(toppingArray.length / 2); // calculate how many free toppings they get
	toppingSpecial = prompt('You qualify for our Buy 2 Toppings, Get 1 Free Special. Would you like to take part in the special?');
	if (toppingSpecial === 'yes' || toppingSpecial === 'Yes' || toppingSpecial === 'YES'){ 
        let i = 1;
        let b = specialQuantity;
		while (i <= specialQuantity){
			moreToppings.push(prompt('You get ' + b + ' more free topping(s). Please enter a topping you would like to add.'));
            i++;
            b--;
		}
	}
} else { // if they don't immediately qualify for the special
    toppingSpecial = prompt('We have a Buy 2 Toppings, Get 1 Free Special. Would you like to order additional toppings?');
    if (toppingSpecial === 'yes' || toppingSpecial === 'Yes' || toppingSpecial === 'YES'){
        moreToppings = prompt('What topping(s) would you like to add? Please separate toppings with a comma.');
        specialQuantity = Math.floor((moreToppings.length / 2));
        if (toppingArray.includes('0'){ // if they had decided on no toppings at first
            if (moreToppings.length === 1){ // if they only entered one topping after being prompted
                toppingSpecial = prompt('You only entered one topping. You need at least two toppings to take part in our special. Would you like to add toppings?'));
                if (toppingSpecial === 'yes' || toppingSpecial === 'Yes' || toppingSpecial === 'YES'){
                    moreToppings.push(prompt('What other topping(s) would you like to add? Please separate toppings with a comma.'));
                   
                        /*toppingArray.push(moreToppings[1]); // takes the first element in moreToppings and adds it to the end of toppingArray
                        moreToppings.shift(); // deletes the first element in moreToppings
                        */
                    }
                }    
            } else {
                /* TODO: Figure out what to do if the customer:
                 *puts in 3 toppings the first time and doesn't want additional toppings and instead would like their third one free
                 *puts in 6 toppings the first time and doesn't want additional toppings and instead would like two of them for free
                 *puts in 1 topping the first time and 5 the second time (need to move 3 into the paid array)
                 *accidentally puts more than one topping per free topping prompt
            } */

        } else{
            /*
            let i = 1;
            let b = specialQuantity;
            while (i <= specialQuantity){
                freeToppings = prompt('You get ' + b + ' more free toppings(s). What topping would you like to add?');
                moreToppings.push(freeToppings);
                i++;
                b--;
            }
        }; NEED TO FINISH THIS BIT */
    }
}

let moreToppingsOrder = moreToppings.join(', ')
if (moreToppings.length === 0){
    moreToppingsOrder = "Your order did not take advantage of our Buy Two Toppings, Get One Free special";
}

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
let condimentArray = condiments.split(',');

if (meats==='0'){
    meatCost = 0; // if input was 0, then customer wanted no meat and the price would be $0
    meats = 'none';
} else {
    meatCost = meatArray.length * prices.meat; // otherwise the length of the array is the number of meats; that multiplied by the price is the cost
}; // while it currently costs 1 dollar and thus would be equal to the length, the price may change

// Find toppingCost in same way as meatCost
if (toppings==='0'){
    toppingCost = 0; 
    toppings = 'none';
} else {
    toppingCost = toppingArray.length * prices.topping;
};

// Find condimentCost in same way as meatCost and toppingCost
if (condiments==='0'){
    condimentCost = 0; 
    condiments = 'none';
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

// Round all prices to the hundredths
let orderTaxRounded = Math.round(orderTax * 100)/100;
let totalPriceRounded = Math.round(totalPrice*100)/100;
let tenPercentRounded = Math.round(tenPercent*100)/100;
let fifteenPercentRounded = Math.round(fifteenPercent*100)/100;
let twentyPercentRounded = Math.round(twentyPercent*100)/100;

// Make all prices show hundreths place (e.g. $10.10 instead of $10.1)
let sandwichCostCents = prices.sandwich.toFixed(2);
let meatCostCents = meatCost.toFixed(2);
let toppingCostCents = toppingCost.toFixed(2);
let condimentCostCents = condimentCost.toFixed(2);
let subtotalCents = subtotal.toFixed(2);
let orderTaxRoundedCents = orderTaxRounded.toFixed(2);
let totalPriceRoundedCents = totalPriceRounded.toFixed(2);
let tenPercentRoundedCents = tenPercentRounded.toFixed(2);
let fifteenPercentRoundedCents = fifteenPercentRounded.toFixed(2);
let twentyPercentRoundedCents = twentyPercentRounded.toFixed(2);

let receiptTemplate = `
    <p><b>SANDWICH ORDER</b></p>
    <p><b>Bread:</b> ${bread}</p>
    <p><b>Meat:</b> ${meats}</p>
    <p><b>Toppings:</b> ${toppings}</p>
    <p><b>Free Toppings:</b> ${moreToppingsOrder}</p>
    <p><b>Condiments:</b> ${condiments}</p>
    <p>---------------------</p>
    <p class="text-right"><b>Sandwich:</b> $${sandwichCostCents}</p>
    <p class="text-right"><b>Meat:</b> $${meatCostCents}</p>
    <p class="text-right"><b>Toppings:</b> $${toppingCostCents}</p>
    <p class="text-right"><b>Condiments:</b> $${condimentCostCents}</p>
    <p class="text-right">--------</p>
    <p class="text-right"><b>Subtotal:</b> $${subtotalCents}</p>
    <p class="text-right"><b>Tax:</b> $${orderTaxRoundedCents}</p>
    <p class="text-right">--------</p>
    <p class="text-right"><b>Total:</b> $${totalPriceRoundedCents}</p>
    <p>---------------------</p>
    <p><b>Suggested Tips:</b></p>
    <p class="text-right"><b>Total with 10% Tip:</b> $${tenPercentRoundedCents}</p>
    <p class="text-right"><b>Total with 15% Tip:</b> $${fifteenPercentRoundedCents}</p>
    <p class="text-right"><b>Total with 20% Tip:</b> $${twentyPercentRoundedCents}</p>
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