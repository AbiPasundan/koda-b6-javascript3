let person = [
    {
        nama: "",
        wait: ""
    },
    {
        nama: "y",
        wait: 4
    },
    {
        nama: "z",
        wait: 3
    },
    {
        nama: "a",
        wait: 2
    },
    {
        nama: "b",
        wait: 9
    },
]

function queue(data) {
    let index = 0
    function start() {
        return new Promise((resolve, reject) => {
            const person = data[index]
            if(person) {
                console.log("Menunggu antrian");
                setTimeout(() => {
                    if (person[index] !== undefined) {
                        console.log(`pesanan ${person.nama} sudah siap`);
                        index += 1
                        resolve(start())
                    } else {
                        reject("data undifine")
                    }
                }, person.wait*1000);
            } else {
                reject("data tidak ditemukan")
            }
        })
    }
    return start()
}

queue(person).then(() => {
    // 
}).catch(err => {
    console.log(err);
})