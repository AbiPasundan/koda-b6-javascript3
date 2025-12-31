// buat 
// punya var data isiny arr of obj 

data = [
    {
        nama: "x",
        wait: 8
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

// let result = {};
// for (let i = 0; i < data.length; i++) {
//   result[data[i].nama] = data[i].wait
// }

// console.log(result);

let nama = []
let wait = []

for (let i = 0; i < data.length; i++) {
    nama.push(data[i].nama)
    wait.push(data[i].wait)
}


for (let j = 0; j < wait.length; j++) {


    function antri(time) {
        if (wait[j]) {
            // console.log("menunggu antrian");
        }


        setTimeout(() => {
            if (wait[j]) {
                console.log("menunggu antrian");
            }
            console.log(`${nama[j]} pesanan kamu selesai dalam ${wait[j]}`);
        }, time);
    }

    
    antri(data.length)
}

