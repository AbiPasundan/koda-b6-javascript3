let data = [
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

let nama = []
let wait = []

for (let i = 0; i < data.length; i++) {
    nama.push(data[i].nama)
    wait.push(data[i].wait)
}

console.log(nama);

for (let j = 0; j < nama.length; j++) {
    function antri(name, time) {

        // for (let q = 0; q < data.length; q++) {
        //     wait.push(data[q].wait)
        // }

        setTimeout(() => {
            console.log("\nmenunggu antrian");
            if (wait[j]) {
                console.log(`${name} pesanan kamu selesai dalam ${time[j]}`);
            }
        }, time);
        // console.log(`${data[j].nama} pesanan kamu selesai dalam ${wait[j]}`);
    }
    antri(data[j].nama, wait)
}



// program antri
// const datas = [
//     {
//         nama: "Juli",
//         wait: 5,
//     },
//     {
//         nama: "Julaini",
//         wait: 4,
//     },
//     {
//         nama: "Julian",
//         wait: 9,
//     },
//     {
//         nama: "Julianti",
//         wait: 4,
//     },
//     {
//         nama: "Juliana",
//         wait: 6,
//     },
//     {
//         nama: "Julianto",
//         wait: 9,
//     },
//     {
//         nama: "alJuli",
//         wait: 9,
//     }
// ]
// // buat program antri sesuai waktu tunggu nya
// // output info menunggu antrian
// // setelah waktu tunggu buat notif pesanan punya nama sudah selesai
// // output info menunggu antrian

// let antrian = 0
// function pesanMakanan(nama,waktu,callback){
//     console.log(`Menunggu antrian...`)
//     setTimeout(
//         ()=>{
//             console.log(`\n====Halo ${nama} pesananmu sudah siap! silahkan untuk menuju pengambilan====\n`)
//             antrian += 1
//             if(antrian < datas.length){
//                 // console.log(antrian)
//                 callback(datas[antrian].nama, datas[antrian].wait, callback)
//             }
//         },
//         waktu * 1000
//     )
// }

// pesanMakanan(datas[antrian].nama, datas[antrian].wait,pesanMakanan)