const calculateBtn = document.getElementById("calculateBtn");

calculateBtn.addEventListener("click", function() {
  const weightInput = document.getElementById("weightInput");
  const heightInput = document.getElementById("heightInput");
  const resultDiv = document.getElementById("result");

  const weight = parseFloat(weightInput.value);
  const height = parseFloat(heightInput.value);

  const bmi = weight / (height * height);

  resultDiv.innerHTML = `Your BMI is: ${bmi.toFixed(2)}`;
});
