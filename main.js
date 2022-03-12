const apikey ='pk.eyJ1IjoiYW5tb2xyYXRuYXBnb2wiLCJhIjoiY2wwbmhtZWR0MGtmeDNjbnRvMW4xZXltOSJ9.zstLg0xArTxNwe21xhIYqg';


const map = L.map('map').setView([16.682452, 74.256415], 15);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    // attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: apikey
}).addTo(map);

//1
//adding markar
const marker =L.marker([16.678302, 74.255570]).addTo(map);
let templete =` 
<h4> Chattrapati shivaji university</h4>
<div style="text-align:center">
<img   width="200" height="200" src="/download.jpg" >
</div>
`//add popup messages
marker.bindPopup(templete);
const circle=L.circle([16.678302, 74.255570],{
    radius:30,
    color:'green',   
}).addTo(map);



//2
const marker2=L.marker([16.675971, 74.255603]).addTo(map);
let botney=`
<h4>Botany Department Shivaji University</h4>
<div style="text-align:center">
<img   width="200" height="200" src="/botney garden.png" >
</div>
`//
marker2.bindPopup(botney);
const circle2=L.circle([16.675971, 74.255603],{
    radius:30,
    color:'Red',
}).addTo(map);



//3
const marker3=L.marker([16.675130, 74.257161]).addTo(map);
let templete3 =` 
<h4> Department of Chemistry shivaji university</h4>
<div style="text-align:center">
<img   width="200" height="200" src="/Shivaji University- Department of Chemistry.jpg" >
</div>
`//add popup messages
marker3.bindPopup(templete3);
const circle3=L.circle([16.675130, 74.257161],{
    radius:30,
    color:'chocolate',
}).addTo(map);


//4
const marker4=L.marker([16.678212, 74.256701]).addTo(map);
let templete4=` 
<h4> Shivaji University Garden, Shivaji University </h4>
<div style="text-align:center">
<img   width="200" height="200" src="/Shivaji-University-Kolhapur3.jpg" >
</div>
`//add popup messages
marker4.bindPopup(templete4);
const circle4=L.circle([16.678212, 74.256701],{
    radius:30,
    red:'black',
}).addTo(map);



//5
const marker5=L.marker([16.679102, 74.255018]).addTo(map);
let templete5=` 
<h4> Balasaheb Khardekar Library </h4>
<div style="text-align:center">
<img   width="200" height="200" src="/2019-02-01.jpg" >
</div>
`//add popup messages
marker5.bindPopup(templete5);
const circle5=L.circle([16.679102, 74.255018],{
    radius:30,
    red:'gold',

}).addTo(map);


//6
const marker6=L.marker([16.677210, 74.254119]).addTo(map);
let templete6=` 
<h4> Main Building Canteen shivaji university</h4>
<div style="text-align:center">
<img   width="200" height="200" src="/2018-10-17.jpg" >
</div>
`//add popup messages
marker6.bindPopup(templete6);
const circle6=L.circle([16.677210, 74.254119],{
    radius:30,
    color:'indigo',
}).addTo(map);


//7
const marker7=L.marker([16.682758, 74.249657]).addTo(map);
let templete7=` 
<h4> Basketball court shivaji university </h4>
<div style="text-align:center">
<img   width="200" height="200" src="/Basketball court.jpg" >
</div>
`//add popup messages
marker7.bindPopup(templete7);
const circle7=L.circle([16.682758, 74.249657],{
    radius:30,
    color:'lime',
}).addTo(map);


//8
const marker8=L.marker([16.683586, 74.250281]).addTo(map);
let templete8=` 
<h4> Cricket ground Shivaji University</h4>
<div style="text-align:center">
<img   width="200" height="200" src="/IMG_5593.JPG" >
</div>
`//add popup messages
marker8.bindPopup(templete8);
const circle8=L.circle([16.683586, 74.250281],{
    radius:30,
    color:'purple',
}).addTo(map);



//9
const marker9=L.marker([16.683918, 74.249107]).addTo(map);
let templete9=` 
<h4> Running Track shivaji university</h4>
<div style="text-align:center">
<img   width="200" height="200" src="/hqdefault.jpg" >
</div>
`//add popup messages
marker9.bindPopup(templete9);
const circle9=L.circle([16.683918, 74.249107],{
    radius:30,
    color:'seagreen',
}).addTo(map);

//10
const marker10=L.marker([16.681847, 74.247868]).addTo(map);
let templete10=` 
<h4> NCC bhavan Shivaji University</h4>
<div style="text-align:center">
<img   width="200" height="200" src="/Screenshot 2022-03-12 195942.png" >
</div>
`//add popup messages
marker10.bindPopup(templete10);
const circle10=L.circle([16.681847, 74.247868],{
    radius:30,
    color:'darkgray',
}).addTo(map);


//11
const marker11=L.marker([16.681369007454812, 74.24993630986125]).addTo(map);
let templete11=` 
<h4> Viman Building, Shivaji University</h4>
`
marker11.bindPopup(templete11);
const circle11=L.circle([16.681369007454812, 74.24993630986125],{
    radius:30,
}).addTo(map);



// 12
const marker12=L.marker([16.674731, 74.253663]).addTo(map);
let templete12=` 
<h4>Department of languges shivaji university</h4>
`
marker12.bindPopup(templete12);

const circle12=L.circle([16.674731, 74.253663],{
    radius:30,
    color:'Cyan',
}).addTo(map);

// //13
// const marker13=L.marker([16.674843785675574, 74.25365090220686]).addTo(map);


// const circle13=L.circle([16.674843785675574, 74.25365090220686],{
//     radius:30,
//     color: crimson,

// }).addTo(map);
