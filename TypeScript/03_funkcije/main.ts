
// Fje:

    /*
    Tipovi parametara date fje se mogu definisati
    u definiciji fje
    svi prethodno definisani tipovi se propustaju u fju 
    parametri fje i njihovi tipovi na isti nacin se definisu kao i promenljive

    */

function kvadratna (num: number){
    return num*num;
}
/*
function pozdrav(osoba: string){
    return `Zdravo, ${osoba}`;
}
*/
const osobaRadiNesto = (osoba: string, goidne: number, vozackaDozvola: boolean) => {}

kvadratna(100);

function pozdrav(osoba: string = 'koja god osoba'): string{
    return `Zdravo, ${osoba}`;
}
pozdrav();
pozdrav("Pavle Matijasevic");

// Povratni tipovi:
const sabirajBrojeve = (x: number, y:number): number => {
    return x+y;
}
sabirajBrojeve(5,3);

// Povratni tipovi funkcije(moze biti broj ili string)
function random(num: number){
    if (Math.random() < 1){
        return num.toString();
    }
    return num;
}


// Todo anonimne fje
const boje = ['red', 'blue', 'green'];
boje.map(boja =>{
    return boja.toUpperCase();
})

// todo void
const korisnikSpamer = (num: number): void =>{
    for (let i = 0;i<num;i++){
        alert("Zdravo!");
    }
}


function prikazDvePoruke(poruka: string): void{
    console.log(poruka);
    console.log(poruka);
    
}

















