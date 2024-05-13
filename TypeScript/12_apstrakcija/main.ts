class Automobil{
    private brend: string;
    private model: string;
    private brzina: number;

    constructor(brend: string, model: string){
        this.brend = brend;
        this.model = model;
        this.brzina = 0;
    }
    public ubrzanje(): void{
        this.brzina += 20;
    }
    public kocenje(): void{
        this.brzina -= 15;
    }

    public getBrzina(): number{
        return this.brzina;
    }

}

const mojAutomobil: Automobil = new Automobil("Yugo", "Koral 45");

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


















