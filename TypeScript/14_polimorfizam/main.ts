abstract class Oblik{
    
    abstract izracunajPovrsinu(): number;

}
    // klasa pravougaonik

class Pravougaonik extends Oblik{
    constructor(private sirina: number, private visina: number){
        super();
    }
    izracunajPovrsinu(): number {
        return this.sirina * this.visina;
    }
}
class Krug extends Oblik{
    constructor(private poluprecnik: number){
        super();
    }
    izracunajPovrsinu(): number {
        return Math.PI * this.poluprecnik ** 2;
    }
}

class Trougao extends Oblik{
    constructor(private osnovica: number, private visina){
        super();
    }
    izracunajPovrsinu(): number {
        return 0.5 * this.osnovica * this.visina;
    }

}

/*
fja koja racuna povrsinu bilo kog tela
*/
function izracunaPovrsinuOblika(oblik: Oblik): number{
    return oblik.izracunajPovrsinu();
}

// napraviti instance za razlicite oblike
const pravougaonik = new Pravougaonik(12, 10);
console.log(`Povrsina pravougaonika: `, izracunaPovrsinuOblika(pravougaonik));

const krug = new Krug(5);
console.log(`Povrsina kruga: `, izracunaPovrsinuOblika(krug));

const trougao = new Trougao(12, 5);
console.log(`Povrsina trougla: `, izracunaPovrsinuOblika(trougao));












