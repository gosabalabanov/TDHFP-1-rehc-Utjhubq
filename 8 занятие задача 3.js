function clearDiv() {
    console.log('вызываем очистку дива');
    let div = document.getElementById('clear');
    div.innerText = '';
}

function add1() {
    let input = document.getElementById('d1');
    let span = document.getElementById('span1');
    span.innerText = span.innerText + input.value;
}

function add2() {
    let input = document.getElementById('d2');
    let span = document.getElementById('span2');
    span.innerText = span.innerText + input.value;
}

function add3() {
    let input = document.getElementById('d3');
    let span = document.getElementById('span3');
    span.innerText = span.innerText + input.value;
}

// let a = 1;
// console.log(a)
// a = a + 1;
// console.log(a)
// a = a + 1;
// console.log(a)