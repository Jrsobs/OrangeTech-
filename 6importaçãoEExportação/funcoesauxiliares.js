function print(texto){
    console.log (texto);
};

const entradas = [15,50,10,98,23]

let i = 0;

function gets(){
    const valor = entradas[i];
    i++;
    return valor;
};


module.exports = {print,gets}

