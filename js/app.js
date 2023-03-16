`use strict`;

const allStores = []
const allStoresCookies = 0
const tableBodyEl = document.getElementById('table-values')
const tableHeadEl = document.getElementById('table-head')
const tableFootEl = document.getElementById('table-foot')
let hours = ["6am", "7am", "8am", "9am", "10am", "11am", "12pm",
"1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm"]

function Locations(name, minCust, maxCust, avgCookie){
    this.name = name;
    this.minCust = minCust;
    this.maxCust = maxCust;
    this.avgCookie = avgCookie;
    this.hourlyCust = [];
    this.hourlyCookie = [];
    this.totalCookies = [];
    allStores.push(this);
}

Locations.prototype.getRNGcust = function(minCust, maxCust) {
    for(i = 0; i < hours.length; i++){        
        this.hourlyCust.push((Math.round(Math.random() * (this.maxCust - this.minCust)) + this.minCust))
        
    }
}

Locations.prototype.getHourlyCook = function(avgCookie, hourlyCust){
    for(i = 0; i < hours.length; i++){
        this.hourlyCookie.push((Math.ceil(this.hourlyCust[i] * this.avgCookie)))
    }
}

Locations.prototype.getTotalCookie = function(hourlyCookie, totalCookies){
    this.totalCookies.push(this.hourlyCookie.reduce((hourlyCookie, totalCookies) => hourlyCookie + totalCookies, 0))
}

Locations.prototype.drawRow = function() {
    const tableRow = document.createElement('tr');
    tableBodyEl.appendChild(tableRow);
    const tableData = document.createElement('td')
    tableData.textContent = this.name;
    tableRow.appendChild(tableData);
    for(i = 0; i < hours.length; i++){
    const tableData = document.createElement('td');
    tableData.textContent = this.hourlyCookie[i];
    tableRow.appendChild(tableData);
    }
    const tableCookies = document.createElement('td')
    tableCookies.textContent = this.totalCookies
    tableRow.appendChild(tableCookies)
}

hourlyRow = function(){
    const tableHead = document.createElement('tr');
    tableHeadEl.appendChild(tableHead);
    const headData = document.createElement('th');
    headData.textContent = this.none;
    tableHead.appendChild(headData);
    for(i = 0; i < hours.length; i++){
    const headData = document.createElement('th');
    headData.textContent = hours[i];
    tableHead.appendChild(headData);
    };
    const headTotal = document.createElement('th');
    headTotal.textContent = "Daily Location Total";
    tableHead.appendChild(headTotal);
}

totalsRow = function(){
    const tableFoot = document.createElement('tr');
    tableFootEl.appendChild(tableFoot);
    const footData = document.createElement('td');
    footData.textContent = "Totals";
    tableFoot.appendChild(footData);
    let h = 0;
    let grandTotal = 0;
    while (h < hours.length){
        let hourlyTotal = 0;
        for(i = 0; i < allStores.length; i++){
        hourlyTotal += allStores[i].hourlyCookie[h];
        grandTotal += allStores[i].hourlyCookie[h];
        
    }
    const hourTotal = document.createElement('td');
    hourTotal.textContent = hourlyTotal;
    tableFoot.appendChild(hourTotal);
    h++;
    }
    const totalTotal = document.createElement('td');
    totalTotal.textContent = grandTotal;
    tableFoot.appendChild(totalTotal);
}

let seattleStore = new Locations("Seattle", 23, 65, 6.3);
seattleStore.getRNGcust();
seattleStore.getHourlyCook();
seattleStore.getTotalCookie();

let tokyoStore = new Locations("Tokyo", 3, 24, 1.2);
tokyoStore.getRNGcust();
tokyoStore.getHourlyCook();
tokyoStore.getTotalCookie();

let dubaiStore = new Locations("Dubai", 11, 38, 3.7);
dubaiStore.getRNGcust();
dubaiStore.getHourlyCook();
dubaiStore.getTotalCookie();

let parisStore = new Locations("Paris", 20, 38, 3.7);
parisStore.getRNGcust();
parisStore.getHourlyCook();
parisStore.getTotalCookie();

let limaStore = new Locations("Lima", 2, 16, 4.6);
limaStore.getRNGcust();
limaStore.getHourlyCook();
limaStore.getTotalCookie();

console.log(allStores);
hourlyRow()
totalsRow()
for (let i = 0; i < allStores.length; i++){
    allStores[i].drawRow();
}
