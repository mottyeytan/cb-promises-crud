const fs = require('fs');

function readData(){
    fs.readFile('db/db.txt', 'utf-8', (err, data)=>{
        if(err){
            console.log("err meesege", err.message);
            return;
        }

        const convert = JSON.parse(data)
        console.table(convert)
        
    })
}


module.exports = {readData}