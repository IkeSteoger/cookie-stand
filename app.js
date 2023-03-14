`use strict`;

const allStores = []
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
    headTotal.textContent = "Total Cookies:";
    tableHead.appendChild(headTotal);
}

totalsRow = function(){
    const tableFoot = document.createElement('tr');
    tableFootEl.appendChild(tableFoot);
    const footData = document.createElement('td');
    footData.textContent = "Totals"
    tableFoot.appendChild(footData)
}

let seattleStore = new Locations("Seattle", 23, 65, 6.3);
seattleStore.getRNGcust();
seattleStore.getHourlyCook();
seattleStore.getTotalCookie();
allStores.push(seattleStore);

let tokyoStore = new Locations("Tokyo", 3, 24, 1.2);
tokyoStore.getRNGcust();
tokyoStore.getHourlyCook();
tokyoStore.getTotalCookie();
allStores.push(tokyoStore);

let dubaiStore = new Locations("Dubai", 11, 38, 3.7);
dubaiStore.getRNGcust();
dubaiStore.getHourlyCook();
dubaiStore.getTotalCookie();
allStores.push(dubaiStore);

let parisStore = new Locations("Paris", 20, 38, 3.7);
parisStore.getRNGcust();
parisStore.getHourlyCook();
parisStore.getTotalCookie();
allStores.push(parisStore);

let limaStore = new Locations("Lima", 2, 16, 4.6);
limaStore.getRNGcust();
limaStore.getHourlyCook();
limaStore.getTotalCookie();
allStores.push(limaStore);

console.log(allStores);
hourlyRow()
totalsRow()
for (let i = 0; i < allStores.length; i++){
    allStores[i].drawRow();
}

// City Object Template
// let cityName ={
//     name: "cityName",
//     minCust: ,
//     maxCust: ,
//     avgCookie: ,
//     totalCookies: [],
//     hourlyCust: [],
//     hourlyCookie: [],
// }

// let seattle ={
//     name: "Seattle",
//     minCust: 23,
//     maxCust: 65,
//     avgCookie: 6.3,
//     totalCookies: [],
//     hourlyCust: [],
//     hourlyCookie: [],
// }

// let tokyo ={
//     name: "Tokyo",
//     minCust: 3,
//     maxCust: 24,
//     avgCookie: 1.2,
//     totalCookies: [],
//     hourlyCust: [],
//     hourlyCookie: [],
// }

// let dubai ={
//     name: "Dubai",
//     minCust: 11,
//     maxCust: 38,
//     avgCookie: 3.7,
//     totalCookies: [],
//     hourlyCust: [],
//     hourlyCookie: [],
// }

// let paris ={
//     name: "Paris",
//     minCust: 20,
//     maxCust: 38,
//     avgCookie: 2.3,
//     totalCookies: [],
//     hourlyCust: [],
//     hourlyCookie: [],
// }

// let lima ={
//     name: "Lima",
//     minCust: 2,
//     maxCust: 16,
//     avgCookie: 4.6,
//     totalCookies: [],
//     hourlyCust: [],
//     hourlyCookie: [],
// }

// function getRNGCust(a, b, c){
//     for(i = 0; i < hours.length; i++){        
//     c.push(Math.round(Math.random() * (b - a)) + a)
//     }
// }

// function getHourlyCookie(a, b, c){
//     for(i = 0; i < hours.length; i++){
//         c.push((Math.ceil(b[i] * a)))
//     }
// }

// function getTotalCookie(a, b){
//     b.push(a.reduce((a, b) => a + b, 0))
// }

// function createList(a, b){
//     let listView = document.createElement('ul');
//     for(i = 0; i < a.length; i++){
//         let listItem = document.createElement('li')
//         listItem.appendChild(document.createTextNode(hours[i] + a[i] + " cookies"));
//         listView.appendChild(listItem);
//     }
//     let totalView = document.createElement('li');
//     totalView.appendChild(document.createTextNode("Total: " + b[0]))
//     listView.appendChild(totalView)
//     console.log(listView)
//     return (listView)
// }

// getRNGCust(seattle.minCust, seattle.maxCust, seattle.hourlyCust);
// getHourlyCookie(seattle.avgCookie, seattle.hourlyCust, seattle.hourlyCookie);
// getTotalCookie(seattle.hourlyCookie, seattle.totalCookies);
// document.getElementById("cookiesSeattle").appendChild(createList(seattle.hourlyCookie, seattle.totalCookies));
// console.log(seattle);

// getRNGCust(tokyo.minCust, tokyo.maxCust, tokyo.hourlyCust);
// getHourlyCookie(tokyo.avgCookie, tokyo.hourlyCust, tokyo.hourlyCookie);
// getTotalCookie(tokyo.hourlyCookie, tokyo.totalCookies);
// document.getElementById("cookiesTokyo").appendChild(createList(tokyo.hourlyCookie, tokyo.totalCookies));
// console.log(tokyo);

// getRNGCust(dubai.minCust, dubai.maxCust, dubai.hourlyCust);
// getHourlyCookie(dubai.avgCookie, dubai.hourlyCust, dubai.hourlyCookie);
// getTotalCookie(dubai.hourlyCookie, dubai.totalCookies);
// document.getElementById("cookiesDubai").appendChild(createList(dubai.hourlyCookie, dubai.totalCookies));
// console.log(dubai);

// getRNGCust(paris.minCust, paris.maxCust, paris.hourlyCust);
// getHourlyCookie(paris.avgCookie, paris.hourlyCust, paris.hourlyCookie);
// getTotalCookie(paris.hourlyCookie, paris.totalCookies);
// document.getElementById("cookiesParis").appendChild(createList(paris.hourlyCookie, paris.totalCookies));
// console.log(paris);

// getRNGCust(lima.minCust, lima.maxCust, lima.hourlyCust);
// getHourlyCookie(lima.avgCookie, lima.hourlyCust, lima.hourlyCookie);
// getTotalCookie(lima.hourlyCookie, lima.totalCookies);
// document.getElementById("cookiesLima").appendChild(createList(lima.hourlyCookie, lima.totalCookies));
// console.log(lima);

// Template to Add New City
// getRNGCust(.minCust, .maxCust, .hourlyCust);
// getHourlyCookie(.avgCookie, .hourlyCust, .hourlyCookie);
// getTotalCookie(.hourlyCookie, .totalCookies);
// document.getElementById("cookies").appendChild(createList(.hourlyCookie, .totalCookies));
// console.log();
