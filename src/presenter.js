import sumar from "./sumador";
import mult from "./multiplicador";

const first = document.querySelector("#primer-numero");
const second = document.querySelector("#segundo-numero");
const form = document.querySelector("#sumar-form");
const div = document.querySelector("#resultado-div");
const first1 = document.querySelector("#primer-num");
const second1 = document.querySelector("#segundo-num");
const form1 = document.querySelector("#mult-form");
const div1 = document.querySelector("#resultado-prod-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstNumber = Number.parseInt(first.value);
  const secondNumber = Number.parseInt(second.value);

  div.innerHTML = "<p>" + sumar(firstNumber, secondNumber) + "</p>";

});

form1.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstNumber1 = Number.parseInt(first1.value);
  const secondNumber1 = Number.parseInt(second1.value);

  div1.innerHTML = "<p>" + mult(firstNumber1, secondNumber1) + "</p>";
});