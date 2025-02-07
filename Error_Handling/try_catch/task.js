class Flight {
    constructor(departure, destination) {
        this.departure = departure;
        this.destination = destination;
    }

    getDeparture() {
        return this.departure;
    }

    getDestination() {
        return this.destination;
    }
}

function flightBoardPresenter(elements) {
    let result = ""
    for (const e of elements) {
        // Place the following line in the try block.
        try {
            result += `${e.getDeparture()} - ${e.getDestination()}\n`;
        } catch (e) {
            result += "--- - ---\n";
        }
    }
    return result;
}

let flights = [
    new Flight("AMS", "LTN"),
    new Flight("AMS", "CDG"),
    new Flight("MUC", "AMS"),
    new Flight("LCA", "AMS"),
];

console.log(flightBoardPresenter(flights));
/*
AMS - LTN
AMS - CDG
MUC - AMS
LCA - AMS
*/

let flightsWithErrors = [
    new Flight("AMS", "LTN"),
    "Flight from AMS to LTN",
    new Flight("MUC", "AMS"),
    new Flight("LCA", "AMS"),
    1234567890,
];

console.log(flightBoardPresenter(flightsWithErrors));
/*
AMS - LTN
--- - ---
MUC - AMS
LCA - AMS
--- - ---
*/
