const fs = require("fs")

function createStudent(student) {
    fs.readFile('db/db.txt','utf-8', (err, data) => {
        if (err){
            console.log(err.message);
            return;
        }
        
        // parse the data inside the file to array
        let dataArray;
        try{
            dataArray = JSON.parse(data);
        }
        catch (er) {
            dataArray = [];
        }

        //add to the list the obj
        dataArray.push(student)

        fs.writeFile('db/db.txt', JSON.stringify(dataArray), (err)=>{
            if(err){
                console.log(err.message)
                return
            }
            console.log("student has added succesfuly")
        })
    
    })
    
}

module.exports = {createStudent}
