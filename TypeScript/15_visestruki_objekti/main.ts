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

interface StandardniKorisnik {
    ime: string;
    prezime: string;
    vestine: string[];
    godine: number;
    kontaktInfo: {
      email: string;
      telefon: string;
    };
  }
  
  abstract class BiografijaServis {
    static generisiBiografiju(korisnik: StandardniKorisnik): string {
      return `
        Ime: ${korisnik.ime}
        Prezime: ${korisnik.prezime}
        Godine: ${korisnik.godine}
        Vestine: ${korisnik.vestine.join(', ')}
        Kontakt Info:
          Email: ${korisnik.kontaktInfo.email}
          Telefon: ${korisnik.kontaktInfo.telefon}
      `;
    }
  }
  
  class Korisnik {
    constructor(
      public ime: string,
      public prezime: string,
      public datumRodjenja: Date,
      public vestine: string[],
      public email: string,
      public telefon: string
    ) {}
  
    get godine(): number {
      const danas = new Date();
      const rodjenje = this.datumRodjenja;
      let age = danas.getFullYear() - rodjenje.getFullYear();
     
      return age;
    }
  }
  
  class KorisnikAdapter implements StandardniKorisnik {
    constructor(private korisnik: Korisnik) {}
  
    get ime(): string {
      return this.korisnik.ime;
    }
  
    get prezime(): string {
      return this.korisnik.prezime;
    }
  
    get vestine(): string[] {
      return this.korisnik.vestine;
    }
  
    get godine(): number {
      return this.korisnik.godine;
    }
  
    get kontaktInfo(): { email: string; telefon: string } {
      return {
        email: this.korisnik.email,
        telefon: this.korisnik.telefon,
      };
    }
  }
  
 
  const korisnik1 = new Korisnik(
    'Pavle',
    'Matijasevic',
    new Date(1999, 3, 10),
    ['JavaScript', 'TypeScript', 'Python', 'C'],
    'pavle@gmail.com',
    '1234567890'
  );
  const korisnik2 = new Korisnik(
    'Miljan',
    'Bakic',
    new Date(1999, 10, 21),
    ['Java', 'C++', 'C#'],
    'mika@gmail.com',
    '3415239'
  )


  const adapter1 = new KorisnikAdapter(korisnik1);
  const adapter2 = new KorisnikAdapter(korisnik2);
  console.log(BiografijaServis.generisiBiografiju(adapter1));
  console.log(BiografijaServis.generisiBiografiju(adapter2))










