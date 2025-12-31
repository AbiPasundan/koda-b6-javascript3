// memcari 20 built in method
// mencari 5 built in functioon
// jelaskan fungsi dari tiap-tiap method dan function yang ditemukan dengan menggunakan komentar
// berikan contoh penggunaannya

// Perbedaan built in function dan bui;lt in method 
// method selalu terkait dengan suatu objek dan dipanggil menggunakan notasi titik (.), sedangkan function berdiri sendiri dan dapat dipanggil secara langsung  

// 5 built in function
// 1. parseInt() 
// mengubah type data string ke integer
// console.log(typeof parseInt('123.21'))

// 2. isNaN(value)
// func ini akan mengkonversi value ke dalam tipe data number kemudian mengecek apakah tipe data tersebut number atau bukan jika tipe datanya adalah number maka akan mengembalikan nilai false jika tipe datanya selain dari number maka akan mengembalikan nilai true 
// contoh dibawah isNaN() di isi dengan string 1, "1" yang dilakukan isNaN() adalah mengoknversi string ke number dan mengecek apakah 1 adalah number atau bukan karena 1 adalah number maka dia me return kan nilai false 
// console.log(isNaN("1"));


// 3. Number() 
// berfungsi untuk mengubah tipe data ke dalam number 
// Contoh dibawah pada variable a dan b yang isinya string akan diubah menjadi number var a type datanya akan berubah menjadi number dan var b akan menjadi number juga tetapi nilainya akan NaN
// sedangkan jika tipedatanya selain dari string maka akan masing masing tipe data di js memiliki nilai defaultnya sendiri. Seperti  variable c yang isinya true memiliki nilai 1 mirip dengan trhuty dan falshy
// const a = Number("12")
// const b = Number("Hellow")
// const c = Number(true)
// console.log(typeof a, b, c);


// 4. typeof()
// mMengecek type data 
// console.log(typeof("as"));
// console.log(typeof(123));
// console.log(typeof(NaN));

// 5. parseFloat(string)
// mengubah type data string ke number dengan number floating point atau dengan anggka desimal 
// console.log(parseFloat('123'))
// console.log(parseFloat('asasasas'))



// 20 method 
// 1. funcion Number.isFinite()
// function ini mengecek apakah angka terbatas atau tidak dan juga me return kan nilai boolean true / false
// contoh kode: 
// console.log(Number.isFinite(1 / 0));
// nilainya false karena 1 tidak bisa dibagi 0
// console.log(Number.isFinite(10 / 5));
// nilainya true karena 10 dibagi 5 hasilnya 2
// console.log(Number.isFinite(0 / 0));
// nilainya false karena 0 tidak bisa dibagi 0

// 2. Object.assign(target, sumber1, sumber2 ...)
// Object.assign(target) berfungsi untuk menggabungkan dan mengganti value pada object
// contoh obj dan obj1 memiliki dua key yang sama yaitu b dan c maka secara otomati value dari key b dan key c yang ada di obj akan diganti dengan ke value yang ada di obj 2
// dan key d yang ada di obj2 akan di tambahkan
// const obj = {a: 1, b: 2, c: 9}
// const obj2 = {d: 1, b: 11, c: 111}
// const newObj = Object.assign(obj, obj2)
// console.log(newObj);

// 3. Object.freeze(obj)
// berfungsi untuk membekukan object sehingga object tidak dapat diubah
// contoh dibawah Obeject obj di bekukan Object.freeze(obj); dan diubah obj.prop = 33;  maka obj.prop = 33; ini tidak akan dapat mengubah key dari prop karena sudah di Object.freeze(obj);
// const obj = {
//   prop: 42,
// };
// Object.freeze(obj);
// obj.prop = 33;
// console.log(obj.prop);

// 4. Object.is()
// berfungsi untuk membandingan dua buah type data beserta valuenya 
// kalau di operasi perbandungan ini sama dengan ===
// console.log(Object.is("1", 1));
// console.log(Object.is(NaN, NaN));
// console.log(Object.is(-0, 0));
// console.log(Object.is(-0, 0));

