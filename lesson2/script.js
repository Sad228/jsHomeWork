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

let user1 = {
    title: 'title',
    pageCount: 100,
    genre: 'genre',

}
console.log(user1);

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

let users3;
users3 = [
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
    }

];
console.log(users3);
console.log(users3[0].password);
console.log(users3[1].password);
console.log(users3[2].password);





// let x = +prompt('number');
// if(x !== 0) {
//     console.log('true')
// }else {
//     console.log('false')
// }



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


// let num = +prompt('Enter first number');
// let num2 = +prompt('Enter second number');
// if (num > num2) {
//     console.log(num);
// }else if (num === num2)  {
//     console.log(num2 = num);
// }else {
//     console.log(num2);
// }


let a = 'Lorem ipsum';
b = a || 'default';
console.log(b);


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
