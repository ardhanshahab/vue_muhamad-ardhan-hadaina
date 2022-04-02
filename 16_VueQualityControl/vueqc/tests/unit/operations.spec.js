import { luasKubus, luasLingkaran, luasPersegi, pembagian, pengurangan, penjumlahan, perkalian, rataRata, sisaBagi, volumeKubus } from "@/utils/sum.js";

describe("Melakukan Penjumlahan", () => {
  test("Penjumlahan dua bilangan positif", () => {
    expect(penjumlahan(2, 4)).toBe(6);
  });
  test("Penjumlahan dua bilangan negatif", () => {
    expect(penjumlahan(-10, -2)).toBe(-12);
  });
  test("Penjumlahan dua bilangan non numerik", () => {
    expect(penjumlahan("1", "0")).toBe("10");
  });
});

describe("Melakukan pengurangan", () => {
  test("Pengurangan dua bilangan positif", () => {
    expect(pengurangan(5, 4)).toBe(1);
  });
  test("Pengurangan dua bilangan negatif", () => {
    expect(pengurangan(-1, -2)).toBe(1);
  });
  test("Pengurangan bilangan positif dan negatif", () => {
    expect(pengurangan(1, -2)).toBe(3);
  });
});

describe("Melakukan perkalian", () => {
  test("perkalian dua bilangan positif", () => {
    expect(perkalian(4, 4)).toBe(16);
  });
  test("perkalian dua bilangan negatif", () => {
    expect(perkalian(-10, -2)).toBe(20);
  });
  test("perkalian bilangan positif dan negatif", () => {
    expect(perkalian(10, -5)).toBe(-50);
  });
});

describe("Melakukan pembagian", () => {
  test("pembagian dua bilangan positif", () => {
    expect(pembagian(10, 2)).toBe(5);
  });
  test("pembagian dua bilangan negatif", () => {
    expect(pembagian(-10, -5)).toBe(2);
  });
  test("pembagian bilangan positif dan negatif", () => {
    expect(pembagian(50, -5)).toBe(-10);
  });
});

describe("Rata Rata", () => {
  test("Rata rata bilangan 6 10 9 7  ", () => {
    expect(rataRata(6, 10, 9, 7, 4)).toBeGreaterThan(26);
  });
  test("Rata rata nilai siswa 90 85 72 88 adalah ", () => {
    expect(rataRata(90, 85, 72, 88, 4)).toBeGreaterThan(82);
  });
  test("Rata rata bilangan 8 7 5 7  ", () => {
    expect(rataRata(8, 7, 5, 7, 4)).toBeGreaterThan(5);
  });
});

describe("Sisa Bagi", () => {
  test("sisa bagi bilangan positif", () => {
    expect(sisaBagi(15, 2)).toBe(1);
  });
  test("sisa bagi bilangan negatif", () => {
    expect(sisaBagi(-17, -2)).toBe(-1);
  });
  test("sisa bagi bilangan positif dan negatif", () => {
    expect(sisaBagi(11, -5)).toBe(1);
  });
});

describe("Luas Persegi", () => {
  test("Jika sisi persegi mempunyai nilai 5cm", () => {
    expect(luasPersegi(5, 5)).toBe(25);
  });
  test("Jika sisi persegi mempunyai nilai 6cm", () => {
    expect(luasPersegi(6, 6)).toBe(36);
  });
  test("Jika sisi persegi mempunyai nilai 3cm", () => {
    expect(luasPersegi(3, 3)).toBe(9);
  });
});
describe("Luas Lingkaran", () => {
  test(" Sebuah lingkaran memiliki jari-jari 7 cm", () => {
    expect(luasLingkaran(3.14, 7)).toBeGreaterThan(150);
  });
  test(" Sebuah lingkaran memiliki jari-jari 5 cm", () => {
    expect(luasLingkaran(3.14, 5)).toBeGreaterThan(75);
  });
  test(" Sebuah lingkaran memiliki jari-jari 10 cm", () => {
    expect(luasLingkaran(3.14, 10)).toBe(314);
  });
});

describe("Luas kubus", () => {
  test("Sebuah kubus memiliki panjang rusuk sebesar 5 cm, berapakah luas permukaan kubus tersebut?", () => {
    expect(luasKubus(6, 5, 5)).toBe(150);
  });
  test("Sebuah kubus memiliki panjang rusuk sebesar 6 cm, berapakah luas permukaan kubus tersebut?", () => {
    expect(luasKubus(6, 6, 6)).toBe(216);
  });
  test("Sebuah kubus memiliki panjang rusuk sebesar 4 cm, berapakah luas permukaan kubus tersebut?", () => {
    expect(luasKubus(6, 4, 4)).toBe(96);
  });
});

describe("Volume kubus", () => {
  test("Sebuah kubus memliki panjang 6cm lebar 4cm tinggi 7 cm", () => {
    expect(volumeKubus(6, 4, 7)).toBe(168);
  });
  test("Sebuah kubus memliki panjang 7cm lebar 9cm tinggi 4 cm", () => {
    expect(volumeKubus(7, 9, 4)).toBe(252);
  });
  test("Sebuah kubus memliki panjang 9cm lebar 8cm tinggi 7 cm", () => {
    expect(volumeKubus(9, 8, 7)).toBe(504);
  });
});
