///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/


//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
    {
        name: 'pizza', 
        price: 9.99
    }, 
    {
        name: 'pasta', 
        price: 8.99
    }, 
    {
        name: 'salad', 
        price: 7.99
    }
]

//CODE HERE

const summedPrice = cart.reduce((accumulator, currObject) => accumulator + currObject.price, 0)
//console.log(summedPrice)


//////////////////PROBLEM 2////////////////////
/*  
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments. 

    Inside the function, calculate the tax 
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number. 

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/

//CODE HERE
let calcFinalPrice = (cartTotal, couponValue, tax) => (cartTotal * (1 + tax)) - couponValue
//console.log("The final number is:", calcFinalPrice(100, 13, .06))



//////////////////PROBLEM 3////////////////////
/*  
    In this problem, you'll create a model for 
    a customer object as well as an example
    object. 

    Plan out a customer object for the cart page.
    Think about the information that a 
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types. 

    Your object should have at least 4 properties. 
*/

/*
    TEXT ANSWER HERE
My customer object will have customer's name, phone number, payment option, and billing address for the payment.
I chose these properties because of the following:
    
name: the cart page of the restaurant's website/app will show the name of the customer on the cart page as well as the restaurant can print out the bill under the customer's name.
    The datatype of name will be string, because the name will represented as a text.

    phoneNumber: The restaurant will use the customer's phone number to send a text confirmation of the order if the customer desires.
    The datatype of phoneNumber will be string since the digits will be numeric values and it could contain dashes, plus sign and parenthesis.

    paymentOption: The payment option will allow the customer to select the method of payment such as debit card or credit card.
    The datatype of paymentOption will be an array of two strings because it will run a if condition and match one of the string literal values i.e, 'debit' and 'credit'.

    billingAddress: The billing address will be used to verify the information associated with the selected method of payment.
    The datatype of billingAddress will be an object containing sub-properties which will group related address information together since the address will consist of customer's street name, city, state, and zip code.


*/

/*
    Now, create a customer object following your own
    guidelines.
*/

//CODE HERE
let customer = {
    name: "Roshan Neupane",
    phoneNumber: "2134569870",
    paymentOption: ["debit", "credit"],
    billingAddress: {
        street: "1234 some Avenue",
        city: "some city",
        state: "some state",
        zipCode: "12345"
    }
}
