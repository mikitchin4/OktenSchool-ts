// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами, а і б

// const calculateRectangleArea = (a: number, b: number): number => a * b;
//
// const Area: number = calculateRectangleArea(7, 5);
// console.log(`${Area}`);

// - створити функцію яка обчислює та повертає площу кола з радіусом r

// const calculateCircleArea = (r: number): number => 3.14 * r ** 2;
//
// const area: number = calculateCircleArea(5);
// console.log(`${area}`);

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіусом r

// const calculateCylinderSurfaceArea = (r: number, h: number): number => 2 * 3.14 * r * h;
//
// const surfaceArea: number = calculateCylinderSurfaceArea(5, 7);
// console.log(`${surfaceArea}`);

// - створити функцію яка приймає масив та виводить кожен його елемент


// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

// const createParagraph = (text: string): HTMLParagraphElement => {
//     const paragraph = document.createElement('p');
//     paragraph.textContent = text;
//     return paragraph;
// };
//
// const text: string = 'i love okten school';
// const paragraph: HTMLParagraphElement = createParagraph(text);
// document.body.appendChild(paragraph);

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

// function createListWithSameItems(text2: string): HTMLUListElement {
//     const ul = document.createElement('ul');
//     for (let i: number = 0; i < 3; i++) {
//         const li = document.createElement('li');
//         li.textContent = text2;
//         ul.appendChild(li);
//     }
//     return ul;
// }
//
// const text2: string = 'i love okten school';
// const list: HTMLUListElement = createListWithSameItems(text2);
// document.body.appendChild(list);

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
//   Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

// function createListWithItems(text: string, count: number): HTMLUListElement {
//     const ul = document.createElement('ul');
//     for (let i = 0; i < count; i++) {
//         const li = document.createElement('li');
//         li.textContent = text;
//         ul.appendChild(li);
//     }
//     return ul;
// }
//
// const text: string = 'i love okten school';
// const itemCount: number = 3;
// const list: HTMLUListElement = createListWithItems(text, itemCount);
// document.body.appendChild(list);

// - створити функцію яка приймає масив примітивних елементів (числа, стрінги, булеві), та будує для них список

// function createListFromArray(arr: (number | string | boolean)[]): HTMLUListElement {
//     const ul = document.createElement('ul');
//     arr.forEach(item => {
//         const li = document.createElement('li');
//         li.textContent = String(item);
//         ul.appendChild(li);
//     });
//     return ul;
// }
//
// const primitiveArray: (number | string | boolean)[] = [1, 'two', true];
// const list: HTMLUListElement = createListFromArray(primitiveArray);
// document.body.appendChild(list);

// - створити функцію яка приймає масив об'єктів з наступними полями id, name, age, та виводить їх в документ. Для кожного об'єкту окремий блок.

// interface Person {
//     id: number;
//     name: string;
//     age: number;
// }
//
// function displayPersons(persons: Person[]): void {
//     const container = document.createElement('div');
//     persons.forEach(person => {
//         const personBlock = document.createElement('div');
//         personBlock.innerHTML = `
//             <p>ID: ${person.id}</p>
//             <p>Name: ${person.name}</p>
//             <p>Age: ${person.age}</p>
//         `;
//         container.appendChild(personBlock);
//     });
//     document.body.appendChild(container);
// }
//
// const persons: Person[] = [
//     { id: 1, name: 'John', age: 30 },
//     { id: 2, name: 'Alice', age: 25 },
//     { id: 3, name: 'Bob', age: 35 }
// ];
// displayPersons(persons);

// - створити функцію яка повертає найменьше число з масиву

// function findMinNumber(arr: number[]): number {
//     if (arr.length === 0) {
//         throw new Error('Масив порожній');
//     }
//     let min = arr[0];
//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] < min) {
//             min = arr[i];
//         }
//     }
//     return min;
// }
//
// const numbers: number[] = [10, 5, 8, 3, 15, 2];
// const minNumber: number = findMinNumber(numbers);
// console.log(minNumber);

// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13

// function sum(arr: number[]): number {
//     return arr.reduce((acc, curr) => acc + curr, 0);
// }
//
// const numbers: number[] = [1, 2, 10];
// const total: number = sum(numbers);
// console.log(total);

// - створити функцію swap(arr,index1,index2). Функція міняє місцями значення у відповідних індексах

// function swap<T>(arr: T[], index1: number, index2: number): void {
//     if (index1 < 0 || index1 >= arr.length || index2 < 0 || index2 >= arr.length) {
//         throw new Error('Невірний індекс');
//     }
//     const temp: T = arr[index1];
//     arr[index1] = arr[index2];
//     arr[index2] = temp;
// }
//
// const myArray: number[] = [1, 2, 3, 4, 5];
// swap(myArray, 1, 3);
// console.log(myArray);