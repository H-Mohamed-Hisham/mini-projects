const textInput = document.getElementById("text-input");
const checkBtn = document.getElementById("check-btn");
const result = document.getElementById("result");

const checkPalindrome = () => {
  let input = textInput.value;
  if (!input) {
    alert("Please input a value");
    return;
  }

  const cleanedInput = input.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

  const reversedInput = cleanedInput.split("").reverse().join("");

  result.classList.add("result-border");

  if (cleanedInput === reversedInput) {
    result.textContent = `${input} is a palindrome`;
  } else {
    result.textContent = `${input} is not a palindrome`;
  }
};

checkBtn.addEventListener("click", checkPalindrome);
