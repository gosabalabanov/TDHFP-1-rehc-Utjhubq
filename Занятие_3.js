function add1() {
    let span = document.getElementById("input1");

    for (let i = 0 ; i < 5 ; i++ ) {
        span.innerText = span.innerText + ' ' + i;
    }
}

function add2() {
    let span = document.getElementById("input2");

    for (let i = 1 ; i < 6 ; i++ ) {
        span.innerText = span.innerText + ' ' + i;
    }
}

function add3() {
    let span = document.getElementById("input3");

    for (let i = 0 ; i < 10 ; i++ ) {
        span.innerText = span.innerText + ' ' + i;
    }
}

function add4() {
    let span = document.getElementById("input4");

    for (let i = 1 ; i < 11 ; i++ ) {
        span.innerText = span.innerText + ' ' + i;
    }
}

function add5() {
    let span = document.getElementById("input5");

    for (let i = 0 ; i < 21; i=i+2 ) {
            span.innerText = span.innerText + ' ' + i;
    }
}

function add6() {
    let span = document.getElementById("input6");

    for (let i = 1 ; i < 21; i=i+2) {
        span.innerText = span.innerText + ' ' + i;
    }
}

function add7() {
    let spans = document.getElementById('spans');

    for (let i = 0 ; i < 20; i++ ) {
        let span = document.createElement('span');
        span.innerText = ' ' + i;

        if (i % 2 === 0) {
            span.classList.add('input7')
        }

        spans.append(span)
    }
}

// let a = 0;
// console.log(a)
// a = 2;
// console.log(a)
// a = a + 1;
// console.log(a)