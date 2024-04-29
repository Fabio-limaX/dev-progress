const listafrutas: string[] = ['Banana', 'Maça', 'Abacaxi', 'Pera', 'Uva', 'Manga']


for (let item of listafrutas) {
    if (item === 'pera') {
        break
    }
    console.log(item)
}

for (let item of listafrutas) {
    if (item === 'pera' || item === 'uva') {
        continue
    }
    console.log(item)
}

