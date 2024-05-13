var Korisnik = /** @class */ (function () {
    function Korisnik(korisnickoIme, lozinka) {
        this.korisnickoIme = korisnickoIme;
        this.lozinka = lozinka;
    }
    // autentikacija korisnika
    Korisnik.prototype.autentikacija = function (unesiLozinku) {
        return unesiLozinku === this.lozinka;
    };
    // Logika za izmenu lozinke
    Korisnik.prototype.izmenaLozinke = function (novaLozinka) {
        this.lozinka = novaLozinka;
    };
    return Korisnik;
}());
// Pravimo korisnika i prikazujemo rezultate; Zatim 
// menjamo lozinku i prikazujemo rezultat
var korisnikJedan = new Korisnik('matijasevicPavle', '1234567');
console.log("Start: ", korisnikJedan);
console.log(korisnikJedan.autentikacija('111111'));
console.log(korisnikJedan.autentikacija('1234567'));
korisnikJedan.izmenaLozinke('paja99');
console.log("Nakon izmene: ", korisnikJedan);
