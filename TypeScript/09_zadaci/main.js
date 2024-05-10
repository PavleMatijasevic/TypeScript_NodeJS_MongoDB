/*
definisi tip Hardware koji ce pravilno tipizirati
sledece dve promenljive.
Napravi svojstvo "brend" opcionim, a "kategorija" samo za citanje

promenljive su:
const ssd: Hardware = {
    kategorija: "SSD",
    brend: "Samsung",
    godinaProizvodnje: 2022,
    prihodRashod: {
      budzet: 7000,
      zaradaSrbija: 105000
    },
  };
 
  const nvme: Hardware = {
    kategorija: "NVME",
    brend: "Samsung",
    godinaProizvodnje: 2023,
    prihodRashod: {
      budzet: 29000,
      zaradaSrbija: 305500
    },
  };
*/
function izracunajProfit(hardware) {
    var ukupanProfit = hardware.prihodRashod.zaradaSrbija - hardware.prihodRashod.budzet;
    return ukupanProfit;
}
var ssd = {
    kategorija: "SSD",
    brend: "Samsung",
    godinaProizvodnje: 2022,
    prihodRashod: {
        budzet: 7000,
        zaradaSrbija: 105000
    },
};
var nvme = {
    kategorija: "NVME",
    brend: "Samsung",
    godinaProizvodnje: 2023,
    prihodRashod: {
        budzet: 29000,
        zaradaSrbija: 305500
    },
};
var a = izracunajProfit(nvme);
var b = izracunajProfit(ssd);
console.log(a);
console.log(b);
