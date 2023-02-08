// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.




for (let i =1; i <= 10; i++) {
    document.write(`<div>Lorem ipsum dolor.</div>`)
}
document.write(`<hr>`);
for (let i =1; i <= 10; i++) {
    document.write(`<div>Lorem ipsum dolor- ${i}</div>`)
}
document.write(`<hr>`);

let i = 1;
while (i <= 20) {
    document.write(`<h1>Lorem ipsum dolor.</h1>`);
    i++;
}
document.write(`<hr>`);

let b = 1;
while (b <= 20) {
    document.write(`<h1>Lorem ipsum- ${b}</h1>`);
    b++;
}
document.write(`<hr>`);


// - Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону



let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
for (const listOfItem of listOfItems) {
    document.write(`<ul>
        <li>
        ${listOfItem}
</li>
</ul>`)
}

document.write(`<hr>`);

// Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону  Зробити адекватну стилізацію
// Великими літерами прописанні властивості об'єкту які потрібно впровадити в шаблон


let products = [
    {
        title: 'milk',
        price: 22,
        image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
    },
    {
        title: 'juice',
        price: 27,
        image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
    },
    {
        title: 'tomato',
        price: 47,
        image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
    },
    {
        title: 'tea',
        price: 15,
        image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
    },
];

for (let j = 0; j < products.length; j++) {
    const product = products[j];
    document.write(`<div class="product-card">
        <h3 class="product-title">${product.title}. Price - ${product.price}</h3>
        <img src="${product.image}" alt="img" class="product-image">
</div>`)

}
document.write(`<hr>`);

// є масив

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
//
// за допомоги циклу вивести:
//     - користувачів зі статусом true

for (i = 0; i < users.length; i++) {
    if (users[i].status === true) {
        document.write(`<div>
    <h3>${users[i].name}-${users[i].status}</h3>
</div>`)
    }
}

document.write(`<hr>`);
//
// - користувачів зі статусом false

for (i = 0; i < users.length; i++) {
    if (users[i].status === false) {
        document.write(`<div>
    <h3>${users[i].name}-${users[i].status}</h3>
</div>`)
    }
}

document.write(`<hr>`);
//
// - користувачів які старші за 30 років

for (i = 0; i < users.length; i++) {
    if (users[i].age >= 30) {
        document.write(`<div>
    <h3>${users[i].name}-${users[i].age}</h3>
</div>`)
    }
}

