

function calculatePayment(loanAmount, interestRate, loanTerm) {
    const monthlyInterestRate = interestRate / 1200; // Convertimos la tasa de interés anual a mensual
    const numPayments = loanTerm * 12; // Convertimos el plazo del préstamo de años a meses
    const payment =
      (monthlyInterestRate * loanAmount) /
      (1 - Math.pow(1 + monthlyInterestRate, -numPayments)); // Calculamos el pago mensual con la fórmula de la hipoteca
    return payment.toFixed(2); // Redondeamos el resultado a dos decimales
  }
  
  const calculateButton = document.getElementById("calculateButton");

calculateButton.addEventListener("click", function () {
  const loanAmount = document.getElementById("loanAmount").value;
  const interestRate = document.getElementById("interestRate").value;
  const loanTerm = document.getElementById("loanTerm").value;

  const payment = calculatePayment(loanAmount, interestRate, loanTerm);

  const resultElement = document.getElementById("result");
  resultElement.innerHTML = `Pago mensual: $${payment}`;
});