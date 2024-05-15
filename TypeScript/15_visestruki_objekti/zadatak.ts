/**
 * 
 * 
 * 
 * 
TypeScript 
Potrebno je implementirati obrazac dizajna metode fabrike koji omogućava dinamičko kreiranje objekata usluge plaćanja,
  kao što su: 
 - DinaKartica, 
 - MasterKartica i 
 - VisaKartica.

Definisati enumeraciju TipPlacanja koja sadrži tipove plaćanja kao što su DinaKartica, Bitcoin i VisaCard.

Apstraktna klasa UslugaPlacanja definiše apstraktnu metodu uplatiSredstva,
 koja će biti implementirana u konkretnim klasama.

Klase DinaKartica, MasterKartica i VisaKartica nasleđuju UslugaPlacanja i implementiraju
uplatiSredstva metodu za svaku određenu vrstu plaćanja.

Apstraktna klasa MehanizamPlacanja definiše apstraktnu metodu napraviUslugu, 
koja će biti implementirana u konkretnim 
fabričkim klasama.

Klase DinaKarticaUsluga, MasterKarticaUsluga i VisaKarticaUsluga nasleđuju MehanizamPlacanja
i implementiraju napraviUslugu
 metodu za kreiranje odgovarajuće instance usluge plaćanja.

Funkcija getMehanizamPlacanja prima tip plaćanja i vraća odgovarajuću fabričku klasu na osnovu zadatog tipa.

Nakon toga, možemo koristiti fabrički metod za kreiranje različitih instanci usluge plaćanja u skladu sa zadatim tipom 
plaćanja. Na kraju, pozivati uplatiSredstva metodu na svakoj instanci kako bi se simuliralo plaćanje.

 */


enum TipPlacanja {
    DinaKartica = "DinaKartica",
    MasterKartica = "MasterKartica",
    VisaKartica = "VisaKartica"
  }
  
  abstract class UslugaPlacanja {
    abstract uplatiSredstva(): void;
  }
  
  class DinaKartica extends UslugaPlacanja {
    uplatiSredstva(): void {
      console.log("Placanje putem Dina kartice izvrseno.");
    }
  }
  
  class MasterKartica extends UslugaPlacanja {
    uplatiSredstva(): void {
      console.log("Placanje putem Master kartice izvrseno.");
    }
  }
  
  class VisaKartica extends UslugaPlacanja {
    uplatiSredstva(): void {
      console.log("Placanje putem Visa kartice izvrseno.");
    }
  }
  
  abstract class MehanizamPlacanja {
    abstract napraviUslugu(): UslugaPlacanja;
  }
  
  class DinaKarticaUsluga extends MehanizamPlacanja {
    napraviUslugu(): UslugaPlacanja {
      return new DinaKartica();
    }
  }
  
  class MasterKarticaUsluga extends MehanizamPlacanja {
    napraviUslugu(): UslugaPlacanja {
      return new MasterKartica();
    }
  }
  
  class VisaKarticaUsluga extends MehanizamPlacanja {
    napraviUslugu(): UslugaPlacanja {
      return new VisaKartica();
    }
  }
  
  function getMehanizamPlacanja(tipPlacanja: TipPlacanja): MehanizamPlacanja {
    switch (tipPlacanja) {
      case TipPlacanja.DinaKartica:
        return new DinaKarticaUsluga();
      case TipPlacanja.MasterKartica:
        return new MasterKarticaUsluga();
      case TipPlacanja.VisaKartica:
        return new VisaKarticaUsluga();
      default:
        throw new Error("Nepodrzani tip placanja.");
    }
  }
  
  const mehanizamPlacanja1 = getMehanizamPlacanja(TipPlacanja.DinaKartica);
  const uslugaPlacanja1 = mehanizamPlacanja1.napraviUslugu();
  uslugaPlacanja1.uplatiSredstva();

  const mehanizamPlacanja2 = getMehanizamPlacanja(TipPlacanja.MasterKartica);
  const uslugaPlacanja2 = mehanizamPlacanja2.napraviUslugu();
  uslugaPlacanja2.uplatiSredstva();

  
  


















