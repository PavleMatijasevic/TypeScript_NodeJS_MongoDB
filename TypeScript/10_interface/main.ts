/*
type Konfig = {
    a:number,
    b:number
}


*/
interface Konfig{
    a:number,
    b:number
}
const rez: Konfig = {a:1, b:12};
interface Osoba{
    readonly id: number,
    ime: string,
    prezime: string,
    adresa?: string,
    funkcija(): string
}

const osoba: Osoba = {
    id:1,
    ime: "Pavle",
    prezime: "Matijasevic",
    adresa: "Marka Todorovica",
    funkcija: () => {return "Test";}
}
osoba.adresa = "Nova adresa prebivalista";
//osoba.id = 4;




/*
TypeScript
Definisati interfejs Proizvod koji ima 3 svojstva
naziv tipa string,
cena tipa broj,
funkciju firstMinute

fja prima jedan argument/parametar - popust tipa broj, ona vraca novu cenu
proizvoda nakon primenjenog popusta

Nakon definisanja interfejsa, kreirati objekat turistickaDestinacija
koja implementira interfejs Proizvod. Ovaj objekat predstavlja 
turisticku destinaciju pod nazivom "Maldivi" sa pocetnom cenom od 1000.
Metoda firstMinute unutar ovog objekta obracunava novu cenu turisticke destinacije
na osnovu datog popusta i azurira cenu destinacije

Na kraju pozvati first minute metodu(kao instancu turistickaDestinacija) sa argumentom popusta od 10% 
i prikazi novu cenu u konzoli
*/


interface Proizvod {
    naziv: string;
    cena: number;
    firstMinute(popust: number): number;
  } 
  const turistickaDestinacija: Proizvod = {
    naziv: "Maldivi",
    cena: 1000,
    firstMinute(popust: number): number {
      const novaCena = this.cena * (1 - popust / 100);
      this.cena = novaCena; 
      return novaCena;
    }
  };
  const noviPopust = 10;
  const novaCena = turistickaDestinacija.firstMinute(noviPopust);
  console.log(`Nova cena Maldiva nakon popusta od ${noviPopust}%: ${novaCena}`);
  


/*
Primer 3:

-Definisati interfejs Covek; ima 2 svojstva ime, vozacka dozvola
-Definisati drugi interfejs, sa nova dva svojstva prezime i metoda vozim
-Kreiraj objekat korisnik koji ce kreirati interfejs Covek; objekat sadrzi
sva prethodno navedena svojstva
-Nakon toga definisati novi interfejs NivoVoznje koji nalsedjuje od interfejsa Covek i dodaje svojstvo nivo(npr.pocetni ili napredni nivo)
-Na kraju kreiramo objekat korisnikDva koji implementira interfejs NivoVoznje.Ovaj objekat sadrzi informacije o korisniku i informaciju o nivou voznje, uz dodatnu funkcionalnost koja vraca "vozim"

*/
interface Covek {
    ime: string;
    vozackaDozvola: string;
  }
  
  interface Covek {
    prezime: string;
    vozim(): string;
  }
  
  const korisnik: Covek = {
    ime: "Pavle",
    vozackaDozvola: "da",
    prezime: "Matijasevic",
    vozim() {
        return "vozim"
    },
  };
  
  interface NivoVoznje extends Covek {
    nivo: string;
  }
  
  const korisnikDva: NivoVoznje = {
    ime: "Pera",
    vozackaDozvola: "ne",
    nivo: "pocetni",
    prezime:"Petrovic",
    vozim() {
      return "ne vozim";
    }
  };
  











