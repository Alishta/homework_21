// Завдання 1.
// Реалізувати рекурсивну функцію, яка зводить число в ступінь.

function exponentiation(num, degree) {
    return (degree == 1) ? num : num * exponentiation(num, degree - 1);
}
console.log(exponentiation(3, 4));

// Завдання 2. Реалізуйте функцію removeElement
// Реалізуйте функцію removeElement(array, item), щоб видалити елемент item з масиву array.

function removeElement (array, item) {
    return array.filter(element => element !== item);
}

const array = [1, 2, 3, 4, 5, 6, 7];
const newArray = removeElement(array, 5);
console.log(newArray);

// Завдання 3. Реалізуйте функцію generateKey

// Реалізуйте функцію generateKey(length, characters), яка повертає рядок випадкових символів із набору characters довжиною length.

const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';

function generateKey(length, characters) {
    let result = ' ';
    const charactersLenght = characters.length;

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charactersLenght);
        result += characters.charAt(randomIndex);
    }
    return result;
}

const key = generateKey(16, characters);
console.log('Your key ' + key);