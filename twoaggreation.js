// //todo Data aggregation in array

// const surveyResponses = [
//     "A",
//     "C",
//     "B",
//     "A",
//     "B",
//     "B",
//     "C",
//     "A",
//     "B",
//     "D",
//     "A",
//     "C",
//     "B",
//     "A",
//     "D",
//     "B",
//     "C",
//     "A",
//     "B",
//     "D",
//     "C",
//     "A",
//     "B",
//     "A",
//     "C",
//     "B",
//     "D",
//     "A",
//     "B",
//     "C"
// ];

// // todo first check the empty object
// // todo then I have to check the value is already initialize or not
// // todo if the value is already exist then increment the value
// // todo if the value is not initialize then I have to initialize the value


// const count = surveyResponses.reduce((table, response) => {

//     console.log(table, response)

//     //todo readable code

//     // if (table[response]) {
//     //     table[response] = ++table[response]
//     // } else {
//     //     table[response] = 1
//     // }

//     // return table    //!! the best code is what you can understand and read also that's the best code for me

//     // todo [ here is the one liner of this code ]

//     table[response] = (table[response] || 0) + 1

//     return table

// }, {})

// console.log(count);



const surveyResponses = [
    "A",
    "C",
    "B",
    "A",
    "B",
    "B",
    "C",
    "A",
    "B",
    "D",
    "A",
    "C",
    "B",
    "A",
    "D",
    "B",
    "C",
    "A",
    "B",
    "D",
    "C",
    "A",
    "B",
    "A",
    "C",
    "B",
    "D",
    "A",
    "B",
    "C"
];

const repeatData = surveyResponses.reduce((table, response) => {

    if (table[response]) {
        table[response] = ++table[response]
    } else {
        table[response] = 1
    }

    return table
}, {})

console.log(repeatData);