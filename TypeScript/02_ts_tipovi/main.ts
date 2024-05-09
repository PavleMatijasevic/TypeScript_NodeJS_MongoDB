/*
    Primitivni tipovi
    Number  \\ Null      \\ Any
    String  \\ Undefined \\ Never
    Boolean \\ Void      \\ Unknown

    ! Tipovi objekata:
    Objekat     - Object   | Tuple
    Niz         - Array    | Enum
    Funkcija    - Function | ...

    Anotacija tipova prati sablon:
    nakon definicija naziva promenljive/konstante sledi tip prema formatu: :Type

    Primer JS
    const pozdrav = 'Praktikum';
    
    Primer TS
    const pozdrav: string = 'Praktikum';

    Obrazac:
    let nazivPromenljive: type = vrednost;

    metod(params): type {
        ...
    }

    */

    
    //Deklaracija teksta/stringova
    let temaForuma: string = 'IT sektor';
    temaForuma = 'Cloud arhitektura';
    //temaForuma = 3424234; // greska

    // Brojevi
    let mojBroj: number = 100;
//    mojBroj = 'Ne moze da bude string'
    mojBroj = 150;
    
    //Boolean vrednosti
    let logickaProvera: boolean = true;
    logickaProvera = false;


    // Interfejs moze biti nista i nesto
    let nista: null = null;
    let nesto: undefined =  undefined;


    let nazivTeme = 'Diplomski rad';
    nazivTeme = 'Drugi naziv teme';
    //nazivTeme = false;
    

    //Tip any
    const mojiPodaci: any = "Ovo je skup licnih podataka";
    //mojiPodaci = 100;
    //mojiPodaci = "String"

    let nekiPodaci: any = "ovo je neki tekst";
    nekiPodaci =  100;
    nekiPodaci = "Novi string";
    nekiPodaci = true;
    nekiPodaci();
    nekiPodaci.toUpperCase();


    //Implicitni any tip
    const naziviTemaForuma = ["IT", "Cloud", "ML"];
    let odaberiTemu;
    
    for(let tema of naziviTemaForuma){
        if(tema === "IT"){
            odaberiTemu = "IT"
        }
    }

    odaberiTemu();
    odaberiTemu = 100;
    odaberiTemu.bukvalnoBiloSta();





























