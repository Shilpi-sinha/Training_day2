var a = new Date();
const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
// console.log(a.toLocaleDateString());
console.log(`${weekday[a.getDay()]} ${a.getHours()}:${a.getMinutes()}:${a.getSeconds()}`);