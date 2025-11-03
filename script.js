document.getElementById("calculateBtn").addEventListener("click", function() {
  const loanAmount = parseFloat(document.getElementById("loanAmount").value);
  const annualInterest = parseFloat(document.getElementById("interestRate").value);
  const loanTenure = parseInt(document.getElementById("loanTenure").value);

  // Input Validation
  if (isNaN(loanAmount) || isNaN(annualInterest) || isNaN(loanTenure) ||
      loanAmount <= 0 || annualInterest <= 0 || loanTenure <= 0) {
    alert("Please enter valid positive values for all fields.");
    return;
  }

  const P = loanAmount;
  const R = annualInterest / 12 / 100; // Monthly Interest Rate
  const N = loanTenure;

  // EMI Calculation Formula
  const EMI = (P * R * Math.pow(1 + R, N)) / (Math.pow(1 + R, N) - 1);
  const totalPayment = EMI * N;
  const totalInterest = totalPayment - P;

  // Display Results
  document.getElementById("displayLoan").innerText = P.toFixed(2);
  document.getElementById("displayEMI").innerText = EMI.toFixed(2);
  document.getElementById("displayInterest").innerText = totalInterest.toFixed(2);

  document.getElementById("result").style.display = "block";
});
