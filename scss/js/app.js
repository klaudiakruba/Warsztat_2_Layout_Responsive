// document.addEventListener("DOMContentLoaded", function () {

// inputNumber.forEach(function (e) {
//
//     if (e < 0) {
//         console.log(Wpisz liczbe dodatnia);
//     };
//
//     else if (x % 1 == 0);) {
//         return result = e;
//     };
// })

// function Calculator(form, summary) {
//     this.prices = {
//         products: 0.5,
//         orders: 0.25,
//         package: {
//             basic: 0,
//             professional: 25,
//             premium: 60
//         },
//         accounting: 35,
//         terminal: 5
//     };
// }

// }); //koniec funkcji DOM

const inputNumberProducts = document.querySelectorAll(".calc__input #products");
const inputNumberOrders = document.querySelectorAll(".calc__input #orders");

const productsSum = document.querySelectorAll(
	".calc__summary li:nth-of-type(1) .item__calc"
);

console.log(productsSum.innerText);
console.log(inputNumberProducts.innerText);

productsSum.innerText = inputNumberProducts.value;

inputNumberProducts.addEventListener("submit", function (e) {
	e.preventDefault();

	const value = inputNumberProducts.value;

	const newvalue = document.createElement();

	inputNumberProducts.append(productsSum);
});
