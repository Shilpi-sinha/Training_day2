var b = Math.floor(Math.random() * 10);
console.log(b);
guess = 1;
for (i = 0; i < 3; i++) {
    var a = parseInt(prompt("Enter a guess"));
    guess++
    if (a == b) {
        alert("Right guess")
        break
    }

    else {
        alert(`Wrong guess, you have ${2 - i} attempt left`)
    }

    if (guess > 3) {
        alert("Attempt finished")
    }
}

