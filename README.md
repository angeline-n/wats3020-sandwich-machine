# WATS 3020 Sandwich Machine Assignment

This project is meant to exercise working with different Data Types in
JavaScript and using various techniques to combine text or convert data
between types. You will be using a variety of techniques to take a sandwich
order and produce a receipt for that order.

In order to complete this assignment, it will be useful to read the section on
[Data Types and Structures](https://suwebdev.github.io/WATS-3020-gitbook/data-types/)
from _A Practical Introduction to JavaScript_.

You may find these additional resources helpful for completing this project:

* [Removing white space from Strings with `trim()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/Trim)
* [Use `toFixed()` to make numbers have two decimal places](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed)
* [Using `split()` to break Strings into Arrays](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split)

## Basic Requirements

In general, you must complete all of the tasks spelled out in the `TODO` notes
in the file `js/main.js` within this repository. You will write your JS code
in that file, completing every task listed.

* Prompt the user for information according to the tasks defined in `main.js`.
* Process the input from the user to create useful Arrays, Strings, and other variables.
* Reference the included `prices` Object in `main.js` to determine the price of the sandwich
* Insert the order details and calculated price into the provided HTML structure in `index.html`.

## Stretch Goals

If the Basic Requirements are easy enough to accomplish, then you are encouraged
to attempt some more complex tasks, too. These are not spelled out in `main.js`,
so you will have to figure out how to get them into your code on your own.

* Implement some kind of special deal logic that provides a discount to the user. (First two toppings at X price; 20% discount on toppings if you order more than three toppings,  etc.)
* Implement a more complex discount that prompts the user with something like: "You've added two toppings, so you qualify for a free third topping! What would you like to add to your sandwich?" or "Would you like to double your meat today?" Be sure to include that additional information in your output of the order and adjust your price according to whatever your discount concept is.
* Add a line across the bottom of the receipt to say "Suggested Tips" and then calculate the tips for 10%, 15%, and 20% and provide those amounts for the convenience of the customer.


