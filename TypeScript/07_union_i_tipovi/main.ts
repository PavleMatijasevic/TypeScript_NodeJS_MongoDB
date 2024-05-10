//union tipovi koriste | 
let godine: number | string | boolean = true;

godine = 10;
godine = "dvadeset pet"
godine = false;

type Konfiguracija = {
    x: number,
    y: number 
}
type Lokacija = {
    geoSirina: number,
    geoVisina: number
}

let kordinate: Konfiguracija | Lokacija = {
    x: 33, y:43
};
kordinate = {geoSirina:432, geoVisina:123};

function stampajLokaciju (geoSirina: number | string): void{
    console.log(`Geografska sirina je ${geoSirina}`);
}

stampajLokaciju(123);
stampajLokaciju("lokacija");



/*
union tipovi i nizovi

    const brojevi: number[] = [1,2,3,4];
    const biloSta: any[] = [1, 2, true, false, "pavle", 3];
   
    // elementi niza samo tipa number i string
    const vrednost: (number | string)[] = [1,2,3,"korisnik"];




*/

// Primer 3:
const kord: (Konfiguracija | Lokacija)[] = [];
kord.push({geoSirina:11, geoVisina:22});
kord.push({x:11, y:22});

//Primer 5
const nula: 0 = 0;
//nula = 1;

let zdravo: "zdravo" = "zdravo";
let raspolozenje: "Raspolozen" | "Srecan" = "Raspolozen";
raspolozenje = "Srecan";

// Mogu samo Raspolozen i Srecan, ostalo ne
//raspolozenje = "Ok";

type Nedelja = 
| "Pon"
| "Uto"
| "Sre"
| "Cet"
| "Pet"
| "Sub"
| "Ned"

let danas: Nedelja = "Pet";




