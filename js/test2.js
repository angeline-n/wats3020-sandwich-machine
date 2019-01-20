/* JavaScript for WATS 3020 Sandwich Machine Assignment */

// Get what type of bread the customer wants using prompt
let bread = prompt('What kind of bread (e.g.white, wheat, flat) would you like?');

// Get what types (if any) meats the customer wants using prompt
let meats = prompt('What kind of meat would you like? Separate meats with a comma if you would like more than one (e.g. bacon, turkey)? If you would like none, enter "0".');

// Tell customer about special
alert('We have a Buy 2 Toppings, Get an Additional Topping for Free special!');

// Give customer instructions
alert('First, list the toppings you would like to purchase. We will ask you to input your free toppings next.')

// Get what types (if any) toppings the customer wants using prompt
let toppings = prompt('What kind of toppings would you like to purchase? Separate toppings with a comma (e.g. cheddar cheese, lettuce, tomatoes). If you would like none, enter "0".')

// Change string input into array by splitting at comma
let toppingArray = toppings.split(',');


//Topping Special Deal
let moreToppingsArray = [];

if (toppingArray.length !== 0 && toppingArray.length !== 1){ // if qualify for the special
	specialQuantity = Math.floor(toppingArray.length / 2); // calculate how many free toppings they get
	toppingSpecial = prompt('You qualify for our Buy 2 Toppings, Get 1 Free Special. Would you like to take part in the special?');
	if (toppingSpecial === 'yes' || toppingSpecial === 'Yes' || toppingSpecial === 'YES'){ 
        let i = 1;
        let b = specialQuantity;
		while (i <= specialQuantity){
			moreToppingsArray.push(prompt('You get ' + b + ' more free topping(s). Please enter one topping you would like to add. If you do not want another topping, please enter "0".'));
            i++;
            b--;
        } // end while
        // Check if any free toppings were not wanted
        let f = 0;
        while (f < specialQuantity){
            if (moreToppingsArray[moreToppingsArray.length-1] === '0'){
                moreToppingsArray.pop();
            }
            f++;
        } //  end while
	}
} else { // if they don't immediately qualify for the special
    toppingSpecial = prompt('Your order does not qualify for our special. Would you like to order additional toppings?');
    if (toppingSpecial === 'yes' || toppingSpecial === 'Yes' || toppingSpecial === 'YES'){
        moreToppings = prompt('What topping(s) would you like to add? Please separate toppings with a comma.');
        moreToppingsArray = moreToppings.split(',');
        specialQuantity = Math.floor((moreToppingsArray.length / 2));
        if (toppings==='0'){ // if they had decided on no toppings at first
            if (moreToppingsArray.length === 1){ // if they only entered one topping after being prompted
                toppingSpecial = prompt('You only entered one topping. You need to purchase at least two toppings to take part in our special. Would you like to add toppings?');
                if (toppingSpecial === 'yes' || toppingSpecial === 'Yes' || toppingSpecial === 'YES'){
                    moreToppings = prompt('What other topping(s) would you like to purchase? Please separate toppings with a comma.');
                    moreToppingsArray.push(moreToppings.split(','));
                        if (moreToppingsArray.length === 2){ // if the customer entered only one more topping making the total two
                            moreToppingsArray.push(prompt('What would you like for your free topping?'));
                            toppingArray.push(moreToppingsArray[0]); // move the first 2 toppings into the paid array
                            toppingArray.push(moreToppingsArray[1]);
                            toppingArray.shift(); // delete the '0' that was first inputed
                            moreToppingsArray.shift(); // delete the toppings we placed into the paid array
                            moreToppingsArray.shift();
                        } else{ // the customer added two or more toppings
                            specialQuantity =  Math.floor(moreToppingsArray.length / 2);
                            let i = 1;
                            let b = specialQuantity;
                            while (i <= specialQuantity){
                                moreToppingsArray.push(prompt('You get ' + b + ' more free topping(s). Please enter one topping you would like to add. If you do not want another topping, please enter "0".'));
                                i++;
                                b--;
                            }
                            let c = 0;
                            let d = moreToppingsArray.length - specialQuantity; // number of toppings that are not free
                            while (c < d){ 
                                toppingArray.push(moreToppingsArray[0]);
                                moreToppingsArray.shift();
                                c++;
                            } // end while
                             // Check if any free toppings were not wanted
                            let f = 0;
                            while (f < specialQuantity){
                                if (moreToppingsArray[moreToppingsArray.length-1] === '0'){
                                    moreToppingsArray.pop();
                                }
                                f++;
                            } // end while
                        }; // end if-else for 0 toppings first time and 1 topping second time
                } // end if entered 0 toppings first time and 1 topping second time and wants the special
            } else{ // if they entered 0 the first time and more than 1 the second time
                specialQuantity = Math.floor(moreToppingsArray.length / 2); 
                let i = 1;
                let b = specialQuantity;
		        while (i <= specialQuantity){
			        moreToppingsArray.push(prompt('You get ' + b + ' more free topping(s). Please enter one topping you would like to add. If you do not want another topping, please enter "0".'));
                    i++;
                    b--;
                } //end while
                // Check if any free toppings were not wanted
                let f = 0;
                while (f < specialQuantity){
                    if (moreToppingsArray[moreToppingsArray.length-1] === '0'){
                        moreToppingsArray.pop();
                    }
                    f++;
                } // end while
            }; // end if-else what happens if first time is 0
        } else { // if they only entered one topping at first
            if (moreToppingsArray.length === 1){ // if the customer entered only one more topping making the total two
                moreToppingsArray.push(prompt('What would you like for your free topping?'));
                toppingArray.push(moreToppingsArray[0]); // move the first topping into the paid array
                moreToppingsArray.shift(); // delete the topping we placed into the paid array
            } else{ // the customer added two or more toppings
                specialQuantity =  Math.floor((moreToppingsArray.length + 1) / 2);
                let i = 1;
                let b = specialQuantity;
                while (i <= specialQuantity){
                    moreToppingsArray.push(prompt('You get ' + b + ' more free topping(s). Please enter one topping you would like to add. If you do not want another topping, please enter "0".'));
                    i++;
                    b--;
                }
                let c = 0;
                let d = moreToppingsArray.length - specialQuantity; // number of toppings in moreToppingsArray that are not free
                while (c < d){ 
                    toppingArray.push(moreToppingsArray[0]);
                    moreToppingsArray.shift();
                    c++;
                }
                // Check if any free toppings were not wanted
                let f = 0;
                while (f < specialQuantity){
                    if (moreToppingsArray[moreToppingsArray.length-1] === '0'){
                        moreToppingsArray.pop();
                    }
                    f++;
                }
            }; 
        } 
    };
}

