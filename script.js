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
    // Adiciona a classe 'error' para os campos não preenchidos
    document.querySelectorAll('select, input').forEach(el => {
      if (!el.value) el.classList.add('error');
    });
    return;
  } else {
    // Remove a classe 'error' dos campos preenchidos
    document.querySelectorAll('select, input').forEach(el => {
      el.classList.remove('error');
    });
  }

  // Mostra a seção de resultados
  document.getElementById('results').style.display = 'block';

  // Gráfico de Pizza (Carbon vs Agroforestry Yield)
  const ctx = document.getElementById('myChart').getContext('2d');
  new Chart(ctx, {
    type: 'pie',
    data: {
      labels: ['Carbon', 'Agroforestry Yield'],
      datasets: [{
        data: [50, 50],
        backgroundColor: ['#94d2bd', '#005f73']
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
});



  