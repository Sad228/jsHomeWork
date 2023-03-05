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
// let div1 = document.createElement('div');
// document.body.appendChild(div1);
// div1.innerText = 1;
// let plus = localStorage.getItem('plus');
// plus++;
// localStorage.setItem('',plus);
// document.write('',+ plus);

let div2 = document.createElement('div');
let block = localStorage.getItem('plus');
block++;
document.body.appendChild(div2);
localStorage.setItem('plus',block);
div2.append(block);


// // Є сторінка index.html (назва довільна), при відвідуванні якої в локальне сховще, в масив sessions зберігається інформація про дату та час відвідування сторінки. Є ще сторінка sessions.html (назва довільна), при відвідуванні якої потрібно відмалювати всю інформацію про відвідування сторінки index.html. Інфу НЕ виводити в консоль, а побудувати дом структуру під кожну сессію
// // =========================
// //     зробити масив на 100 об'єктів та дві кнопки prev next
// // при завантажені сторінки з'являються перші 10 об'єктів.
// //     При натисканні next виводяться настпні 10 об'єктів
// // При натисканні prev виводяться попередні 10 об'єктів
// //
// //
// // *** Створити 3 інпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
// //     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// // (Додатковачастина для завдання)