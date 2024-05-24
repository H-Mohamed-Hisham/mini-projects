const numberInput = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const output = document.getElementById("output");

const convertHandler = () => {
  let input = numberInput.value;
  if (!input) {
    output.innerText = "Please enter a valid number";
    return;
  }
  if (input < 1) {
    output.innerText = "Please enter a number greater than or equal to 1";
    return;
  }

  if (input >= 4000) {
    output.innerText = "Please enter a number less than or equal to 3999";
    return;
  }

  const romanNumerals = [
    { value: 1000, numeral: "M" },
    { value: 900, numeral: "CM" },
    { value: 500, numeral: "D" },
    { value: 400, numeral: "CD" },
    { value: 100, numeral: "C" },
    { value: 90, numeral: "XC" },
    { value: 50, numeral: "L" },
    { value: 40, numeral: "XL" },
    { value: 10, numeral: "X" },
    { value: 9, numeral: "IX" },
    { value: 5, numeral: "V" },
    { value: 4, numeral: "IV" },
    { value: 1, numeral: "I" },
  ];

  let result = "";

  for (const { value, numeral } of romanNumerals) {
    while (input >= value) {
      result += numeral;
      input -= value;
    }
  }

  output.innerText = result;
};

convertBtn.addEventListener("click", convertHandler);
