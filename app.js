document.getElementById("loan-form").addEventListener("submit", function (e) {
  document.getElementById("loading").style.display = "block";
  document.getElementById("results").style.display = "none";
  setTimeout(calculatorResultes, 2000);
  e.preventDefault();
});

function calculatorResultes() {
  document.getElementById("loading").style.display = "none";
  document.getElementById("results").style.display = "block";
  console.log("calculatoing...");
  const amount = document.getElementById("amount");
  const interest = document.getElementById("interest");
  const years = document.getElementById("years");
  const monthlyPayment = document.getElementById("monthly-payment");
  const totalPayment = document.getElementById("total-payment");
  const totalInterest = document.getElementById("total-interest");

  const principal = parseFloat(amount.value);
  const calculatedInterest = parseFloat(interest.value) / 100;
  const calculatedPayment = parseFloat(years.value);

  const yearly =
    principal * Math.pow(1 + calculatedInterest, calculatedPayment);

  if (isFinite(yearly)) {
    totalPayment.value = yearly.toFixed(2);
    monthlyPayment.value = (yearly / (calculatedPayment * 12)).toFixed(2);
    totalInterest.value = (yearly - principal).toFixed(2);
  } else {
    showerror("Please Check Your Numbers");
    document.getElementById("loading").style.display = "none";
    document.getElementById("results").style.display = "none";
  }
}
function showerror(error) {
  const errorDiv = document.createElement("div");
  errorDiv.className = "alert alert-danger";
  errorDiv.appendChild(document.createTextNode(error));
  const card = document.querySelector(".card");
  const heading = document.querySelector(".heading");
  card.insertBefore(errorDiv, heading);

  setTimeout(errorhidding, 3000);
}

function errorhidding() {
  document.querySelector(".alert").remove();
}
