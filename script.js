// 1st :  (Ans) Even Or Odd Number Print
var number = 22
if (number % 2 === 0) {
    console.log("Event")
} 
else {
    console.log("Odd")
}

// 2nd: program that checks if a number is positive, negative, or zero.
var number = 0
if (number > 0) {
    console.log("positive")
}
var number = 0
if (number < 0) {
    console.log("Negative")
}
else {
    console.log("Zero")
}

// 2nd: Write a program that calculets grade based score

function getGrade(score) {
    if (score >= 90 && score <= 100) {
        console.log("A");
    } else if (score >= 80 && score <= 89) {
        console.log("B");
    } else if (score >= 70 && score <= 79) {
        console.log("C");
    } else if (score >= 60 && score <= 69) {
        console.log("D");
    } else {
        console.log("F");
    }
}
getGrade(50);

alert ("Hello");