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

    console.log(table, " : ", response)

    if (table[response]) {
        table[response] = ++table[response] //? Here I also check the value available or not and if it's available there I should add the value and increment the value her
    } else {
        table[response] = 1 //? The data is not available then I should initialize with one
    }

    return table;

}, {})

console.log(count);