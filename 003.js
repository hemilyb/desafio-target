// 03
const data = require("./dados.json");

function calculateRevenue(revenue) {
  const daysRevenue = revenue.filter(d => d.valor > 0);
  const values = daysRevenue.map(d => d.valor);

  const minValue = Math.min(...values);
  const maxValue = Math.max(...values);

  const totalRevenue = values.reduce((total, value) => total + value, 0);
  const monthlyAverage = totalRevenue / values.length;

  const aboveAverage = values.filter(value => value > monthlyAverage).length;

  return {
    minValue,
    maxValue,
    aboveAverage,
  };
}

const result = calculateRevenue(data);

console.log(`Menor valor de faturamento mensal: R$ ${result.minValue.toFixed(2)}`);
console.log(`Maior valor de faturamento mensal: R$ ${result.maxValue.toFixed(2)}`);
console.log(`Dias com faturamento acima da média mensal: ${result.aboveAverage}`);