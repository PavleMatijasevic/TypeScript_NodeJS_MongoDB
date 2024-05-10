const bilosta: (string| number)[] = ["Tekst", 100, "nesto"]
const hexVred: number[] = [255,214,0];

const hexBoja: [number, number, number] = [1,2,3];

type HTTPRes = [number, string]
const serverRes: HTTPRes = [404,"not found"];
//const serverRes: HTTPRes = ["not found", 404]; ne radi jer mora redom num pa str

const servResponse: HTTPRes[] = [[404, "not found"], [201,"ok"]];

enum Status{
    U_TOKU,
    PRISTIGLO = 100,
    DOSTAVLJENO,
    VRACENO
}

const statusPosiljke = Status.U_TOKU;

function jeDostavljeno(statusPorudzbine: Status){
    console.log(Status[statusPorudzbine])
    return statusPorudzbine === Status.DOSTAVLJENO;
}

jeDostavljeno(Status.DOSTAVLJENO);


















