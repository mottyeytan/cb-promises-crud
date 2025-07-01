const { parseInput } = require('./fileHelper.js');

const fs = require("fs")

function createStudent(student) {
    fs.readFile('db/db.txt','utf-8', (err, data) => {
        if (err){
            console.log(err.message);
            return;
        }
        const convertInputToObj = parseInput(student)
        // parse the data inside the file to array
        let dataArray;
        try{
            dataArray = JSON.parse(data);
            // if (dataArray.length > 0 && typeof dataArray[0] === 'string') {
            //     dataArray = dataArray.map(str => parseInput(str));
            // }
        }
        catch (er) {
            dataArray = [];
        }

        //add to the list the obj
        dataArray.push(convertInputToObj)

        fs.writeFile('db/db.txt', JSON.stringify(dataArray, null, 2), (err)=>{
            if(err){
                console.log(err.message)
                return
            }
            console.log("student has added succesfuly")
        })
    
    })
    
}

module.exports = {createStudent}