if (moreToppingsArray.length === 0){
    freeToppings = 'You order did not take advantage of our Buy 2 Toppings, Get 1 Free special.';
} else{
    freeToppings = moreToppingsArray;
}
                  
// Get what types (if any) condiments the customer wants using prompt
let condiments = prompt('What kind of condiments would you like? Separate condiments with a comma (e.g. mayo, ketchup). If you would like none, enter "0".');

// Change the other string inputs into arrays by splitting at comma
let meatArray = meats.split(',');
let condimentArray = condiments.split(',');

// Prices of sandwich components
let prices = {
    sandwich: 5, // Base price for a sandwich is $5, includes bread
    meat: 1, // Each kind of meat on a sandwich costs $1
    topping: 0.5, // Each topping costs $0.50
    condiment: 0.25 // Each condiment costs $0.25
};

// Calculate cost of meat
if (meats==='0'){
    meatCost = 0; // if input was 0, then customer wanted no meat and the price would be $0
    meats = 'none';
} else {
    meatCost = meatArray.length * prices.meat; // otherwise the length of the array is the number of meats; that multiplied by the price is the cost
}; // while it currently costs 1 dollar and thus would be equal to the length, the price may change

// Find cost of toppings 
if (toppings==='0' && moreToppingsArray.length === 0){ // if didn't want toppings at first and after being asked if certain
    toppingCost = 0; 
    toppingArray = 'none';
} else {
    toppingCost = toppingArray.length * prices.topping;
};

// Find cost of condiments in same way as the cost of meat
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
    <p><b>Toppings:</b> ${toppingArray}</p>
    <p><b>Free Toppings:</b> ${freeToppings}</p>
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