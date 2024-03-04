// DATES  AAAA-MM-DD 
// (ISO)
const fecha = new Date()
fecha.setDate(10)
fecha.setMonth(8)
fecha.setFullYear(2025)
console.log(fecha.getDate());
console.log(fecha.getMonth()+1);
console.log(fecha.getFullYear());

const fechaDeclarada = new Date('2020-05-04')
// (SHORT)

// (LONG)


console.log(fechaDeclarada);