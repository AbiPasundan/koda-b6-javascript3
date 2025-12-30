let data = ["mika", "miku", "miya", "mandor"]

let choosen = []

function countHasil(array = [], kata) {
    return console.log(`siswa ${kata} adalah sebanyak ${array.length}`)
}

function findStuden(kata = "", countResults) {
    
    data.forEach(item => {
        kata = kata.toLocaleLowerCase()
        if(item.includes(kata) === true){
            choosen.push(item)
        }
    })

    countResults(choosen, kata)
    return choosen
}

console.log(findStuden("Mi", countHasil))