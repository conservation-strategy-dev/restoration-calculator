document.getElementById('calculate').addEventListener('click', function () {
  // Verifica se os campos obrigatórios estão preenchidos
  const country = document.getElementById('country').value;
  const totalArea = document.getElementById('total-area').value;
  const previousLandUse = document.getElementById('previous-land-use').value;
  const soilCondition = document.getElementById('soil-condition').value;
  const restorationMethod = document.getElementById('restoration-method').value;
  const pesIncentives = document.getElementById('pes-incentives').value;
  const discountRate = document.getElementById('discount-rate').value;

  if (!country || !totalArea || !previousLandUse || !soilCondition || !restorationMethod || !pesIncentives || !discountRate) {
    document.querySelectorAll('select, input').forEach(el => {
      if (!el.value) el.classList.add('error');
    });
    return;
  } else {
    document.querySelectorAll('select, input').forEach(el => {
      el.classList.remove('error');
    });
  }

  document.getElementById('results').style.display = 'block';

  // Gráfico de Pizza (Carbon vs Agroforestry Yield)
  const ctx = document.getElementById('myChart').getContext('2d');
  new Chart(ctx, {
    type: 'pie',
    data: {
      labels: ['Carbon', 'Agroforestry Yield', 'Grant'],
      datasets: [{
        data: [124650, 62325, 62325],
        backgroundColor: ['#e63946', '#a8dadc', "#457b9d"]
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false
    }
  });


  // Gráfico de Fluxo de Caixa (Cash Flow)
  const ctx2 = document.getElementById('cashFlowChart').getContext('2d');
  const years = Array.from({ length: 20 }, (_, i) => i + 1);
  const cashFlow = [-180000, ...Array(19).fill(33000)];
  new Chart(ctx2, {
    type: 'bar',
    data: {
      labels: years,
      datasets: [{
        label: 'Investment (USD)',
        data: cashFlow,
        backgroundColor: cashFlow.map(value => value < 0 ? '#E57373' : '#4CAF50')
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      },
      responsive: true,
      maintainAspectRatio: false
    }
  });
    // Gráfico de Pizza (Custos de Restauração)
    const ctx3 = document.getElementById('restorationCostsChart').getContext('2d');
    new Chart(ctx3, {
      type: 'pie',
      data: {
        labels: ['Labor', 'Tillage', 'Seedling', 'Fence'],
        datasets: [{
          data: [12000, 24000, 24000, 50000],
          backgroundColor: ['#689D69', '#77A677', '#AAAAAA', '#282828']
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false
      }
    });
  
    // Gráfico de Linha (Evolução do Carbono Capturado)
    const ctx4 = document.getElementById('carbonLineChart').getContext('2d');
    const carbonYears = Array.from({ length: 30 }, (_, i) => i + 1);
    const carbonValues = carbonYears.map(year => 315 * (1 - Math.exp(-0.1 * year))); // Crescimento logarítmico
    new Chart(ctx4, {
      type: 'line',
      data: {
        labels: carbonYears,
        datasets: [{
          label: 'Carbon Sequestration (tCO2/ha)',
          data: carbonValues,
          borderColor: '#4CAF50',
          fill: false,
          tension: 0.1
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: true,
            title: {
              display: true,
              text: 'tCO2/ha'
            }
          },
          x: {
            title: {
              display: true,
              text: 'Years'
            }
          }
        }
      }
    });
});



  