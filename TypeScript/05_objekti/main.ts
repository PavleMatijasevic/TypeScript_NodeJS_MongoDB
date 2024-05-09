// Objekti

function stampajIme(osoba: {ime: string, prezime:string}): void{
    console.log(`${osoba.ime} ${osoba.prezime}`);
}
stampajIme({ime: "Pavle", prezime:"Matijasevic"});



//arrow
const stampajIme2 = (osoba:{ime: string, prezime:string})=>{
    return `${osoba.ime} ${osoba.prezime}`

}

stampajIme({ime: "Pavle", prezime:"Matijasevic"});
console.log(stampajIme2);

type Brojevi = {
    x: number,
    y: number,
}
let nekeVrednosti: {x:number, y:number} = {x:10, y:15};

function randVrednost(): {x:number, y:number} {
    return {x: Math.random(), y: Math.random()}
}


//Alijas tipa
function dupliraneVrednosti(dv: Brojevi): Brojevi{
    return {x: dv.x*2, y: dv.y*2}
}

type mojaVrednost = number;
let godine: mojaVrednost = 100;

// sledeci primer
type Forum = {
    forum: string,
    tema: string,
    diskusija: number,
    korisnici: {ime: string, prezime: string}
}

function prikaziSegmentForuma(forum: Forum): void{
    console.log(`${forum.forum} - ${forum.tema}`)
}

/*
{
    forum: "IT sektor",
    teme: "Mrezna infrastruktura",
    diskusija: 1230,
    korisnici:{
        ime:"Pavle",
        prezime: "Matijasevic"
    }

}
*/


type Opcioni = {
    x: number,
    y: number,
    n?: number;
}
const opcioni: Opcioni = {x: 0, y:3, n:1};
//const opcioni: Opcioni = {x: 0, y:3};

// readonly

type Korisnik = {
    readonly id: number;
    username: string;
}

const korisnik: Korisnik = {
    id: 111000,
    username: "nsavanovic"
}

console.log(korisnik.id);

// kombinovanje tipova

type xOsa = {
    vrednost: number;
}

type yOsa = {
    pozicija: string;
}

type kombinujTipove = xOsa & yOsa;
const rezultatOsa: kombinujTipove = {
    vrednost: 15,
    pozicija: 'Pozicija u kordinatnom sistemu'
}













