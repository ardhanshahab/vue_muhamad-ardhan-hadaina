class Kendaraan {
    constructor() {
      this.roda = 0;
      this.kecepatan = 0;
    }
  }
  
  class Mobil extends Kendaraan {
    berjalan() {
      this.tambahKecepatan(10);
    }
  
    tambahKecepatan(kecepatanBaru) {
      this.kecepatan = this.kecepatan + kecepatanBaru;
    }
  }
  
  // void main(){
  // const mobil = new Mobil();
  // mobil.berjalan();
  // mobil.berjalan();
  // }
  
  // console.log(mobil.kecepatan);
  
  function main() {
    const mobil = new Mobil();
    mobil.berjalan();
    mobil.berjalan();
    mobil.berjalan();
  
    console.log("TEST");
    console.log(mobil.kecepatan);
  }
  
  main();