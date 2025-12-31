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


// setTimeout(() => {
//     console.log("123");
//     setTimeout(() => {
//         console.log(456);
//         setTimeout(() => {
//             console.log(789);
            
//         }, 300);
//     }, 200);
// }, 100);

// promise
// promise memberikan 3 parameter 
// new Promise((resolveOuter) => {
//   resolveOuter(
//     new Promise((resolveInner) => {
//       setTimeout(resolveInner, 1000);
//     }),
//   );
// });

const processAsync = (n) => {
    return new Promise((resolve, rejected) => {
        // do some
        if (typeof n !== "number") {
            rejected()
        } else {
            const loop = setInterval(() => {
                for (let x = 0; x < n.length; x++) {
                    console.log(x)
                }
            }, 1000);
            setTimeout(() => {
                clearInterval(loop)
                resolve()
            }, 5000)
        }

    })
}

// processAsync("3").then(()=>{
//     console.log("berakhir");
// }).catch(() => {
//     console.log("error");
    
// })


const antri = n => {
    return new Promise((res, rej) => {
        let nama = []
        let wait = []

        data.forEach(element => {
            // console.log(element.nama);
            if (element !== "string") {
                rej()
            } else {
                setTimeout(() => {
                    console.log(`${element.nama} selesai dalam waktu ${element.wait}`);
                }, element.wait)

                clearInterval()
                res()
        }

        });
    })
}

antri(data).then(() => {
    console.log("error");
}).catch(() => {
    let nama = []
    let wait = []
    
    for (let i = 0; i < data.length; i++) {
        nama.push(data[i].nama)
        wait.push(data[i].wait)
        console.log(`${nama[i]} beres dengan waktu ${wait[i]}`);
    }
    console.log("eres");
})    

