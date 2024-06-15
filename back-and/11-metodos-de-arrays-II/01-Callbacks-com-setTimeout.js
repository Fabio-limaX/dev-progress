//SetTimeout --> executa algo, em um tempo predefinido

setTimeout(() => {
    console.log('Imprimiu a arrow function');
}, 5000);

setTimeout(function() {
    console.log('Imprimiu a function tradicional');
}, timeout);