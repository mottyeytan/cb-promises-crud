const { parseInput } = require('./fileHelper.js');

const fs = require('fs');

function readFilePromise(){
    return new Promise((res, rej) => {
        fs.readFile('db/db.txt', 'utf-8', (err, data)=>{
            if (err){
                rej(err);
            }else{
                res(data);
            }
            
        })
    })
}

function writeFilePromise(data){
    return new Promise((res, rej)=>{
        fs.writeFile('db/db.txt', data, (err)=>{
            if(err){
                rej(err)
            }else{
                res();
            }
            
        })
    })
}

// function parseInput(input) {
//     const obj = {};
//     input.split(',').forEach(pair => {
//         let [key, value] = pair.split(':').map(s => s.trim());
    
//         obj[key] = value;
//     });
//     return obj;
// }


// console.log(parseInput("{name:shlomo}"))



function updateData(id, data){
    const userInputData = parseInput(data)

    readFilePromise()
        .then(c =>{
            let stringArray = JSON.parse(c)
            let convert = stringArray.map(str => parseInput(str))
            let found = false;
            
            for(let item of convert){
                if(parseInt(id) === item.id){
                    Object.keys(userInputData).forEach(key => {
                        item[key] = userInputData[key]; });
                    found = true;
                    break;
                }
            }

            if(found){
                let updatedStringArray = convert.map(obj => {
                    return `{id:${obj.id}, name:${obj.name}, grade;${obj.grade}}`;
                });
                
                return writeFilePromise(JSON.stringify(updatedStringArray))
            }
            else{
                throw new Error(`item with id ${id} not found`)
            }
    
        })
        .then(()=>{
            console.log("data updated succesfuly")
        })
        .catch(error => {
            console.error("error:", error)
        })
        
}

module.exports = {updateData}