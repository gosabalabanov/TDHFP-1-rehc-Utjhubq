let a = 0;
let span = document.getElementById('total')
let body = document.getElementById('body')

function make0() {
    a = 0;
    span.innerText = a;
    body.style.backgroundColor = 'black';
    body.style.color = 'white';
}

function make1() {
    a = 1;
    span.innerText = a;
    body.style.backgroundColor = 'white';
    body.style.color = 'black';
}

function make2() {
    a = 2;
    span.innerText = a;
    body.style.backgroundColor = 'blue';
    body.style.color = 'white';
}

function make3() {
    a = 5;
    span.innerText = a;
    body.style.backgroundColor = 'green';
    body.style.color = 'white';
}

function make4() {
    a = a+1;
    span.innerText = a;

    if (a === 0) {
        body.style.backgroundColor = 'black';
        body.style.color = 'white';
    }
    else if (a === 1) {
        body.style.backgroundColor = 'white';
        body.style.color = 'black';
    }
    else if (a === 2) {
        body.style.backgroundColor = 'blue';
        body.style.color = 'white';
    }
    else if (a === 5) {
        body.style.backgroundColor = 'green';
        body.style.color = 'white';
    }
    else if (a > 5 || a === 4 || a === 3) {
        if (a % 2 === 0) {
            body.style.backgroundColor = 'red';
            body.style.color = 'black';
        }
        else {
            body.style.backgroundColor = 'goldenrod';
            body.style.color = 'black';
        }
    }

    // if ( 0 === a % 2 )
    // {
    //     alert( body.style.backgroundColor = 'red');( body.style.color = 'black' )
    // }
    // else
    // {
    //     body.style.backgroundColor = 'goldenrod'
    //     body.style.color = 'black'
    // }
}

function make5() {
    a = a-1;
    span.innerText = a;

    if (a === 0) {
        body.style.backgroundColor = 'black';
        body.style.color = 'white';
    }
    else if (a === 1) {
        body.style.backgroundColor = 'white';
        body.style.color = 'black';
    }
    else if (a === 2) {
        body.style.backgroundColor = 'blue';
        body.style.color = 'white';
    }
    else if (a === 5) {
        body.style.backgroundColor = 'green';
        body.style.color = 'white';
    }
    else if (a > 5 || a === 4 || a === 3) {
        if (a % 2 === 0) {
            body.style.backgroundColor = 'red';
            body.style.color = 'black';
        }
        else {
            body.style.backgroundColor = 'goldenrod';
            body.style.color = 'black';
        }
    }

    // if ( 0 === a % 2 )
    // {
    //     alert( body.style.backgroundColor = 'red');( body.style.color = 'black' )
    // }
    // else
    // {
    //     alert( body.style.backgroundColor = 'goldenrod');( body.style.color = 'black' )
    // }
}

