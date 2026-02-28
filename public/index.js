let operation = "";

// muestra la operacion por pantalla
function show(x){
    // corregir +- y -- solo se puede poner seguido *- y /-
    let condition1 = operation.endsWith("+") || operation.endsWith("-") || operation.endsWith("*") || operation.endsWith("/") || operation.endsWith("^");
    let condition2 = x.includes("+") || x.includes("*") || x.includes("/") || x.includes("^");
    
    if (condition1 && condition2){
        operation = operation;
    } else{
        operation = operation + x;
    }
    
    document.getElementById('screen').innerHTML = operation;
}

// funcion cuando se clicka en el =, calcular lo guardado en 'operation'
function calculate(){

    let temp = operation.replaceAll("%", "/100").replaceAll("^", "**");
    temp = temp.replaceAll("*-", "*n").replaceAll("/-", "/n").replaceAll("**-", "**n");

    let op2 = temp.replaceAll("-", "+-");
    let additions = op2.split("+");

    let add_results = additions.map(addt => {

        if (addt === "") return 0;

        let clean = addt.replaceAll("n", "-");

        if (clean.includes("**")) {
            // Resolvemos la potencia y actualizamos 'clean' para el siguiente paso
            return power(clean.split("**"));
        }

        if (clean.includes("*")){
            let pieces = clean.split("*");

            let cleanPieces = pieces.map(piec => {
                if (piec.includes("/")){
                    return divide(piec.split("/"));
                }
                return Number(piec);
            });
            return multiply(cleanPieces);
        }

        if (clean.includes("/")){
            return divide(clean.split("/"));
        }

        return Number(clean);
    });

        let result = sum(add_results);

    document.getElementById('screen').innerHTML = result;
    operation = result.toString(); // Para poder seguir operando con el resultado
}

function sum(nums) { 
    return nums.reduce((a, b) => Number(a) + Number(b), 0);
}

function minus(nums){
    return nums.reduce((a, b) => Number(a) - Number(b));
}

function multiply(nums){
    return nums.reduce((a, b) => Number(a) * Number(b), 1);
}

function divide(nums){
    return nums.reduce((a, b) => Number(a) / Number(b));
}

function power(nums){
    return nums.reduce((a, b) => Math.pow(Number(a), Number(b)));
}

// limpiar el output
function clearOutput(){
    operation = "";
    
    document.getElementById('screen').innerHTML = "0";
}

// limpiar ultimo numero puesto
function clearOne(){
    operation = operation.slice(0, -1);
    
    document.getElementById('screen').innerHTML = operation;
}