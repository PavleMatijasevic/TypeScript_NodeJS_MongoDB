/*

* readonly svojstvo: Tip<string, 1 | 2 | 3>

TypeScript
Klase omogucavaju generisanje biografije korisniku.

Interfejs StandardniKorisnik - definise standardne informacije
o korinisniku. Ukljucuje ime i prezime, vestine, godine, kontakt info(email i telefonski broj)

Apstraktna klasa BiografijaServis sadrzi staticku metodu generisiBiografiju koja prima podatke o korisniku
tipa je StandardniKorisnik, Generise biografiju na osnovu datih informacija.

Klasa korisnik predstavlja korisnika aplikacije i sadrzi osnovne informacije o istom, kao sto su:
ime, prezime, datum rodjenja, vestine, email i telefon.
Konstruktor klase Korisnik prima objekat sa ovim informacijama.

Klasa KorisnikAdapter predstavlja adapter koji konvertuje objekat tipa Korisnik u objekat tipa StandardniKorisnik kako bi mogao da se koristi
sa BiografijaServis.

Adapter pruza pristup informacijama o datom korisniku i to u formatu koji ocekuje metoda generisiBiografiju().


*/
var BiografijaServis = /** @class */ (function () {
    function BiografijaServis() {
    }
    BiografijaServis.generisiBiografiju = function (korisnik) {
        return "\n        Ime: ".concat(korisnik.ime, "\n        Prezime: ").concat(korisnik.prezime, "\n        Godine: ").concat(korisnik.godine, "\n        Vestine: ").concat(korisnik.vestine.join(', '), "\n        Kontakt Info:\n          Email: ").concat(korisnik.kontaktInfo.email, "\n          Telefon: ").concat(korisnik.kontaktInfo.telefon, "\n      ");
    };
    return BiografijaServis;
}());
var Korisnik = /** @class */ (function () {
    function Korisnik(ime, prezime, datumRodjenja, vestine, email, telefon) {
        this.ime = ime;
        this.prezime = prezime;
        this.datumRodjenja = datumRodjenja;
        this.vestine = vestine;
        this.email = email;
        this.telefon = telefon;
    }
    Object.defineProperty(Korisnik.prototype, "godine", {
        get: function () {
            var danas = new Date();
            var rodjenje = this.datumRodjenja;
            var age = danas.getFullYear() - rodjenje.getFullYear();
            return age;
        },
        enumerable: false,
        configurable: true
    });
    return Korisnik;
}());
var KorisnikAdapter = /** @class */ (function () {
    function KorisnikAdapter(korisnik) {
        this.korisnik = korisnik;
    }
    Object.defineProperty(KorisnikAdapter.prototype, "ime", {
        get: function () {
            return this.korisnik.ime;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(KorisnikAdapter.prototype, "prezime", {
        get: function () {
            return this.korisnik.prezime;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(KorisnikAdapter.prototype, "vestine", {
        get: function () {
            return this.korisnik.vestine;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(KorisnikAdapter.prototype, "godine", {
        get: function () {
            return this.korisnik.godine;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(KorisnikAdapter.prototype, "kontaktInfo", {
        get: function () {
            return {
                email: this.korisnik.email,
                telefon: this.korisnik.telefon,
            };
        },
        enumerable: false,
        configurable: true
    });
    return KorisnikAdapter;
}());
var korisnik1 = new Korisnik('Pavle', 'Matijasevic', new Date(1999, 3, 10), ['JavaScript', 'TypeScript', 'Python', 'C'], 'pavle@gmail.com', '1234567890');
var korisnik2 = new Korisnik('Miljan', 'Bakic', new Date(1999, 10, 21), ['Java', 'C++', 'C#'], 'mika@gmail.com', '3415239');
var adapter1 = new KorisnikAdapter(korisnik1);
var adapter2 = new KorisnikAdapter(korisnik2);
console.log(BiografijaServis.generisiBiografiju(adapter1));
console.log(BiografijaServis.generisiBiografiju(adapter2));
