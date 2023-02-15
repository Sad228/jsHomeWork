
// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
let triangle = (a, b) => a * b;

console.log(triangle(4, 6));

// - створити функцію яка обчислює та повертає площу кола з радіусом r

let circle = (r) => 3.14 * Math.pow(r,2);



console.log(circle(2));


// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

let cylinder = (r,h) =>  2*3.14*r*(h + r) ;


console.log(cylinder(1, 2));


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

let looper = (arr) => {
    for (let arrElement of arr) {
        console.log(arrElement);
    }
}
looper(users);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

let paragraph = (text) => {
    let par = `<div>
                   <p>${text}</p>     
               </div>`;
    document.write(par);
}
paragraph('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati, sit!');

document.write(`<hr>`);

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

let li = (liText) => {
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

let ul = (ulText, a) => {
    document.write(`<ul>`)
    for (let i = 0; i < a; i++) {
        document.write(`<li>${ulText}</li>`)
    }
    document.write(`</ul>`)
}
ul('Lorem ipsum dolor fasfaf',4);
document.write(`<hr>`);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

let listOfItems = ['html', 'css', 2, -6, true , false];
let mass = (lists) => {
    document.write(`<ul>`)
    for (let i = 0; i < lists.length; i++) {
        document.write(`<li>${lists}</li>`)
    }
    document.write(`</ul>`)
}
mass (listOfItems);
document.write(`<hr>`);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

let arr = (array) => {
    for (const arrayElement of array) {
        document.write(`<div>${arrayElement.id} - ${arrayElement.name} - ${arrayElement.age}</div>`)
    }
}
arr(users)
document.write(`<hr>`);
// - створити функцію яка повертає найменьше число з масиву

let lists = [1,4,6,10,-5];
let num = (number) => {
    let numb = number[0];

    for (let i = 0; i < number.length; i++) {
        if (number[i] < numb) { numb = number[i] }
    }
    document.write(numb);
}
num(lists);
document.write(`<hr>`);

// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13

let sum = (arr) => {
    let suma = 0;
    for (const arrElement of arr) {
        suma += arrElement;
    }
    console.log(suma);
}
    sum(lists);



// - створити функцію swap(arr,index1,index2). Функція міняє місцями значення у відповідних індексах

let swap = (arr, index1, index2) => {
    let ind = arr[index1];
    arr[index1] = arr[index2];
    arr[index2]= ind;
}
swap(lists,2,0);
console.log(lists);


// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)

let exchange = (sumUAH, [currencyValues, exchangeCurrency]) => {
    if (exchangeCurrency === 'USD'){
        console.log(sumUAH / currencyValues);
    }
    if (exchangeCurrency === 'EUR'){
        console.log(sumUAH / currencyValues);
    }
}

exchange(10000, [42, 'EUR']);
exchange(10000, [40, 'USD']);