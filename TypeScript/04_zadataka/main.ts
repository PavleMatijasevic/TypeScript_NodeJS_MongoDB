/*
Napisati fju pod nazivom "dvaIskaza" koja prihvata ime osobe.
Trebalo bi da vrati string u formatu "TypeScript zadatak za <ime>, zadatak za mene".

Ukoliko se ime osobe ne navede, podrazumevano je da pise: ... za "Vas", zadatak za mene.

*/


function dvaIskaza(ime: string = "Vas"): string {
    return `TypeScript zadatak za ${ime}, zadatak za mene.`;
}

console.log(dvaIskaza("Pavle")); 
console.log(dvaIskaza()); 











