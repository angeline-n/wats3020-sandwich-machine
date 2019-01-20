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


// Get what types (if any) condiments the customer wants using prompt
let condiments = prompt('What kind of condiments would you like? Separate condiments with a comma (e.g. mayo, ketchup). If you would like none, enter "0".');

let prices = {
    sandwich: 5, // Base price for a sandwich is $5, includes bread
    meat: 1, // Each kind of meat on a sandwich costs $1
    topping: 0.5, // Each topping costs $0.50
    condiment: 0.25 // Each condiment costs $0.25
};

// Change the other string inputs into arrays by splitting at comma
let meatArray = meats.split(',');
let condimentArray = condiments.split(',');


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
		}
	}
} else { // if they don't immediately qualify for the special
    toppingSpecial = prompt('Your order does not qualify for our special. Would you like to order additional toppings?');
    if (toppingSpecial === 'yes' || toppingSpecial === 'Yes' || toppingSpecial === 'YES'){
        moreToppings = prompt('What topping(s) would you like to add? Please separate toppings with a comma.');
        moreToppingsArray = moreToppings.split(',');
        specialQuantity = Math.floor((moreToppingsArray.length / 2));
        if (toppings==='0'){ // if they had decided on no toppings at first
            if (moreToppingsArray.length === 1){ // if they only entered one topping after being prompted
                toppingSpecial = prompt('You only entered one topping. You need to purchase at least two toppings to take part in our special. Would you like to add toppings?'));
                if (toppingSpecial === 'yes' || toppingSpecial === 'Yes' || toppingSpecial === 'YES'){
                    moreToppings = prompt('What other topping(s) would you like to purchase? Please separate toppings with a comma.'));
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
                            
                            //figure out how many to push into toppingArray and delete from moreToppings
                        };
                      
                  
                //    }
              //  }    
           // } else { 
                /* TODO: Figure out what to do if the customer:
                 *puts in 3 toppings the first time and doesn't want additional toppings and instead would like their third one free
                 *puts in 6 toppings the first time and doesn't want additional toppings and instead would like two of them for free
                 *puts in 1 topping the first time and 5 the second time (need to move 3 into the paid array)
                 *accidentally puts more than one topping per free topping prompt
            } */

      //  } else{
            /*
            let i = 1;
            let b = specialQuantity;
            while (i <= specialQuantity){
                freeToppings = prompt('You get ' + b + ' more free toppings(s). What topping would you like to add?');
                moreToppings.push(freeToppings);
                i++;
                b--;
            }



// Calculate cost of meat
if (meats==='0'){
    meatCost = 0; // if input was 0, then customer wanted no meat and the price would be $0
    meats = 'none';
} else {
    meatCost = meatArray.length * prices.meat; // otherwise the length of the array is the number of meats; that multiplied by the price is the cost
}; // while it currently costs 1 dollar and thus would be equal to the length, the price may change

// Find cost of toppings 
if (toppings==='0' && moreToppings===undefined){ // if didn't want toppings at first and after being asked if certain
    toppingCost = 0; 
    toppings = 'none';
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
