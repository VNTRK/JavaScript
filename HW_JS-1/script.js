//- Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль//
let array = [1, '2', 'Георгій', '4', '5', [2, 5, 10], '7', '8', '9', '10'];
console.log(array);
//-------------------------------------------------------------------------//
//- Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.//
let book1 = {
    title: 'abc',
    pageCount: 123,
    genre:'cba'};
let book2 = {
    title: 'abc',
    pageCount: 123,
    genre:'cba' };
let book3 = {
    title: 'abc',
    pageCount: 123,
    genre:'cba' };
console.log(book1);
//-------------------------------------------------------------------------//
//- Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.//
let book11 = {
    title: 'abc',
    pageCount: 123,
    genre:'cba',
    authors: [{name:'Sad', age:24}]
};
let book12 = {
    title: 'abc',
    pageCount: 123,
    genre:'cba',
    authors: [{name:'Sad', age:24}]
};
let book13 = {
    title: 'abc',
    pageCount: 123,
    genre:'cba',
    authors: [{name:'Sad', age:24}]
};
console.log(book13);
//-------------------------------------------------------------------------//
//- Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача//
let users = [
    {name: 'Anton', username: 'killer228)))', password:'101828'},
    {name: 'Ivan', username: 'supernagibator', password:'16345132'},
    {name: 'Oleg', username: 'killer228)))', password:'sdfv45131'},
    {name: 'Anna', username: 'killer228)))', password:'789456'},
    {name: 'Vlad', username: 'killer228)))', password:'147321'},
    {name: 'Vasia', username: 'killer228)))', password:'1g68g744'},
    {name: 'Olia', username: 'killer228)))', password:'argqerv12'},
    {name: 'Maks', username: 'killer228)))', password:'rqdvscvwer'},
    {name: 'Rita', username: 'killer228)))', password:'!@asrgv%'},
    {name: 'Marco', username: 'pasta.men', password:'6784325198'}
];
console.log(
    users[0].password,
    users[1].password,
    users[2].password,
    users[3].password,
    users[4].password,
    users[5].password,
    users[6].password,
    users[7].password,
    users[8].password,
    users[9].password
);
//-------------------------------------------------------------------------//
//описати масив, в якому буде зберігатись інформація про температуру вранці, вдень і ввечері за термін в 7 днів. Як зробити цей масив - вам потрібно подумати. Нормальних варіантів опису - 2. Варіант, коли в вас буде одновимірний масив з 21 значенням вичключаємо одразу//
let week = [
    {mt:12, dt:25, et:18},  //1 день
    {mt:12, dt:25, et:18},  //2 день
    {mt:12, dt:25, et:18},  //3 день
    {mt:12, dt:25, et:18},  //4 день
    {mt:12, dt:25, et:18},  //5 день
    {mt:12, dt:25, et:18},  //6 день
    {mt:12, dt:25, et:18}   //7 день
]
console.log(week); //по днях
let week1 = {
    morningTemps: [12, 13, 15, 10, 15, 14, 3],
    dayTemps: [12, 13, 15, 10, 15, 14, 4],
    eveningTemps: [12, 13, 15, 10, 15, 14, 8]
};
console.log(week1); //по типу
//-------------------------------------------------------------------------//
//- Є змінна х, якій ви надаєте довільне числове значення.
// Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3//
// let x = +prompt('Введіть число:');
// if (x != 0) {
//     alert('вірно');
// } else {
//     alert('невірно');
// }
//-------------------------------------------------------------------------//

//- Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).//

// let time = +prompt('Введіть число від 0-59:');
// if (time >= 0 && time <=15){
//     alert('1 четверть');
// }else if(time>=15 && time <=29){
//     alert('2 четверть');
// }else if(time>=30 && time <=44){
//     alert('3 четверть');
// }else if(time>=45 && time <=59){
//     alert('4 четверть');
// }else{
//     alert('не вірне число');
// }
//-------------------------------------------------------------------------//

//- У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).//

// let day = +prompt('Введіть число від 1-31');
// if (day >= 1 && day <=10){
//      alert('1 декада');
//  }else if(day >= 11 && day <= 20){
//      alert('2 декада');
//  }else if(day >= 21 && day <= 31) {
//     alert('3 декада');
// }
//-------------------------------------------------------------------------//

//- Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).//

// let dayNum = +prompt('Введіть порядковий номер дня тижня (1-7):');
// switch (dayNum) {
//     case 1:
//         alert('Monday');
//         break;
//     case 2:
//         alert('Tuesday');
//         break;
//     case 3:
//         alert('Wednesday');
//         break;
//     case 4:
//         alert('Thursday');
//         break;
//     case 5:
//         alert('Friday');
//         break;
//     case 6:
//         alert('Saturday');
//         break;
//     case 7:
//         alert('Sunday');
//         break;
//     default:
//         alert('невірний номер дня тижня');
// }
//-------------------------------------------------------------------------//

//- Користувач вводить або має два числа.
// Потрібно знайти та вивести максимальне число з тих двох .
// Також потрібно врахувати коли введені рівні числа.//

// let a = +prompt('Введіть перше число:');
// let b = +prompt('Введіть друге число:');
// if (a > b){
//     alert('Максимальне число:' + a);
// }else if (a < b){
//     alert('Максимальне число:' + b);
// }else{
//     alert('числа рівні');
// }
//-------------------------------------------------------------------------//

//- є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//  буде присвоювати змінній х значення "default"  якщо ви намагаєтесь присвоїти в неї falsy-значення (хибноподібні, тобто ті, які приводиться до false, а це 0 null undefined і тд).//
let x = false;
if (!x) {
    x = "default";
}
console.log(x);
//-------------------------------------------------------------------------//
//За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".//
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
if (coursesAndDurationArray[0].monthDuration > 5) {
    console.log('Супер');
}
if (coursesAndDurationArray[1].monthDuration > 5) {
    console.log('Супер');
}
if (coursesAndDurationArray[2].monthDuration > 5) {
    console.log('Супер');
}
if (coursesAndDurationArray[3].monthDuration > 5) {
    console.log('Супер');
}
if (coursesAndDurationArray[4].monthDuration > 5) {
    console.log('Супер');
}
if (coursesAndDurationArray[5].monthDuration > 5) {
    console.log('Супер');
}
//-------------------------------------------------------------------------//