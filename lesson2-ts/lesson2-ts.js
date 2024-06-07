// Масиви та об'єкти:
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
// const array: any[] = ['hello', 42, true, null, undefined, { name: 'John' }, [1, 2, 3], 'world', 3.14, false];
//
// for (let i = 0; i < array.length; i++) {
//     console.log(`Елемент ${i}:`, array[i]);
// }
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title, pageCount, genre.
// interface Book {
//     title: string;
//     pageCount: number;
//     genre: string;
// }
//
// const book1: Book = {
//     title: 'To Kill a Mockingbird',
//     pageCount: 281,
//     genre: 'Fiction'
// };
//
// const book2: Book = {
//     title: '1984',
//     pageCount: 328,
//     genre: 'Dystopian'
// };
//
// const book3: Book = {
//     title: 'Moby-Dick',
//     pageCount: 635,
//     genre: 'Adventure'
// };
//
// console.log(book1);
// console.log(book2);
// console.log(book3);
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title, pageCount, genre, authors. Поле "автори" - являється масивом. Кожен автор має поля name та age.
// class Author {
//     constructor(public name: string, public age: number) {}
// }
//
// class Book {
//     constructor(public title: string, public pageCount: number, public genre: string, public authors: Author[]) {}
// }
//
// const author1 = new Author('Harper Lee', 89);
// const book1 = new Book('To Kill a Mockingbird', 281, 'Fiction', [author1]);
//
// const author2 = new Author('George Orwell', 46);
// const book2 = new Book('1984', 328, 'Dystopian', [author2]);
//
// const author3 = new Author('Herman Melville', 72);
// const book3 = new Book('Moby-Dick', 635, 'Adventure', [author3]);
//
// console.log(book1);
// console.log(book2);
// console.log(book3);
// - Створити масив з 10 об'єктами які описують сутність "користувач". Поля: name, username, password. Вивести в консоль пароль кожного користувача
// class User {
//     constructor(public name: string, public username: string, public password: string) {}
// }
//
// const users: User[] = [
//     new User('Ivan', 'ivan123', 'qwerty123'),
//     new User('Maria', 'maria456', 'password456'),
//     new User('Petro', 'petro789', 'abc123'),
//     new User('Oleksandr', 'oleksandr101', 'pass123'),
//     new User('Olga', 'olga202', 'qwerty456'),
//     new User('Tetyana', 'tetyana303', 'abc456'),
//     new User('Andriy', 'andriy404', 'pass456'),
//     new User('Natala', 'nataliya505', 'qwerty789'),
//     new User('Vasyl', 'vasyl606', 'abc789'),
//     new User('Svitlana', 'svitlana707', 'password789')
// ];
//
// users.forEach(user => {
//     console.log(`${user.name}: ${user.password}`);
// });
//
// - описати масив, в якому буде зберігатись інформація про температуру вранці, вдень і ввечері за термін в 7 днів. Як зробити цей масив - вам потрібно подумати. Нормальних варіантів опису - 2. Варіант, коли в вас буде одновимірний масив з 21 значенням вичключаємо одразу
//
var temperatureArray = [
    [18, 24, 20],
    [17, 22, 19],
    [19, 25, 21],
    [20, 26, 22],
    [21, 27, 23],
    [22, 28, 24],
    [23, 29, 25]
];
console.log(temperatureArray[1][1]);
// Логічні розгалуження:
//     - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте скрипт при a, що дорівнює 1, 0, -3
var x;
x = 1;
if (x !== 0) {
    console.log('Done');
}
else {
    console.log('Error');
}
x = 0;
if (x !== 0) {
    console.log('Done');
}
else {
    console.log('Error');
}
x = -3;
if (x !== 0) {
    console.log('Done');
}
else {
    console.log('Error');
}
// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
var time = 40;
var quarter;
if (time >= 0 && time <= 15) {
    quarter = 1;
}
else if (time >= 15 && time <= 30) {
    quarter = 2;
}
else if (time >= 30 && time <= 45) {
    quarter = 3;
}
else if (time >= 45 && time <= 59) {
    quarter = 4;
}
console.log(quarter);
// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
var day = 26;
var decade;
if (day >= 1 && day <= 10) {
    decade = '1';
}
else if (day >= 11 && day <= 20) {
    decade = '2';
}
else if (day >= 21 && day <= 31) {
    decade = '2';
}
console.log("".concat(day, " ").concat(decade));
// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
var dayNumber = 3;
var plan;
switch (dayNumber) {
    case 1:
        plan = 'Monday';
        break;
    case 2:
        plan = 'Tuesday';
        break;
    case 3:
        plan = 'Wednesday';
        break;
    case 4:
        plan = 'Thursday';
        break;
    case 5:
        plan = 'Friday';
        break;
    case 6:
        plan = 'Saturday';
        break;
    case 7:
        plan = 'Sunday';
}
console.log(plan);
//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох.
//         Також потрібно врахувати коли введені рівні числа.
//
var number1 = 7;
var number2 = 4;
var maxNumber;
if (number1 > number2) {
    maxNumber = number1;
}
else if (number2 > number1) {
    maxNumber = number2;
}
else {
    maxNumber = number1;
}
console.log(maxNumber);
//     - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null і т.д включно). Напишіть код який,
//         буде присвоювати змінній х значення "default" якщо ви намагаєтесь присвоїти в неї falsy-значення (хибно подібні, тобто ті, які приводиться до false, а це 0 null undefined і т.д).
//
var x = false;
if (!x) {
    x = "default";
}
console.log(x);
//
// - з файлу arrays.js (лежить в папці 2023 plan) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".
