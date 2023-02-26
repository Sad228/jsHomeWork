// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
    let str = 'hello world';
console.log(str.length);
    let str2 = 'lorem ipsum';
console.log(str2.length);
    let str3 = 'javascript is cool';
console.log(str3.length);


// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
console.log(str.toUpperCase());
console.log(str2.toUpperCase());
console.log(str3.toUpperCase());
// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
    let strUp = 'HELLO WORLD';
    console.log(strUp.toLowerCase());
    let strUp2 = 'LOREM ISPUM';
console.log(strUp2.toLowerCase());
    let strUp3 = 'JAVASCRIPT IS COOL';
console.log(strUp3.toLowerCase());
// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
    let strn = ' dirty string   ';
    // console.log(strn.indexOf('d'));
    // console.log(strn.indexOf('g'));
console.log(strn.substring(1, 13));

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']

let strng = 'Ревуть воли як ясла повні';
console.log(strng.split(' '));

// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.
let array = [10,8,-7,55,987,-1011,0,1050,0];
   let map = array.map(value => {
        return value.toString();
    });
   console.log(map);
// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]
let numbers = [11,21,3]
let nums = function (mass, text) {
   if (text === 'ascending') {
      return  mass.sort((a, b) => a - b);
   }
   if (text === 'descending') {
     return   mass.sort((a, b) => b - a);
   }
};
console.log(nums(numbers, 'ascending'));
console.log(nums(numbers, 'descending'));
// ==========================
// - є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// -- відсортувати його за спаданням за monthDuration
let sortMonth = coursesAndDurationArray.sort((a, b) => b.monthDuration - a.monthDuration)
console.log(sortMonth);
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
let filterMonth = coursesAndDurationArray.filter(value => value.monthDuration > 5);
console.log(filterMonth);
// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
let mapUsers = coursesAndDurationArray.map((value, index) =>{
    return {id:index+1, title:value.title, monthDuration:value.monthDuration}
});
console.log(mapUsers);
// =========================
//     описати колоду карт (від 6 до туза без джокерів)
// - знайти піковий туз
// - всі шістки
// - всі червоні карти
// - всі буби
// - всі трефи від 9 та більше
//
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }
let cards = [
    { value: "Ace", suit: "Spades", color: "Black" },
    { value: "6", suit: "Spades", color: "Black" },
    { value: "7", suit: "Spades", color: "Black" },
    { value: "8", suit: "Spades", color: "Black" },
    { value: "9", suit: "Spades", color: "Black" },
    { value: "10", suit: "Spades", color: "Black" },
    { value: "Jack", suit: "Spades", color: "Black" },
    { value: "Queen", suit: "Spades", color: "Black" },
    { value: "King", suit: "Spades", color: "Black" },
    { value: "Ace", suit: "Hearts", color: "Red" },
    { value: "6", suit: "Hearts", color: "Red" },
    { value: "7", suit: "Hearts", color: "Red" },
    { value: "8", suit: "Hearts", color: "Red" },
    { value: "9", suit: "Hearts", color: "Red" },
    { value: "10", suit: "Hearts", color: "Red" },
    { value: "Jack", suit: "Hearts", color: "Red" },
    { value: "Queen", suit: "Hearts", color: "Red" },
    { value: "King", suit: "Hearts", color: "Red" },
    { value: "Ace", suit: "Diamonds", color: "Red" },
    { value: "6", suit: "Diamonds", color: "Red" },
    { value: "7", suit: "Diamonds", color: "Red" },
    { value: "8", suit: "Diamonds", color: "Red" },
    { value: "9", suit: "Diamonds", color: "Red" },
    { value: "10", suit: "Diamonds", color: "Red" },
    { value: "Jack", suit: "Diamonds", color: "Red" },
    { value: "Queen", suit: "Diamonds", color: "Red" },
    { value: "King", suit: "Diamonds", color: "Red" },
    { value: "Ace", suit: "Clubs", color: "Black" },
    { value: "6", suit: "Clubs", color: "Black" },
    { value: "7", suit: "Clubs", color: "Black" },
    { value: "8", suit: "Clubs", color: "Black" },
    { value: "9", suit: "Clubs", color: "Black" },
    { value: "10", suit: "Clubs", color: "Black" },
    { value: "Jack", suit: "Clubs", color: "Black" },
    { value: "Queen", suit: "Clubs", color: "Black" },
    { value: "King", suit: "Clubs", color: "Black" }
];
let findAce = cards.find(value => value.value === "Ace" && value.suit === "Spades");
console.log(findAce);
let six = cards.filter(value =>value.value === "6");
console.log(six);
let redCards = cards.filter(value => value.color === "Red");
console.log(redCards);
let diamond = cards.filter(value => value.suit === "Diamonds");
console.log(diamond);
let allClubs = cards.filter(value => value.suit === "Clubs" && ['9','10', 'Ace','Jack','Queen','King'].includes(value.value));
console.log(allClubs);
//
// =========================
//
//     Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }
let cardsReduce = cards.reduce((accum, mast) =>{
    if (mast.suit === "Spades" ) {
        accum.spades.push(mast);
        return accum;
    }
    if (mast.suit === "Diamonds" ) {
       accum.diamonds.push(mast);
       return accum;
    }
    if (mast.suit === "Hearts" ) {
        accum.hearts.push(mast);
        return accum;
    }
    if (mast.suit ) {
        accum.clubs.push(mast);
        return accum;
    }
    }, {
        spades:[],
        diamonds:[],
    hearts:[],
    clubs:[]
    }
);
console.log(cardsReduce);
// =========================
//     взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray
// --написати пошук всіх об'єктів, в який в modules є sass
// --написати пошук всіх об'єктів, в який в modules є docker
let Array = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];
let filSass = Array.filter(value => value.modules.includes('sass'));
console.log(filSass);
let filDocker = Array.filter(value => value.modules.includes('docker'));
console.log(filDocker);