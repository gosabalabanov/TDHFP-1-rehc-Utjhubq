function clearDiv() {
    console.log('вызываем очистку дива');
    let div = document.getElementById('clear');
    div.innerText = '';
}
function change() {
    let a = prompt('Введите текст ')
    console.log(a);

    let span = document.getElementById('clearDiv');
    span.innerText = a;
}