// The filter() method of Array instances creates a shallow copy of a portion of a given array, filtered down to just the elements from the given array that pass the test implemented by the provided function.

const arr = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const positivenumbers = arr.filter((num) => {
    return num >= 0;

});

console.log(positivenumbers);

const evennumbers = arr.filter((num) => {
    return num % 2 === 0 ;

});

console.log(evennumbers);

const fruits = ["apple", "banana", "cherry", "date", "grape", "mango", "kiwi", "orange", "papaya", "peach"];

function fruitItem(arr, quary) {
    return arr.filter((el) => el.toLowerCase().includes(quary.toLowerCase()));
}

console.log(fruitItem(fruits, "ac"));
console.log(fruitItem(fruits, "an"));