const num = 456.325;

let numVE = num.toLocaleString("es-VE");

console.log(numVE); // 456,325

let numCurrency = num.toLocaleString("es-VE", {
  style: "currency",
  currency: "BSF"
});

console.log(numCurrency); //BSF 456,33
