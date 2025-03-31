
function add1() {
    let addElement = document.getElementById('list1');
    let input1 = document.getElementById('input_number1');
    let input2 = document.getElementById('input1');

    if (input2.value === '') {
        alert('Укажите имя')
    }
    else {
        for (let i = 0; i < input1.value; i++) {
            let liElement = document.createElement('li')
            liElement.innerText = input2.value;
            addElement.append(liElement);
        }
        input2.value = ''
        input1.value = ''
    }
}

function add2() {
    let addElement = document.getElementById('list2');
    let input1 = document.getElementById('input_number2');
    let input2 = document.getElementById('input2');

    if (input2.value === '') {
        alert('Укажите имя')
    }
    else {
        for (let i = 0; i < input1.value; i++) {
            let liElement = document.createElement('li')
            liElement.innerText = input2.value;
            addElement.append(liElement);
        }
        input2.value = ''
        input1.value = ''
    }
}