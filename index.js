// EX 1
// Ask the user for 3 cards. If the sum equals 21 print BLACKJACK! If the sum is greater than 21 print BUST! If the sum is less than 21 print “The total is [TOTAL]”
var card1 = parseInt(prompt("Choose your first card"));
var card2 = parseInt(prompt("Choose your second card"));
var card3 = parseInt(prompt("Choose your third card"));
var total = parseInt(card1 + card2 + card3);

if(total === 21){
    alert("BLACKJACK")
}
else if(total < 21){
    alert("Your total is: " + total)
}
else if(total > 21){
    alert("BUST")
}
else{
    alert("ERROR")
}

// EX 2
// Ask the user to enter their grade. Print their letter grade:
// A 90 - 100 B 80 - 89 C 70 - 79 D 60 - 69 F 0 - 59
// f it's negative or over 100 print an error.

var grade = prompt("Enter your grade.");

if(grade <= 100 && grade >= 90){
    alert("Your grade is A!")
}
else if(grade <= 89 && grade >= 80){
    alert("Your grade is B!")
}
else if(grade <= 79 && grade >= 70){
    alert("Your grade is C!")
}
else if(grade <= 69 && grade >=60){
    alert("Your grade is D!")
}
else if(grade <= 59 && grade >=0){
    alert("Your grade is A!")
}
else{
    alert("ERROR")
}

// Ex 3
// Ask the user to enter their age. Check if they entered a value between 0 and 125. If valid, print "REAL AGE". If invalid print “NOT A REAL AGE!!!”
var age = prompt("Enter your age.");

if(age >= 0 && age <= 125){
    alert("REAL AGE")
}
else{
    alert("NOT A REAL AGE")
}