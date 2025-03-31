let body = document.getElementById('D');

while (true) {
    let res = prompt('1-красный блок, 2-синий блок, 3-зеленый блок, 4-стоп игра')
    if (res === '4') {
        break;
    }
    else {
        // alert('Укажите нужное число !!!')
        let spanElement = document.createElement('span');

        if (res === '1') {
            spanElement.classList.add('box_red')
        }
        if (res === '2') {
            spanElement.classList.add('box_blue')
        }
        if (res === '3') {
            spanElement.classList.add('box_green')
        }

        body.append(spanElement)
    }
}