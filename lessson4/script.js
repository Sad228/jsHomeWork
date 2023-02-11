
// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
function triangle (a, b) {
    let area  = (a * b);
    document.write(area);
    return area;
}
triangle(4,6);
document.write(`<hr>`);
// - створити функцію яка обчислює та повертає площу кола з радіусом r

function circle(r) {
    const PI = 3.14;
    let ar = (PI * Math.pow(r,2))
    document.write(ar);
    return ar;
}

circle(2);
document.write(`<hr>`);

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

function cylinder (r,h) {
    const PI = 3.14;
    let cyl = 2*PI*r*(h + r);
    document.write(cyl);
    return cyl;
}
cylinder(1,2);
 document.write(`<hr>`);

// - створити функцію яка приймає масив та виводить кожен його елемент

let users = [
    {name: 'vasya', id:0, age: 31, status: false},
    {name: 'petya', id:1, age: 30, status: true},
    {name: 'kolya', id:2, age: 29, status: true},
    {name: 'olya', id:3, age: 28, status: false},
    {name: 'max', id:4, age: 30, status: true},
    {name: 'anya', id:5, age: 31, status: false},
    {name: 'oleg', id:6, age: 28, status: false},
    {name: 'andrey', id:7, age: 29, status: true},
    {name: 'masha', id:8, age: 30, status: true},
    {name: 'olya', id:9, age: 31, status: false},
    {name: 'max', id:10, age: 31, status: true}
];

function looper (arr) {
    for (let arrElement of arr) {
       console.log(arrElement);
    }
}
looper(users);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

function p (text) {
    let par = `<div>
                   <p>${text}</p>     
               </div>`;
    document.write(par);
}
p('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati, sit!');

document.write(`<hr>`);

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

function li (liText) {
    let txd = `<div>
                 <ul>
                 <li>${liText}</li>
                 <li>${liText}</li>
                 <li>${liText}</li>
                 </ul>   
                </div>`
        document.write(txd);
}
li('Lorem ipsum dolor sit amet.');
document.write(`<hr>`);

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

function ul (ulText, i) {

}
ul('Lorem ipsum dolor fasfaf',5)