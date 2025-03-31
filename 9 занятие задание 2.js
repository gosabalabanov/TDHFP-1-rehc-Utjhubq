let a = document.getElementById("Text");
let span = document.getElementById('total')
let body = document.getElementById('body')

function make() {
    if (0 === (a % 2)) {
        span.innerText = "Введено число четное"
    }
    else {
        span.innerText = "Введено число нечетное";
    }
}