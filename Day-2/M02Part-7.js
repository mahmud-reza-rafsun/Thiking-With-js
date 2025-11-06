// input

const surveyResponse = [
    "A",
    "B",
    "C",
    "A",
    "C",
    "A",
    "B",
    "C",
    "A",
    "A",
    "B",
    "C",
    "A",
];

// TODO initiate empty object 
// TODO check if the response already exist or not
// TODO if it exists then increment the Count
// TODO if not the ninitialze it with 1

const count = surveyResponse.reduce((table, response) => {
    // if (table[response]) {
    //     table[response] = table[response] + 1;
    // } else {
    //     table[response] = 1;
    // }
    table[response] = (table[response] || 0) + 1;
    return table;
}, {});

console.log(count);