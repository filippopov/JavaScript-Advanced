function tickets(data, sortParameter) {
    let result = [];
    class Ticket {
        constructor(destinationName, price, status){
            this.destination = destinationName;
            this.price = Number(price);
            this.status = status;
        }
    }

    for (let row of data) {
        let [destinationName, price, status] = row.split('|');
        let ticket = new Ticket(destinationName, price, status);
        result.push(ticket);
    }

    return result.sort((a, b) => a[sortParameter] > b[sortParameter]);
}


let test = ['Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'];


console.log(tickets(test, 'destination'));;
