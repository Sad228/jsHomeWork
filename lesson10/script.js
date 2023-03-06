// // / Стоврити форму з трьома полями для name, surname ,age та кнопкою. При натисканні на кнопку зчитати данні з полів, та вивести об'єкт в документ. Іншими словами : заповниои форму, натиснули кнопку, під формою з'явився блок з вашим об'єктом
//
// ==========================
//
let form = document.forms.form;

form.onsubmit = function (ev) {
    ev.preventDefault();
    let user = JSON.stringify({name: this.name.value,surname: this.surname.value,age: this.age.value});
    let div = document.createElement('div');
    document.body.appendChild(div);
    div.innerText = user;
}


//
//
// }// є сторінка, на якій є блок,в я кому знаходиьтся цифра. написати код, який при кожному перезавантажені сторінки буде додавати до неї +1
// // ==========================


let div2 = document.createElement('div');
let block = localStorage.getItem('plus');
block++;
document.body.appendChild(div2);
localStorage.setItem('plus',block);
div2.append(block);



// // Є сторінка index.html (назва довільна), при відвідуванні якої в локальне сховще, в масив sessions зберігається інформація про дату та час відвідування сторінки.
// Є ще сторінка sessions.html (назва довільна), при відвідуванні якої потрібно відмалювати всю інформацію про відвідування сторінки index.html.
// Інфу НЕ виводити в консоль, а побудувати дом структуру під кожну сессію
// // =========================
let date = new Date();
let dateString = date.toLocaleString();
let sessions = JSON.parse(localStorage.getItem('sessions')) || [];
sessions.push(dateString);
localStorage.setItem('sessions', JSON.stringify(sessions));

// //     зробити масив на 100 об'єктів та дві кнопки prev next
// // при завантажені сторінки з'являються перші 10 об'єктів.
// //     При натисканні next виводяться настпні 10 об'єктів
// // При натисканні prev виводяться попередні 10 об'єктів
// //

let mass = [];
for (let i = 1; i <= 100; i++) {
    mass.push( {id: i} );
}
function f(first, last) {
    let divMain = document.getElementById('main');
    divMain.innerHTML = '';
    for (let i = first; i < last; i++) {
        let mas = mass[i];
        let masDiv = document.createElement('div');
        masDiv.textContent = `${mas.id}`;
        divMain.appendChild(masDiv);
    }
}
f(0, 10);
let prevButton = document.getElementById('prev');
let nextButton = document.getElementById('next');
let first = 0;
let last = 10;

prevButton.addEventListener('click', () => {
    if (first > 0) {
        first -= 10;
        last -= 10;
        f(first, last);
    }
});

nextButton.addEventListener('click', () => {
    if (last < mass.length) {
        first += 10;
        last += 10;
        f(first, last);
    }
});
// //
// // *** Створити 3 інпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
// //     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// // (Додатковачастина для завдання)

let div3 = document.createElement('div');
let inpu1 = document.createElement('input');
let inpu2 = document.createElement('input');
let inpu3 = document.createElement('input');
let but = document.createElement('button');
inpu1.placeholder = 'rows';
inpu1.type = 'number';
inpu1.min = '2';
inpu2.placeholder = 'cells';
inpu2.type = 'number';
inpu2.min = '2';
inpu3.placeholder = 'text';
inpu3.type = 'text';
but.innerText = 'Click';
but.onclick = function () {
let table = document.createElement('table');
    for (let i = 0; i < inpu1.value; i++) {
        div3.appendChild(table);
        let tr = document.createElement('tr');
        table.appendChild(tr);
        for (let j = 0; j < inpu2.value; j++) {
            let td = document.createElement('td');
                    td.innerText = inpu3.value;
            tr.appendChild(td);
        }

    }
}
div3.append(inpu1,inpu2,inpu3,but);
document.body.appendChild(div3);