var a = Number(prompt("Enter the First Number : "));
var b = Number(prompt("Enter the Second Number : "));
var ch = prompt("Press + for Addition\nPress - for Subtraction\nPress * for Multiplication\nPress / for Division\n")
switch (ch) {
    case '+':
        document.write(`${a} + ${b} = ${a + b}`)
        break
    case '-':
        document.write(`${a} - ${b} = ${a - b}`)
        break
    case '*':
        document.write(`${a} * ${b} = ${a * b}`)
        break
    case '/':
        document.write(`${a} / ${b} = ${a / b}`)
        break
    default:
        document.write(`Invalid Choice`)
        break
}