// Q7: Use a loop to display the numbers 0 through 5, each in a separate alert window.
// for (let i = 0; i <= 5; i++) {
//   alert(i);
// }

// Q8: Use a loop to display the numbers 0 through 5 in a single alert window
// const num = [];
// for (let i = 0; i <= 5; i++) {
//   num.push(i);
// }
// alert(num);

//Q9: Use a loop to display the numbers in the range 0…20 that are multiples of 3.
// const num = [];
// for (i = 0; i <= 20; i++) {
//   if (i % 3 == 0) {
//     num.push(i);
//   }
// }
// alert(num);

// Q10: Prompt the user for a number in the range 0…100.  If the number is out of range, display an error message and prompt again until a valid number is entered.  Assume the user enters a number each time
// let num = prompt("Enter a number from 0 to 100");
// while (num > 100 || num < 0) {
//   alert("Wrong number, try again");
//   num = prompt("Enter a number from 0 to 100");
// }

// if (num <= 100) {
//   alert(num);
// }

// Q11: Prompt for an integer, then display the sum of the integers from 0 through the number entered.  For example, if you enter 10, then display 55 which is the sum of   0 + 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10
// let num = parseInt(prompt("Enter a valid number"));
// let sum = 0;
// for (i = num; i != 0; i--) {
//   sum = sum + i;
// }
// alert(sum);
