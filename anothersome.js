const numbers = [2, 4, 5, 6, 7, 8, 2];

const someNumbers = numbers.some((number) => number % 2 === 0); // we can find which data we have

//? console.log(someNumbers)

const currentRole = ["guest ", "editor"];
const mainRole = ["admin", "manager "];

const role = mainRole.some((exceptRole) => currentRole.includes(exceptRole));

//? console.log(role)

// const arr = Array.from({ length : 5 }).fill("") // we also can create empty data here

// const arr = Array.from({ length : 6}, (value, i) => i) // "_" that means value | "i" means index number

//! another example here [ for range ]
// const arr = Array.from([1, 2, 3], (value, i) => value * value) // "_" that means value | "i" means index number

// console.log(arr)

//  important note

// const arr = (start, stop, step) =>
//     Array.from({ length: Math.ceil((stop - start) / step) }, (_, i) => start + i);

// console.log(arr);

// const range = (start, stop, step) =>
//     Array.from({ length: Math.ceil((stop - start) / step) },
//     (_, i) => start + i * step
// );

// const testRange = (range(1, 10, 2))

// console.log(testRange)

const range = (start, stop, step) =>
    Array.from(
    { length: Math.ceil((stop - start) / step) },
    (value, i) => start + i * step
);


// const testRange = range(1, 100, 2)

const hasEven = range(1, 10, 1).some((element) => element % 2 === 0)

// console.log(testRange)

console.log(hasEven);