
function add1() {
     let addElement = document.getElementById('list1');
     let input = document.getElementById('input1');

     if (input.value === '') {
         alert('Добавь значение')
     }
     else {
          let liElement = document.createElement('li');
          liElement.innerText = input.value;
          addElement.append(liElement);
          input.value = ''
     }
}

function add2() {
     let addElement = document.getElementById('list2');
     let input = document.getElementById('input2');

     if (input.value === '') {
          alert('Добавь значение')
     }
     else {
          let liElement = document.createElement('li');
          liElement.innerText = input.value;
          addElement.append(liElement);
          input.value = ''
     }
}