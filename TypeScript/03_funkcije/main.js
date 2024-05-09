// Fje:
/*
Tipovi parametara date fje se mogu definisati
u definiciji fje
svi prethodno definisani tipovi se propustaju u fju
parametri fje i njihovi tipovi na isti nacin se definisu kao i promenljive

*/
function kvadratna(num) {
    return num * num;
}
/*
function pozdrav(osoba: string){
    return `Zdravo, ${osoba}`;
}
*/
var osobaRadiNesto = function (osoba, goidne, vozackaDozvola) { };
kvadratna(100);
function pozdrav(osoba) {
    if (osoba === void 0) { osoba = 'koja god osoba'; }
    return "Zdravo, ".concat(osoba);
}
pozdrav();
pozdrav("Pavle Matijasevic");
// Povratni tipovi:
var sabirajBrojeve = function (x, y) {
    return x + y;
};
sabirajBrojeve(5, 3);
// Povratni tipovi funkcije(moze biti broj ili string)
function random(num) {
    if (Math.random() < 1) {
        return num.toString();
    }
    return num;
}
