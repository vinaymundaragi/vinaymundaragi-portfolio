//get element by Id
const buttonClick = document.querySelector("#button-send");
const boodyElement = document.querySelector("hello");
// what are the things that are suppose to happen after a click is  being performed
// We use event handler

buttonClick.addEventListener("click", function () {
  hello.classList.add("hidden");
});
