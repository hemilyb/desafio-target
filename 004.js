// 04
const revenue = {
  SP: 67836.43,
  RJ: 36678.66,
  MG: 29229.88,
  ES: 27165.48,
  Outros: 19849.53,
};

let totalRevenue = 0;
for (const state in revenue) {
  totalRevenue += revenue[state];
}

console.log("Percentual de representação por estado:");
for (const state in revenue) {
  const percentage = (revenue[state] / totalRevenue) * 100;
  console.log(`${state}: ${percentage.toFixed(2)}%`);
}
