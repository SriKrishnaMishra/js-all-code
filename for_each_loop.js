const coding = ["python", "js", "c++","html"]

// coding.forEach(function (val) {

//     console.log(val);
// } )

coding.forEach((item) => {

    console.log(item);
} )

const myCode = [

    {
        language: "javascript",
        languagefile : "js"
    },

    {
        language: "c++",
        languagefile : "cpp"
    },

    {
        language: "sql",
        languagefile : "database"
    }
]

myCode.forEach( (item) => {

    console.log(item.language);
})