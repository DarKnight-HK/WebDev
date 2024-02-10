const submitButton = document.getElementById("sub");
const resultInput = document.getElementById("result");

submitButton.onclick = function(event) {
  event.preventDefault(); // Prevent the default form submission
  const includeUpper = document.getElementById("upper").checked;
  const includeLower = document.getElementById("lower").checked;
  const includeNumber = document.getElementById("num").checked;
  const includeSymbol = document.getElementById("symbol").checked;
  generate(includeUpper, includeLower, includeNumber, includeSymbol);
};

function generate(includeUpper, includeLower, includeNumber, includeSymbol) {
  let len = document.getElementById("textBox").value;
  len = Number(len);
  const lowerCase = "abcdefghijklmnopqrstuvwxyz";
  const upperCase = lowerCase.toUpperCase();
  const numbers = "0123456789";
  const symbols = "!@#$%^&*()_+{}:";
  let criteria = "";
  let password = "";

  criteria += includeUpper ? upperCase : "";
  criteria += includeLower ? lowerCase : "";
  criteria += includeNumber ? numbers : "";
  criteria += includeSymbol ? symbols : "";

  if (len > 0 && criteria !== "") {
    for (let i = 0; i < len; i++) {
      const index = Math.floor(Math.random() * criteria.length);
      password += criteria[index];
    }
  }

  resultInput.value = password;
}