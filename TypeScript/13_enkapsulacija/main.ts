class Korisnik{
    private korisnickoIme: string;
    private lozinka: string;

    constructor (korisnickoIme: string, lozinka: string){
        this.korisnickoIme = korisnickoIme;
        this.lozinka = lozinka;
    }
    // autentikacija korisnika
    autentikacija(unesiLozinku: string): boolean{
        return unesiLozinku === this.lozinka;
    }
    // Logika za izmenu lozinke
    izmenaLozinke(novaLozinka: string): void{
        this.lozinka = novaLozinka
    }


}
// Pravimo korisnika i prikazujemo rezultate; Zatim 
// menjamo lozinku i prikazujemo rezultat

const korisnikJedan = new Korisnik('matijasevicPavle', '1234567');
console.log(`Start: `,korisnikJedan);
console.log(korisnikJedan.autentikacija('111111')) 
console.log(korisnikJedan.autentikacija('1234567'))


korisnikJedan.izmenaLozinke('paja99');
console.log(`Nakon izmene: `, korisnikJedan);

















