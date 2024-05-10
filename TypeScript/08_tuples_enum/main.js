var bilosta = ["Tekst", 100, "nesto"];
var hexVred = [255, 214, 0];
var hexBoja = [1, 2, 3];
var serverRes = [404, "not found"];
//const serverRes: HTTPRes = ["not found", 404]; ne radi jer mora redom num pa str
var servResponse = [[404, "not found"], [201, "ok"]];
var Status;
(function (Status) {
    Status[Status["U_TOKU"] = 0] = "U_TOKU";
    Status[Status["PRISTIGLO"] = 100] = "PRISTIGLO";
    Status[Status["DOSTAVLJENO"] = 101] = "DOSTAVLJENO";
    Status[Status["VRACENO"] = 102] = "VRACENO";
})(Status || (Status = {}));
var statusPosiljke = Status.U_TOKU;
function jeDostavljeno(statusPorudzbine) {
    console.log(Status[statusPorudzbine]);
    return statusPorudzbine === Status.DOSTAVLJENO;
}
jeDostavljeno(Status.DOSTAVLJENO);
