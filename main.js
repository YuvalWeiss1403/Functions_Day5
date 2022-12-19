
// Write a JavaScript function to print (console.log()) the “Hello World” message
function print(){
    console.log("Hello World");
}

// Write a function that returns the square of a number
function squaredNumber(number){
    return Math.sqrt(squaredNumber);
}

// Write a function to convert Celsius to Fahrenheit and return the conversion
function toFahrenheit(celsius){
    let cToFahr = celsius * 9 / 5 + 32;
    return cToFahr;
 }

// Write a function to print a random number. Check out Math.random()
function printRandomNumber(){
    console.log(Math.random());
}

// Write a function named tellFortune that:
// takes 4 arguments: number of children, partner's name, geographic location, job title.
// Alert your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
function tellFortune(numberOfChildren, partnersName, geographicLocation, jobTitle){
    alert(`You will be a ${jobTitle} in ${geographicLocation}, and married to ${partnersName} with ${numberOfChildren} kids.`);
}

// Call that function 3 times with 3 different values for the arguments.
tellFortune(5,"Alon","Tel Aviv","Programmer");
tellFortune(2,"Elad","Petach Tikva","Dancer");
tellFortune(3,"Matan","Kfar saba","manicurist");

//Write a function that takes in a 7 digits number and returns the number as a string with commas as thousand separators. 
//For example, the number 1234567 should be returned as "1,234,567"
function numberToCommas(noCommasNumber){
    const withCommasNumber = noCommasNumber.toLocaleString();
    return withCommasNumber;
}

let withCommasNumber = numberToCommas(1234567);
console.log(withCommasNumber);


// Write a function that takes in a string and returns the string with all vowels removed. 
//For example, the string "Hello, World!" should be returned as "Hll, Wrd!".
function noVowels(someString){
    const noVowels = someString.replace(/[aeiou]/gi, '');
    return noVowels
}

let someString = "Hello, World!";
console.log(noVowels(someString)); //Hll, Wrld!

// Write a function that takes in a number and returns the number rounded to the nearest integer.
// For example, the number 4.6 should be returned as 5, and the number 4.4 should be returned as 4.
// (check out Math metods and properties)
function roundedInteger(notRoundNumber){
    return Math.round(notRoundNumber);
}
console.log(roundedInteger(4.6)); //5
console.log(roundedInteger(4.4)); //4

// Write a function that takes in a string and returns a new string with the first letter of each word capitalized. 
//For example, the string "hello, world!" should be returned as "Hello, World!".
function firstLetterCap(someString){
    const arr = someString.split(" ");
    for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    
    }
    const str2 = arr.join(" ");
    console.log(str2);    
}

console.log(firstLetterCap("hello, world"));

// Write a function that:
// Save the hostname of the current URL as a variable (check location.hostname)  
// Alert the sentence: “Hello, your hostname is _(your variable)_ . Welcome!”
function saveHostName(){
    const myHostName =location.hostname;
    alert(`Hello, your hostname is ${myHostName} . Welcome!`);
}

saveHostName();

