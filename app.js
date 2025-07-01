import {readFile, writeFile, appendFile} from "fs"
import {createInterface} from "readline"


import {createStudent} from "./modules/create.js"

console.log("welcome to school management system")
console.log("choose from the following options:")
console.log("1: add student data to the text file")
console.log("2: read student data from the text file")
console.log("3: update student data from the text file")
console.log("4: delete student data from the text file")


const rl = createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question("inpout your answer: ", (option) => {
    if(option === "1"){
        rl.question("enter student info: ", (input) => {
            createStudent(input)
            rl.close();
        })
    }
})
// createStudent({name: "John", age: 20, class: "10th"})




