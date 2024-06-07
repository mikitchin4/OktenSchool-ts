// - Створити змінні. Присвоїти кожному з них значення: 'hello', 'owu', 'com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
//     Вивести кожну змінну за допомогою: console.log
// const hello: string = 'hello';
// const owu: string = 'owu';
// const com: string = 'com';
// const ua: string = 'ua';
// const num1: number = 1;
// const num2: number = 10;
// const num3: number = -999;
// const num4: number = 123;
// const num5: number = 3.14;
// const num6: number = 2.7;
// const num7: number = 16;
// const isTrue: boolean = true;
// const isFalse: boolean = false;
//
// console.log(hello);
// console.log(owu);
// console.log(com);
// console.log(ua);
// console.log(num1);
// console.log(num2);
// console.log(num3);
// console.log(num4);
// console.log(num5);
// console.log(num6);
// console.log(num7);
// console.log(isTrue);
// console.log(isFalse);
//
// - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person (Не об'єкт, просто за допомоги конкатенації)
//
// Змінні для імені, по батькові та прізвища
// const firstName: string = 'Yura';
// const middleName: string = 'Repetylo';
// const lastName: string = 'Olegovych';
//
// const person: string = firstName + ' ' + middleName + ' ' + lastName;
//
// console.log(person);
// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//     let a = 100; let b = '100'; let c = true;
//
// let a: number = 100;
// let b: string = '100';
// let c: boolean = true;
//
// console.log(typeof a); // 'number'
// console.log(typeof b); // 'string'
// console.log(typeof c); // 'boolean'
// Додаткове для тих хто цікавився prompt`oм
// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками. та вивести в консоль
var firstName = prompt('name');
var middleName = prompt('firstName');
var age = prompt('age');
// Перевірка чи значення не null перед виведенням у консоль
if (firstName !== null && middleName !== null && age !== null) {
    console.log("Name ".concat(firstName));
    console.log("firstName ".concat(middleName));
    console.log("age ".concat(age));
}
else {
    console.log('Error');
}
