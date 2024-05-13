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
var Oblik = /** @class */ (function () {
    function Oblik() {
    }
    return Oblik;
}());
// klasa pravougaonik
var Pravougaonik = /** @class */ (function (_super) {
    __extends(Pravougaonik, _super);
    function Pravougaonik(sirina, visina) {
        var _this = _super.call(this) || this;
        _this.sirina = sirina;
        _this.visina = visina;
        return _this;
    }
    Pravougaonik.prototype.izracunajPovrsinu = function () {
        return this.sirina * this.visina;
    };
    return Pravougaonik;
}(Oblik));
var Krug = /** @class */ (function (_super) {
    __extends(Krug, _super);
    function Krug(poluprecnik) {
        var _this = _super.call(this) || this;
        _this.poluprecnik = poluprecnik;
        return _this;
    }
    Krug.prototype.izracunajPovrsinu = function () {
        return Math.PI * Math.pow(this.poluprecnik, 2);
    };
    return Krug;
}(Oblik));
var Trougao = /** @class */ (function (_super) {
    __extends(Trougao, _super);
    function Trougao(osnovica, visina) {
        var _this = _super.call(this) || this;
        _this.osnovica = osnovica;
        _this.visina = visina;
        return _this;
    }
    Trougao.prototype.izracunajPovrsinu = function () {
        return 0.5 * this.osnovica * this.visina;
    };
    return Trougao;
}(Oblik));
/*
fja koja racuna povrsinu bilo kog tela
*/
function izracunaPovrsinuOblika(oblik) {
    return oblik.izracunajPovrsinu();
}
// napraviti instance za razlicite oblike
var pravougaonik = new Pravougaonik(12, 10);
console.log("Povrsina pravougaonika: ", izracunaPovrsinuOblika(pravougaonik));
var krug = new Krug(5);
console.log("Povrsina kruga: ", izracunaPovrsinuOblika(krug));
var trougao = new Trougao(12, 5);
//console.log(`Povrsina trougla: `, izracunaPovrsinuOblika(trougao));
