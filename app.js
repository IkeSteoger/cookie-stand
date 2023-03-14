`use strict`;

let hours = ["6am: ", "7am: ", "8am: ", "9am: ", "10am: ", "11am: ", "12pm: ",
"1pm: ", "2pm: ", "3pm: ", "4pm: ", "5pm: ", "6pm: "]

let seattle ={
    name: "Seattle",
    minCust: 23,
    maxCust: 65,
    avgCookie: 6.3,
    totalCookies: [],
    hourlyCust: [],
    hourlyCookie: [],
}

let tokyo ={
    name: "Tokyo",
    minCust: 3,
    maxCust: 24,
    avgCookie: 1.2,
    totalCookies: [],
    hourlyCust: [],
    hourlyCookie: [],
}

let dubai ={
    name: "Dubai",
    minCust: 11,
    maxCust: 38,
    avgCookie: 3.7,
    totalCookies: [],
    hourlyCust: [],
    hourlyCookie: [],
}

let paris ={
    name: "Paris",
    minCust: 20,
    maxCust: 38,
    avgCookie: 2.3,
    totalCookies: [],
    hourlyCust: [],
    hourlyCookie: [],
}

let lima ={
    name: "Lima",
    minCust: 2,
    maxCust: 16,
    avgCookie: 4.6,
    totalCookies: [],
    hourlyCust: [],
    hourlyCookie: [],
}

function getRNGCust(a, b, c){
    for(i = 0; i < hours.length; i++){        
    c.push(Math.round(Math.random() * (b - a)) + a)
    }
}

function getHourlyCookie(a, b, c){
    for(i = 0; i < hours.length; i++){
        c.push((Math.ceil(b[i] * a)))
    }
}

function getTotalCookie(a, b){
    b.push(a.reduce((a, b) => a + b, 0))
}

function createList(a, b){
    let listView = document.createElement('ul');
    for(i = 0; i < a.length; i++){
        let listItem = document.createElement('li')
        listItem.appendChild(document.createTextNode(hours[i] + a[i] + " cookies"));
        listView.appendChild(listItem);
    }
    let totalView = document.createElement('li');
    totalView.appendChild(document.createTextNode("Total: " + b[0]))
    listView.appendChild(totalView)
    console.log(listView)
    return (listView)
}

getRNGCust(seattle.minCust, seattle.maxCust, seattle.hourlyCust);
getHourlyCookie(seattle.avgCookie, seattle.hourlyCust, seattle.hourlyCookie);
getTotalCookie(seattle.hourlyCookie, seattle.totalCookies);
document.getElementById("cookiesSeattle").appendChild(createList(seattle.hourlyCookie, seattle.totalCookies));
console.log(seattle);

getRNGCust(tokyo.minCust, tokyo.maxCust, tokyo.hourlyCust);
getHourlyCookie(tokyo.avgCookie, tokyo.hourlyCust, tokyo.hourlyCookie);
getTotalCookie(tokyo.hourlyCookie, tokyo.totalCookies);
document.getElementById("cookiesTokyo").appendChild(createList(tokyo.hourlyCookie, tokyo.totalCookies));
console.log(tokyo);

getRNGCust(dubai.minCust, dubai.maxCust, dubai.hourlyCust);
getHourlyCookie(dubai.avgCookie, dubai.hourlyCust, dubai.hourlyCookie);
getTotalCookie(dubai.hourlyCookie, dubai.totalCookies);
document.getElementById("cookiesDubai").appendChild(createList(dubai.hourlyCookie, dubai.totalCookies));
console.log(dubai);

getRNGCust(paris.minCust, paris.maxCust, paris.hourlyCust);
getHourlyCookie(paris.avgCookie, paris.hourlyCust, paris.hourlyCookie);
getTotalCookie(paris.hourlyCookie, paris.totalCookies);
document.getElementById("cookiesParis").appendChild(createList(paris.hourlyCookie, paris.totalCookies));
console.log(paris);

getRNGCust(lima.minCust, lima.maxCust, lima.hourlyCust);
getHourlyCookie(lima.avgCookie, lima.hourlyCust, lima.hourlyCookie);
getTotalCookie(lima.hourlyCookie, lima.totalCookies);
document.getElementById("cookiesLima").appendChild(createList(lima.hourlyCookie, lima.totalCookies));
console.log(lima);
