var a = 5;
let b = "kampus merdeka";
const nama = "Budi";
let terdaftar = true;
let lengkap_arr =[a, b, nama, terdaftar];
let asal = "indonesia";

function perkenalan () {
    console.log(
        "perkenalkan nama saya " +
        nama +
        " nomor urut " +
        a +
        " sekarang sedang mengikuti " +
        b +
        " berrasal dari " +
        asal

    );
    return perkenalan;
}

if (terdaftar === true) {
    console.log(nama + " terdaftar sebagai kegiatan kampus merdeka");
}

console.log(b);


console.log("array = " + nama);

console.log("a adalah = " + b);
console.log("b adalah = " + b);
perkenalan();
//a. let terdaftar harus true agar bisa ditampilkan di terminal
//b. karena const mempunyai nilai dan bertabrakan dengan let b
//c. masih tidak bisa pas saya coba karena asal tidak terdefined oleh file
//3
const foo = ["budi", "sita", "ayu"];
console.log(foo);
console.log("variable a = " + foo[0]);
console.log("variable b = " + foo[1]);
console.log("variable c = " + foo[2]);
//4
//let bdays = ['10-17','05-19','20-19'];
//console.log(bdays.date)
//5
let value = [1,2,3,4,5,6];
const kali = value.map(x => x * 2);
console.log(kali);
//6
let arr = [1.5, 2.56, 5.1, 12.33];
let pembulatan1 = Math.round(arr[0]);
let pembulatan2 = Math.round(arr[1]);
let pembulatan3 = Math.round(arr[2]);
let pembulatan4 = Math.round(arr[3]);

console.log(pembulatan1, pembulatan2, pembulatan3, pembulatan4);