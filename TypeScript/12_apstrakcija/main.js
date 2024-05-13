var Automobil = /** @class */ (function () {
    function Automobil(brend, model) {
        this.brend = brend;
        this.model = model;
        this.brzina = 0;
    }
    Automobil.prototype.ubrzanje = function () {
        this.brzina += 20;
    };
    Automobil.prototype.kocenje = function () {
        this.brzina -= 15;
    };
    Automobil.prototype.getBrzina = function () {
        return this.brzina;
    };
    return Automobil;
}());
var mojAutomobil = new Automobil("Yugo", "Koral S");
///ubrzanje:
mojAutomobil.ubrzanje();
console.log(mojAutomobil.getBrzina());
mojAutomobil.ubrzanje();
mojAutomobil.ubrzanje();
mojAutomobil.ubrzanje();
console.log(mojAutomobil.getBrzina());
mojAutomobil.kocenje();
mojAutomobil.kocenje();
console.log(mojAutomobil.getBrzina());
