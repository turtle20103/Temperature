const kelvin = 0;
const celsius = kelvin - 273;
const fahrenheit = Math.floor(celsius * (9/5) + 32);
const newton = Math.floor(celsius * (33/100));
console.log(`The temperature is ${kelvin} degrees Kelvin.`);
console.log(`The temperature is ${celsius} degrees Celsius.`);
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);
console.log(`The temperature is ${newton} degrees Newton scale.`);
