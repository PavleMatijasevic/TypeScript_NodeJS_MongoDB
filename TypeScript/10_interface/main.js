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
