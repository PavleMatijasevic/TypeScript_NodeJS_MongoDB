var rez = { a: 1, b: 12 };
var osoba = {
    id: 1,
    ime: "Pavle",
    prezime: "Matijasevic",
    adresa: "Marka Todorovica",
    funkcija: function () { return "Test"; }
};
osoba.adresa = "Nova adresa prebivalista";
var turistickaDestinacija = {
    naziv: "Maldivi",
    cena: 1000,
    firstMinute: function (popust) {
        var novaCena = this.cena * (1 - popust / 100);
        this.cena = novaCena;
        return novaCena;
    }
};
var noviPopust = 10;
var novaCena = turistickaDestinacija.firstMinute(noviPopust);
console.log("Nova cena Maldiva nakon popusta od ".concat(noviPopust, "%: ").concat(novaCena));
var korisnik = {
    ime: "Pavle",
    vozackaDozvola: "da",
    prezime: "Matijasevic",
    vozim: function () {
        return "vozim";
    },
};
var korisnikDva = {
    ime: "Pera",
    vozackaDozvola: "ne",
    nivo: "pocetni",
    prezime: "Petrovic",
    vozim: function () {
        return "ne vozim";
    }
};
var profilProgramera = {
    ime: "Pavle",
    id: 11,
    email: "matijasevic.pavle99@gmail.com",
    nivo: "xy",
    programskiJezik: ["Java", "Python", "C", "SQL", "C++"]
};
/*
Primer 5:
Napisati fju koja se zove "pozdrav". Prihvata jedan string ili
niz stringova
Fja stampa "dobar dan, <ime osobe>" za jednu osobu ili da pozdravi svaku osobu iz niza
prema identicnom sablonu

fja(param: tip)
  if (typeof param === "neki teks tj konkretan tip")
*/
function pozdrav(osobe) {
    if (typeof osobe === "string") {
        console.log("Dobar dan, ".concat(osobe));
    }
    else {
        osobe.forEach(function (osoba) {
            console.log("Dobar dan, ".concat(osoba));
        });
    }
}
pozdrav("Pavle");
pozdrav(["Marko", "Ana", "Petar"]);
