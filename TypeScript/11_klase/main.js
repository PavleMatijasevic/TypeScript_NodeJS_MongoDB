var Zadatak = /** @class */ (function () {
    function Zadatak(zadatakInfo) {
        this.id = zadatakInfo.id;
        this.naslov = zadatakInfo.naslov;
        this.opis = zadatakInfo.opis;
        this.rok = zadatakInfo.rok;
        this.uradjen = false;
    }
    Zadatak.prototype.zavrsen = function () {
        this.uradjen = true;
    };
    Zadatak.prototype.nijeZavrsen = function () {
        this.uradjen = false;
    };
    return Zadatak;
}());
var zadatakPrvi = new Zadatak({
    id: 11,
    naslov: "Vezbanje TypeScript",
    opis: "Neki sadrzaj",
    rok: new Date("2024-05-13")
});
var zadatakDrugi = new Zadatak({
    id: 21,
    naslov: "Vezbanje Node.js",
    opis: "Neki sadrzaj drugi put",
    rok: new Date("2024-05-14")
});
zadatakPrvi.zavrsen();
zadatakDrugi.zavrsen();
console.log(zadatakPrvi);
console.log(zadatakDrugi);
