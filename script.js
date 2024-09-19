document.getElementById("calculate").addEventListener("click", function() {
  const requiredFields = ["country", "total-area", "previous-land-use", "soil-condition", "restoration-method", "pes-incentives", "discount-rate"];
  let allFilled = true;

  // Valida se todos os campos obrigatórios estão preenchidos
  requiredFields.forEach(function(field) {
    const input = document.getElementById(field);
    if (!input.value) {
      input.classList.add("error");
      allFilled = false;
    } else {
      input.classList.remove("error");
    }
  });

  // Se todos os campos forem preenchidos, exibe o resultado
  if (allFilled) {
    document.getElementById("total-cost").textContent = "$120,000";

    // Exibe a div de resultados e o gráfico
    document.getElementById("results").style.display = "block";

    // Renderiza o gráfico de pizza
    const ctx = document.getElementById("myChart").getContext("2d");
    new Chart(ctx, {
      type: "pie",
      data: {
        labels: ["Carbon", "Agroforestry Yield"],
        datasets: [{
          data: [60000, 60000],  // Divide o gráfico meio a meio
          backgroundColor: ["#34a0a4", "#1e6091"],
        }]
      },
      options: {
        responsive: true
      }
    });
  }
});

  