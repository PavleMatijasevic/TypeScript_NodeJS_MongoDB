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
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var TipPlacanja;
(function (TipPlacanja) {
    TipPlacanja["DinaKartica"] = "DinaKartica";
    TipPlacanja["MasterKartica"] = "MasterKartica";
    TipPlacanja["VisaKartica"] = "VisaKartica";
})(TipPlacanja || (TipPlacanja = {}));
var UslugaPlacanja = /** @class */ (function () {
    function UslugaPlacanja() {
    }
    return UslugaPlacanja;
}());
var DinaKartica = /** @class */ (function (_super) {
    __extends(DinaKartica, _super);
    function DinaKartica() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DinaKartica.prototype.uplatiSredstva = function () {
        console.log("Placanje putem Dina kartice izvrseno.");
    };
    return DinaKartica;
}(UslugaPlacanja));
var MasterKartica = /** @class */ (function (_super) {
    __extends(MasterKartica, _super);
    function MasterKartica() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MasterKartica.prototype.uplatiSredstva = function () {
        console.log("Placanje putem Master kartice izvrseno.");
    };
    return MasterKartica;
}(UslugaPlacanja));
var VisaKartica = /** @class */ (function (_super) {
    __extends(VisaKartica, _super);
    function VisaKartica() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    VisaKartica.prototype.uplatiSredstva = function () {
        console.log("Placanje putem Visa kartice izvrseno.");
    };
    return VisaKartica;
}(UslugaPlacanja));
var MehanizamPlacanja = /** @class */ (function () {
    function MehanizamPlacanja() {
    }
    return MehanizamPlacanja;
}());
var DinaKarticaUsluga = /** @class */ (function (_super) {
    __extends(DinaKarticaUsluga, _super);
    function DinaKarticaUsluga() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DinaKarticaUsluga.prototype.napraviUslugu = function () {
        return new DinaKartica();
    };
    return DinaKarticaUsluga;
}(MehanizamPlacanja));
var MasterKarticaUsluga = /** @class */ (function (_super) {
    __extends(MasterKarticaUsluga, _super);
    function MasterKarticaUsluga() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MasterKarticaUsluga.prototype.napraviUslugu = function () {
        return new MasterKartica();
    };
    return MasterKarticaUsluga;
}(MehanizamPlacanja));
var VisaKarticaUsluga = /** @class */ (function (_super) {
    __extends(VisaKarticaUsluga, _super);
    function VisaKarticaUsluga() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    VisaKarticaUsluga.prototype.napraviUslugu = function () {
        return new VisaKartica();
    };
    return VisaKarticaUsluga;
}(MehanizamPlacanja));
function getMehanizamPlacanja(tipPlacanja) {
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
var mehanizamPlacanja1 = getMehanizamPlacanja(TipPlacanja.DinaKartica);
var uslugaPlacanja1 = mehanizamPlacanja1.napraviUslugu();
uslugaPlacanja1.uplatiSredstva();
var mehanizamPlacanja2 = getMehanizamPlacanja(TipPlacanja.MasterKartica);
var uslugaPlacanja2 = mehanizamPlacanja2.napraviUslugu();
uslugaPlacanja2.uplatiSredstva();
