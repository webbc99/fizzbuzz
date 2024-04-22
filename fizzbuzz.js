// Numbers 1 to 100
// For each number, print the number and
// if the number is divisible by 3, you need to say Fizz
// if the number is divisible by 5, you say Buzz
// if it is divisible by 3 AND 5, you say FizzBuzz
// use console.log(); to say the outputs

// Extra credit - allow the user to specify the start and end numbers

// For loop
// an If statement that says - when it's divisible by 3 do X etc.

function fizzBuzz(start, end) {
    console.log("Starting with " + start + " and ending with " + end + ".");
    for(i = start; i <= end; i++) {
        if(i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz");
        } else if(i % 3 === 0) {
            console.log("Fizz");
        } else if(i % 5 === 0) {
            console.log("Buzz");
        } else {
            console.log(i);
        }
    }
}

function fizzBuzz(start, end) {
    console.log("Starting with " + start + " and ending with " + end + ".");
    for(i = start; i <= end; i++) {
        output = ""
        if(i % 3 === 0) {
            output += "Fizz";
        }
        if(i % 5 === 0) {
            output += "Buzz"
        }
        console.log(i + " " + output)
    }
}