//- За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині//
for ( let i = 0; i < 10; i++) {
   document.write('<div style="margin: 15px;padding: 15px; background-color: aqua">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid animi asperiores corporis deleniti explicabo hic nesciunt nihil nisi nostrum officiis placeat, possimus quaerat reiciendis tempora, voluptatum? Iste minima odio tempore?</div>');
}
//------------------------------------------------------------------------------//
//- За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині//
for ( let i = 1; i < 11; i++) {
    document.write(`<div style="margin: 15px;padding: 15px; background-color: red">` + i + `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid animi asperiores corporis deleniti explicabo hic nesciunt nihil nisi nostrum officiis placeat, possimus quaerat reiciendis tempora, voluptatum? Iste minima odio tempore?</div>`);
}
//------------------------------------------------------------------------------//
//- За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.//
let element = 0;
while (element < 20) {
    document.write(
        `<h1 style="background-color:yellowgreen; margin: 15px; padding: 15px;">Lorem ipsum dolor sit amet</h1>`
    );
    element++;
}
//------------------------------------------------------------------------------//
//- За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.//
let element1 = 0;
while (element1 < 20) {
    document.write(
        `<h1 style="background-color:blueviolet; margin: 15px; padding: 15px;">`+ element1 +`Lorem ipsum dolor sit amet</h1>`
    );
    element1++;
}
//------------------------------------------------------------------------------//
//Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону
// Великими літерами прописанні властивості об'єкту які потрібно впровадити в шаблон//
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
        image: 'https://images.coolclever.ru/img/960/20240808001851-0000000033010017-20240-5.webp'
    },
];
for (  const productCard of products) {
    document.write(
        `<div style="display: flex; width: max-content; flex-direction: column-reverse; gap: 10px; border: black 2px solid; margin: 25px"  class="product_card">
            <h3 class="product-title">${productCard.title} - ${productCard.price}грн</h3>
            <img style="width: 150px" src="${productCard.image}" alt="" class="product-image"/>
        </div>`
    )
}
//------------------------------------------------------------------------------//
// за допомоги циклу вивести: користувачів зі статусом true, користувачів зі статусом false, користувачів які старші за 30 років//
let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];

console.log('Користувачі зі статусом true:');
for (let i = 0; i < users.length; i++) {
    if (users[i].status === true) {
        console.log(users[i]);
    }
}
console.log('\nКористувачі зі статусом false:');
for (let i = 0; i < users.length; i++) {
    if (users[i].status === false) {
        console.log(users[i]);
    }
}
console.log('\nКористувачі, які старші за 30 років:');
for (let i = 0; i < users.length; i++) {
    if (users[i].age > 30) {
        console.log(users[i]);
    }
}
//------------------------------------------------------------------------------//