//todo Data aggregation in array 

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

// todo first check the empty object 
// todo then I have to check the value is already initialize or not
// todo if the value is already exist then increment the value 
// todo if the value is not initialize then I have to initialize the value  


const count = surveyResponses.reduce((table, response) => {

    console.log(table , " : ", response)

    if (table[response]) {
        table[response] = ++table[response] // increment the value here
    } else {
        table[response] = 1
    }

    return table;

}, {})

console.log(count);