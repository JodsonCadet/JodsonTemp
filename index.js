let Fahrenheit = prompt("What is the Temperature");

var x = +Fahrenheit;
const celsius = (x - 32) * 5 / 9;
const convertToCelsius = () => {
  let str = "";
  if (celsius < 0) {
    str = "Too Cold Outside";
  } else if (celsius < 20) {
    str = "Cold Outside";
  } else if (celsius < 30) {
    str = "Warm Outside";
  } else if (celsius < 40) {
    str = "Hot Outside";
  } else {
    str = "Very Hot Outside";
  }
  return str;
};
console.log(Fahrenheit);
console.log(celsius);
console.log(convertToCelsius());
