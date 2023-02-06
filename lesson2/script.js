// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль

let arr;
arr = [1, 2, '3', 4, 5, true, -7, false, 9.2, 0];
console.log(arr);
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);
console.log(arr[4]);
console.log(arr[5]);
console.log(arr[6]);
console.log(arr[7]);
console.log(arr[8]);
console.log(arr[9]);
console.log(arr.length);

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.


let user1 = {
    title: 'title',
    pageCount: 100,
    genre: 'genre',

}
console.log(user1);
let userB = {
    title: 'title',
    pageCount: 150,
    genre: 'genre',
}
console.log(userB);
let userBo = {
    title: 'title',
    pageCount: 200,
    genre: 'genre',
}
console.log(userBo);

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.


let user2 = {
    title: 'title',
    pageCount: 100,
    genre: 'genre',
    authors: [
        {
            name: 'vitya',
            age:22,
        },
        {
         name:'dima',
         age: 30,
        },
        {
        name: 'vasya',
        age: 21,
    }
    ],
}
console.log(user2);
console.log(user2.authors)

// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача


let users3 = [
    {
    name: 'ostap',
    username: 'patso',
    password: 'passworsOstap',
    },
    {
        name: 'petro',
        username: 'ortep',
        password: 'passworsPetro',
    },
    {
        name: 'vlad',
        username: 'vlados',
        password: 'passworsVlad',
    },
    {
        name: 'dima',
        username: 'dimos',
        password: 'passworsDima',
    },
    {
        name: 'misha',
        username: 'meh',
        password: 'passworsMisha',
    },
    {
        name: 'user1',
        username: 'us',
        password: 'passworsUser1',
    },
    {
        name: 'user2',
        username: 'su',
        password: 'passworsUser2',
    },
    {
        name: 'user3',
        username: 'ser',
        password: 'passworsUser3',
    },
     {
        name: 'user4',
        username: 'usr',
        password: 'passworsUser4',
    },
    {
        name: 'user5',
        username: 'er',
        password: 'passworsUser5',
    }


];
console.log(users3);
console.log(users3[0].password);
console.log(users3[1].password);
console.log(users3[2].password);
console.log(users3[3].password);
console.log(users3[4].password);
console.log(users3[5].password);
console.log(users3[6].password);
console.log(users3[7].password);
console.log(users3[8].password);
console.log(users3[9].password);


// - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3


// let x = +prompt('number');
// if(x !== 0) {
//     console.log('true')
// }else {
//     console.log('false')
// }

// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).



// let time = +prompt('enter a number from 0 to 59');
// if (time >=0 && time <=15) {
//     console.log('first')
// }else if (time >=16 && time <=30){
//     console.log('second')
// }else if (time >=31 && time <=45) {
//     console.log('third')
// }else if (time >=46 && time <=59){
//     console.log('the fourth')
// }else {
//     console.log('enter a number from 0 to 59')
// }

// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).


// let day = +prompt('enter a number from 1 to 31');
// if (day >=1 && day <=10) {
//     console.log('First half')
// }else if (day >=11 && day <=20) {
//     console.log('Second half')
// }else if (day >=21 && day <=31) {
//     console.log('Third half')
// }else {
//     console.log('enter a number from 1 to 31')
// }

// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).


// let schedule = +prompt('enter a number from 1 to 7');
// switch (schedule) {
//     case 1:
//         console.log('Monday');
//         break;
//     case 2:
//         console.log('Tuesday');
//         break;
//     case 3:
//         console.log('Wednesday');
//         break;
//     case 4:
//         console.log('Thursday');
//         break;
//     case 5:
//         console.log('Friday');
//         break;
//     case 6:
//         console.log('Saturday');
//         break;
//     case 7:
//         console.log('Sunday');
//         break;
//     default:
//         console.log('enter a number from 1 to 7');
// }

// - Користувач вводить або має два числа.
// Потрібно знайти та вивести максимальне число з тих двох .
//     Також потрібно врахувати коли введені рівні числа.

// let num = +prompt('Enter first number');
// let num2 = +prompt('Enter second number');
// if (num > num2) {
//     console.log(num);
// }else if (num === num2)  {
//     console.log(num2 = num);
// }else {
//     console.log(num2);
// }

// - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//     за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподібні, тобто приводиться до false)


let a = 'lorem';
b = a || 'default';
console.log(b);

// - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".


let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
if (coursesAndDurationArray[0].monthDuration > 5) {
    console.log('Super');
}
if (coursesAndDurationArray[1].monthDuration > 5) {
    console.log('Super');
}
if (coursesAndDurationArray[2].monthDuration > 5) {
    console.log('Super');
}
if (coursesAndDurationArray[3].monthDuration > 5) {
    console.log('Super');
}
if (coursesAndDurationArray[4].monthDuration > 5) {
    console.log('Super');
}
if (coursesAndDurationArray[5].monthDuration > 5) {
    console.log('Super');
}
