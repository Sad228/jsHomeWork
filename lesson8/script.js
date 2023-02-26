// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
//
function User(id,name,surname,email,phone){
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;

}

console.log(new User(1, 'vasya', 'vas', 'vas@gmail.com', 969696966));

let mass = [new User(1, 'vasya', 'vas', 'vas@gmail.com', 969696966),
    new User(6, 'dima', 'dimas', 'dimas@gmail.com', 969696966),
    new User(3, 'kolya', 'kolyan', 'kol@gmail.com', 969696966),
    new User(4, 'masha', 'mawka', 'maw@gmail.com', 969696966),
    new User(5, 'vika', 'vi', 'vi@gmail.com', 969696966),
    new User(2, 'olya', 'olyalya', 'lya@gmail.com', 969696966),
    new User(7, 'vitya', 'vitos', 'vit@gmail.com', 969696966),
    new User(8, 'petya', 'pet', 'pet@gmail.com', 969696966),
    new User(9, 'anna', 'girl', 'gi@gmail.com', 969696966),
    new User(10, 'inna', 'im', 'in@gmail.com', 969696966),
];
console.log(mass)
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
//
let filter = mass.filter(value => value.id % 2 === 0);
console.log(filter);


// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
//

let sort = mass.sort((a, b) => a.id - b.id);
console.log(sort)
// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
class Client {
    constructor(id, name, surname , email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}
let clients = [new Client(1, 'vasya', 'vas', 'vas@gmail.com', 969696966,['asd','weqe']),
    new Client(6, 'dima', 'dimas', 'dimas@gmail.com', 969696966,['fds']),
    new Client(3, 'kolya', 'kolyan', 'kol@gmail.com', 969696966,['dasda','dsadad','sdaasdasd']),
    new Client(4, 'masha', 'mawka', 'maw@gmail.com', 969696966,['dasad','dasd']),
    new Client(5, 'vika', 'vi', 'vi@gmail.com', 969696966,['asds']),
    new Client(2, 'olya', 'olyalya', 'lya@gmail.com', 969696966,['sad','dsa','dasd','dsad']),
    new Client(7, 'vitya', 'vitos', 'vit@gmail.com', 969696966,['dsa','as']),
    new Client(8, 'petya', 'pet', 'pet@gmail.com', 969696966,[]),
    new Client(9, 'anna', 'girl', 'gi@gmail.com', 969696966,['asdasd']),
    new Client(10, 'inna', 'im', 'in@gmail.com', 969696966,['dasd','sdasd','dsadasd'])
];
console.log(clients);
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
//
let sorter = clients.sort((a, b) => a.order.length - b.order.length);
console.log(sorter);
//
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

function Car(model,maker,year,maxSpeed,capacity) {
    this.model = model;
    this.maker = maker;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.capac = capacity;
}
let user1 = new Car('VolkswagenJetta','Germany',2013,260,1.8);
console.log(user1);
user1.drive = function ()
{
    console.log( `Їдемо зі швидкістю ${user1.maxSpeed} кілометрів на годину`)
};
user1.drive();

user1.info = function () {
    console.log(`
    Модель автомобіля - ${this.model},
    Виробник - ${this.maker},
    Рік випуску - ${this.year},
    Максимальна швидкість - ${this.maxSpeed},
    Об'єм - ${this.capac}
    `)
    };
    user1.info();


    user1.increaseMaxSpeed = function (newSpeed) {
     return    user1.maxSpeed += newSpeed;
    };
console.log(user1.increaseMaxSpeed(20));

user1.changeYear = function (newValue) {
    return user1.year = newValue;
}
console.log(user1.changeYear(2015));

user1.addDriver = function (driver){
 return    user1.driver = driver;
};
console.log(user1.addDriver({name:'vasya',age:22}))

//
//
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//

class Car2 {
    constructor(model,maker,year,maxSpeed,capacity) {
        this.model = model;
        this.maker = maker;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.capac = capacity;
    }
}
let user2 = new Car2('Ford Mustang','USA',2020,300,4.2);
console.log(user2);

user2.drive = function ()
{
    console.log( `Їдемо зі швидкістю ${user1.maxSpeed} кілометрів на годину`)
};
user2.drive();

user2.info = function () {
    console.log(`
    Модель автомобіля - ${this.model},
    Виробник - ${this.maker},
    Рік випуску - ${this.year},
    Максимальна швидкість - ${this.maxSpeed},
    Об'єм - ${this.capac}
    `)
};
user2.info();


user2.increaseMaxSpeed = function (newSpeed) {
    return    user2.maxSpeed += newSpeed;
};
console.log(user2.increaseMaxSpeed(40));

user2.changeYear = function (newValue) {
    return user2.year = newValue;
}
console.log(user2.changeYear(2022));

user2.addDriver = function (driver){
    return    user2.driver = driver;
};
console.log(user2.addDriver({name:'vitya',age:20}))

//
//
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

function Popel (name,age,size){
    this.name = name;
    this.age = age;
    this.size =  size;
}
let popels = [
    new Popel('Emma' , 18, 35 ),
    new Popel( 'Sophia',19,34 ),
    new Popel( 'Olivia' , 20,36),
    new Popel( 'Ava', 18,37),
    new Popel( 'Isabella', 17, 36),
    new Popel( 'Mia', 21, 35),
    new Popel( 'Charlotte', 22, 33),
    new Popel( 'Amelia',18, 33),
    new Popel( 'Harper', 25, 35),
    new Popel( 'Evelyn', 30, 40)
];
class Prince {
    constructor(name,age,slipper) {
        this.name = name;
        this.age = age;
        this.slipper = slipper;
    }
}
let find = new Prince('Artur',20,33);

for (const popel of popels) {
    if (popel.size === find.slipper & popel.age <= 20) {
       console.log(popel)
    }
}

console.log(popels.find(value => value.size === 33 & value.age <= 18 ));
