const url = "https://jsonplaceholder.typicode.com/users"

// fetch(url).then(response => {
//     if (!response.ok) {
//         throw new Error('Network response was not ok');
//     }
//     return response.json();
//         })
//         .then(data => {
//             console.log(data);
//         })
//         .catch(error => {
//             console.error('Error during fetch:', error); 
//         });


// fetch(url)
// .then(obj => {
//     // 1
//     // obj.text()
//     // .then(val => {
//     //     const data = JSON.parse(val)
//     //     console.log(data[0].id);
        
//     // })
//     // 2
//     // obj.json().then(data => {
//     //     console.log(data[0].name);
        
//     // })
// })


async function getData() {
    try {
        const res = await fetch(url)
        let data = await res.json()

        let dataEmail

        // data = data[2].email
        // console.log(data);
        // for (let i = 0; i < data.length; i++) {
        //     const element = data[i].email;
        //     console.log(element instanceof Array);
            
        //     dataEmail = element
        // }

        dataEmail = data.map(x => x.email.toUpperCase())
        

        console.log(dataEmail);
        


    } catch {
        console.log("Cannot fetch data");
    }
}

getData()