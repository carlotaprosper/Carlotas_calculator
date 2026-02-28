let operation = "";

// show the number or operator clicked on the screen
function show(x){
    // conditions so certain operators can´t go together (ex. ++, +* +/ +^...)
    let condition1 = operation.endsWith("+") || operation.endsWith("-") || operation.endsWith("*") || operation.endsWith("/") || operation.endsWith("^");
    let condition2 = x.includes("+") || x.includes("*") || x.includes("/") || x.includes("^");
    
    // implementation of operators restriction
    if (condition1 && condition2){
        operation = operation;
    } else{
        operation = operation + x; // if its how its supposed to be I upload the operation
    }
    
    // show the operation
    document.getElementById('screen').innerHTML = operation;
}

// when = is clicke all the calculations happen
function calculate(){

    // replace all human operators to ones undertansded by the computer (/100 and **)
    let temp = operation.replaceAll("%", "/100").replaceAll("^", "**");
    // replace all operators that worked with negative numbers so later the - its not separated
    temp = temp.replaceAll("*-", "*n").replaceAll("/-", "/n").replaceAll("**-", "**n");

    // change all the - to +- so when the operation its split by + we end up with less operations
    let op2 = temp.replaceAll("-", "+-");
    let additions = op2.split("+"); // split the operation by + (less strict operator)

    // .map applies a specific function to each element of additions
    let add_results = additions.map(addt => {

        if (addt === "") return 0;

        // clean all the n´s with -
        let clean = addt.replaceAll("n", "-");

        // search for power operators
        if (clean.includes("**")) {
            // solve the power splitting by ** and return the result
            return power(clean.split("**"));
        }

        // search for multiplication operator
        if (clean.includes("*")){
            // split the operation by *
            let pieces = clean.split("*");

            // apply a search for divisions in the multiplication split
            let cleanPieces = pieces.map(piec => {
                if (piec.includes("/")){
                    return divide(piec.split("/")); // return the division result
                }
                return Number(piec); // return of the pieces
            });
            return multiply(cleanPieces); // return multiplication results
        }

        // search for division operator
        if (clean.includes("/")){
            // return the division result
            return divide(clean.split("/"));
        }

        return Number(clean);
    });
        // final result of all functions applied
        let result = sum(add_results);

    document.getElementById('screen').innerHTML = result;
    operation = result.toString(); // the calculator is able to continue operating
}

// function sum (sums each number of the given array)
function sum(nums) { 
    return nums.reduce((a, b) => Number(a) + Number(b), 0);
}

// function minus (substracts each number of the given array)
function minus(nums){
    return nums.reduce((a, b) => Number(a) - Number(b));
}

// function multiply (multiplies each number of the given array)
function multiply(nums){
    return nums.reduce((a, b) => Number(a) * Number(b), 1);
}

// function divide (divides each number of the given array)
function divide(nums){
    return nums.reduce((a, b) => Number(a) / Number(b));
}

// function power (powers a number by another)
function power(nums){
    return nums.reduce((a, b) => Math.pow(Number(a), Number(b)));
}

// function to clear the output
function clearOutput(){
    operation = ""; // replaces the operation with nothing ("")
    
    document.getElementById('screen').innerHTML = "0";
}

// function to delete last thing clicked
function clearOne(){
    // replaces the operation with one less element
    operation = operation.slice(0, -1);
    
    document.getElementById('screen').innerHTML = operation;
}