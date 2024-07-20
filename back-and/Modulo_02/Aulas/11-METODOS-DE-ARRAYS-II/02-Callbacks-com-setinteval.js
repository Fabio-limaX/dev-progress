//setInterval --> executa sem parar com tempo predefinido

setInterval(() => {
   console.log('Ola estudantes'); 
}, 1000);

let contador = 10

function bomba() {
    console.log(contador);
    contador--

    if (contador === 0) {
        console.log(contador);
        console.log('Booom!');
        clearInterval(id)
    }
}

const id = setInterval(bomba, 1000)