var sum = 0;
function myfunc() {
    var a = parseInt(prompt("Enter a number"));
   
    if (a >= 0) {
        sum = sum + a;
        console.log(a)
        console.log(sum);
        myfunc();

    }
    else {
        document.write(`Total sum: ${sum}`)
    }
}
myfunc();