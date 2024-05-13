
class Zadatak{
    private id: number;
    private naslov: string;
    private opis: string;
    private rok: Date;
    private uradjen: boolean;

    constructor(zadatakInfo: {
        id: number,
        naslov: string,
        opis: string,
        rok: Date
    }) {
        this.id = zadatakInfo.id;
        this.naslov = zadatakInfo.naslov;
        this.opis = zadatakInfo.opis;
        this.rok = zadatakInfo.rok;
        this.uradjen = false;
    }

    public zavrsen(){
        this.uradjen = true;
    }
    public nijeZavrsen(){
        this.uradjen = false;
    }
}

const zadatakPrvi = new Zadatak({
    id: 11,
    naslov: "Vezbanje TypeScript",
    opis: "Neki sadrzaj",
    rok: new Date("2024-05-13")
})

const zadatakDrugi = new Zadatak({
    id: 21,
    naslov: "Vezbanje Node.js",
    opis: "Neki sadrzaj drugi put",
    rok: new Date("2024-05-14")
})

zadatakPrvi.zavrsen();
//zadatakDrugi.zavrsen();
console.log(zadatakPrvi);
console.log(zadatakDrugi);



