// 5. Object.seal();
// seperti namanya seal mengunci properti object supaya tidak bisa dihapus tapi value dari sebuah properti masih bisa diubah
// const object = {
//   foo: 42,
// };
// Object.seal(object);
// object.foo = 33;
// console.log(object.foo);
// delete object.foo;
// console.log(object.foo);

// 6. Object.values()
// Mereturnkan array yang berisi semua value yang ada di dalam object tanpa membawa key dari object
// const object = {
//   a: "some string",
//   b: 42,
//   c: false,
// };
// const arrObj = Object.values(object)
// console.log(object);
// console.log(arrObj);

// 7. concat()
// menggabungkan dua buah array dan me return kan array dari gabungan beberapa array
// const array1 = ["a", "b", "c"];
// const array2 = ["d", "e", "f"];
// const array3 = ["g", "h", "i"];
// const array4 = array1.concat(array2);
// const array5 = array1.concat(array2).concat(array3)

// console.log(array4);
// console.log(array5);

// 8. Math.PI()
// Menampilkan angka phi 
// console.log(Math.PI);


// 9. Math.max()
// mencari angka yang paling banyak dan mereturnkannya
// tapi jika angkanya tak terbatasakan mengemalikan Infinity
// const array = [1, 3, 2];
// console.log(Math.max(...array));

// const infinity = 1 / 0
// console.log(Math.max(infinity));

// 10. Math.min()
// mencari angka yang paling rendah dan mereturnkannya
// tapi jika angkanya tak terbatasakan mengemalikan Infinity
// const array = [2, 3, 1];
// console.log(Math.min(...array));
// const inf = 1 / 0
// console.log(inf);

// 11. reverse();
// membalikan nilai array
// const array = [2, 3, 1];
// console.log(array.reverse) // [1, 3, 2]

// 12. toSorted()
// mengurutkan array jka isi array adalah string maka akan di urutkan berdasarkan alphabet jika number maka akan di urutkan berdasarkan nilai terkecail 
// const months = ["Mar", "Jan", "Feb", "Dec"];
// const sortedMonths = months.toSorted();
// console.log(sortedMonths); // ['Dec', 'Feb', 'Jan', 'Mar']
// console.log(months); // ['Mar', 'Jan', 'Feb', 'Dec']

// const values = [1, 10, 21, 2];
// const sortedValues = values.toSorted((a, b) => a - b);
// console.log(sortedValues); // [1, 2, 10, 21]
// console.log(values); // [1, 10, 21, 2]

// 13. findLast()
// menghitung array secara terbalik dan mengembalikan return yang kita tentukan dlam proses
// const array = [5, 12, 50, 130, 44];
// const found = array.findLast((element) => element > 45);
// console.log(found);

// 14. shift()
// menghapus nilai pertama dari array dan mengembalikan nilai yang dihapus 
// const array = [1, 2, 3];
// const firstElement = array.shift();
// console.log(array);
// console.log(firstElement);

// 15. create()
// Membuat object berdasarkan object yang telah ada 
// const person = {
//   isHuman: false,
//   printIntroduction() {
//     console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
//   },
// };
// const me = Object.create(person);
// me.name = "Matthew"
// me.isHuman = true
// me.printIntroduction();

// 16. values()
// membuat array berdasarkan value dari sebuah object
// const object = {
//   a: "some string",
//   b: 42,
//   c: false,
// };
// console.log(Object.values(object));

// 17. map() 
// me return an array baru berdasarkan array yang telah di proses oleh .map()
// const array = [1, 4, 9, 16];
// const mapped = array.map((x) => x * 2);
// console.log(mapped);

// 18. pop()
// menghapus dan me returnkan array terakhir
// const plants = ["broccoli", "cauliflower", "cabbage", "kale", "tomato"];
// console.log(plants.pop());
// console.log(plants);
// plants.pop();
// console.log(plants);

// 19. .length
// menghitung panjang dari sebuah array atau sebuah value yang bisa dihitung 
// const clothing = ["shoes", "shirts", "socks", "sweaters"];
// console.log(clothing.length);

// 20. valueOf()
// mengecek suatu value apakah true atau false dan me returnkan nilai value atau fals
// const x = new Boolean();
// console.log(x.valueOf());
// const y = new Boolean("Mozilla");
// console.log(y.valueOf());