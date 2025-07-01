function parseInput(input) {
    let cleanInput;
    try {
        
        let cleanInput = input.trim();
        
        cleanInput = cleanInput.replace(/(\w+):/g, '"$1":');
        
        cleanInput = cleanInput.replace(/:\s*([a-zA-Z][a-zA-Z0-9]*)\s*([,}])/g, ':"$1"$2');
        
        return JSON.parse(cleanInput);
    } catch (error) {
        console.error("Invalid format:", error.message);
        console.log("Input was:", input);
        console.log("Processed to:", cleanInput);
        return {};
    }
}
module.exports = {parseInput}

console.log(parseInput( "{id:1, name:motty, grade:13}"))