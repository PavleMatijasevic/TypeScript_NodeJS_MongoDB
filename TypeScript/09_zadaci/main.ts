/*
definisi tip Hardware koji ce pravilno tipizirati
sledece dve promenljive.
Napravi svojstvo "brend" opcionim, a "kategorija" samo za citanje

pored toga napisi fju "izracunajProfit koja prihvata
jedan objekat Hardware. Ova fja treba da izracuna 
ukupan profit ok prodaje hardvera u Republici srbiji oduzimajuci njegov budzet"


*/







type PrihodRashod = {
    budzet: number;
    zaradaSrbija: number;
  };
type Hardware = {
    readonly kategorija: string;
    brend?: string; 
    godinaProizvodnje: number;
    prihodRashod: PrihodRashod;
  };

  function izracunajProfit(hardware: Hardware): number {
    const ukupanProfit = hardware.prihodRashod.zaradaSrbija - hardware.prihodRashod.budzet;
    return ukupanProfit;
  }
  
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


let a = izracunajProfit(nvme);
let b = izracunajProfit(ssd);
console.log(a);
console.log(b);