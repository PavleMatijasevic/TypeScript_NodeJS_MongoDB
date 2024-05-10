//union tipovi koriste | 
var godine = true;
godine = 10;
godine = "dvadeset pet";
godine = false;
var kordinate = {
    x: 33, y: 43
};
kordinate = { geoSirina: 432, geoVisina: 123 };
function stampajLokaciju(geoSirina) {
    console.log("Geografska sirina je ".concat(geoSirina));
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
var kord = [];
kord.push({ geoSirina: 11, geoVisina: 22 });
kord.push({ x: 11, y: 22 });
//Primer 5
var nula = 0;
//nula = 1;
var zdravo = "zdravo";
var raspolozenje = "Raspolozen";
raspolozenje = "Srecan";
var danas = "Pet";
