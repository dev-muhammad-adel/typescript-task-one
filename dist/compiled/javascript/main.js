"use strict";
// //task 2
// function calculate(numOne: number, numTwo: number): number {
//   return numOne + numTwo;
// }
// console.log(calculate(10, 20)); // 30
// console.log(calculate("10", "20")); // We Don't Need This To Work
// console.log(calculate(+true, +true)); // 2
// 2 done
// task 3
// function printInfo(
//   valueOne: string | number,
//   valueTwo: string | number
// ): string {
//   return `Value One Is ${valueOne}, Value Two Is ${valueTwo}`;
// }
// console.log(printInfo(10, 20)); // Value One Is 10, Value Two Is 20
// console.log(printInfo("10", "20")); // Value One Is "10", Value Two Is "20"
// console.log(printInfo(true, [1, 2, 3])); // We Don't Need This To Work
// // 3 done
// task 4
// let arr: (number | boolean[] | (string | (string | number)[])[])[];
// arr = [1, 2, 3, [true, false], ["sdfsdf", ["dzxfcsd", 345235]]];
// // task 4 done
// // task 5
// function reportErrors(username, age: number) {
//   let rank = "Professor";
//   return `Username: ${username}`;
//   console.log("We Will Not Reach Here");
// }
// console.log(reportErrors("Elzero", 40));
// // task 5 done
// task 6
// let nothing;
// let theName: string = "Elzero";
// function showMyDetails(a = "", b = "", c?) {
//   return `${a}${b}${c}`;
// }
// // Replace ???? With The Available Variables As Argument To Get The Result
// console.log(showMyDetails(theName, nothing)); // Elzero
// // task 6 done
// // task 7
// function showMsg(user?: string, age?: (number|string), country?: string) {
//     return `${user}${age}${country}`;
//   }
//   console.log(showMsg());
//   console.log(showMsg("Elzero"));
//   console.log(showMsg("Elzero", 40));
//   console.log(showMsg("Elzero", "40", "Egypt"));
//task 7 done
//task 8
// // Write The Function Here
// function printInConsole(...args: (string | number | boolean)[]): string {
//   for (let i = 0; i < args.length; i++) {
//     console.log(`The Value Is ${args[i]} And Type Is ${typeof args[i]}`);
//   }
//   return "Done";
// }
// // Using The Function => Do Not Edit
// console.log(printInConsole(1, 2, 3, 4, 5));
// console.log(printInConsole("A", "B", "C"));
// console.log(printInConsole(true, false, false, true, true));
// task 8 done
//# sourceMappingURL=main.js.map