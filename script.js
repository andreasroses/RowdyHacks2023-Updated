function hover(img)
{
    img.src = "2.jpg"
}
function remove(nuke){
    nuke.remove();
}
// function newBoxes(dob){
//     //const newNode = document.createElement("div");
//     const textNode = document.createTextNode(getZodiacSign(dob));
//     document.getElementById("header").append(textNode);
// }
function callFunctions(a,b,c){
    if(!a.value || !b.value){
        window.alert('Missing date!');
    }
    else{
    getMoonPhase(a,c);
    getMoonPhase(b,c);
    getZodiacSign(a,d);
    getZodiacSign(b,d);
}
    //getZodiacSign(b,c);
}
function getMoonPhase(dob,mppng){
    const data = null;
   // console.log("Moon Phase Requested!");
    var bDay = dob.value;
   console.log('dob',dob);
   document.getElementById(dob.id).parentNode.parentNode.innerHTML='Aeries'; //visibility = 'hidden';
    var mp;
    const sp = bDay.split("-");
    const bob = sp[0]+"-"+sp[1]+"-"+sp[2];
    var date = "https://moon-calendar.p.rapidapi.com/moon_phase?date=";
    date = date.concat(bob);
const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
	if (this.readyState === this.DONE) {
       // console.log(JSON.parse(this.response).moon_phase);
		mp = JSON.parse(this.response).moon_phase;
console.log("This is MP "+mp);
if(mp =='First Quarter'){
    mppng.src="lunarphase/first-quarter.png";
}
if(mp == 'Full Moon'){
    mppng.src="lunarphase/full.png";
}
if(mp == 'New Moon'){
    console.log("true");
    mppng.src='lunarphase/new-moon.png';
}
if(mp == 'Third Quarter'){
    mppng.src='lunarphase/third-quarter.png';
}
if(mp == 'Waxing Gibbous'){
    mppng.src='lunarphase/waxing-gibbous.png';
}

if(mp == 'Waning Gibbous'){
    mppng.src='lunarphase/waning-gibbous.png';
}
if(mp == 'Waning Crescent'){
    mppng.src='lunarphase/waning-crescent.png';
}
if(mp == 'Waxing Crescent'){
    mppng.src='lunarphase/waxing-crescent.png';
}
	}
}
);

xhr.open("GET", date);
xhr.setRequestHeader("X-RapidAPI-Key", "e756fb4d03msh17e5a6b0398e7a4p163ee7jsn08863d810795");
xhr.setRequestHeader("X-RapidAPI-Host", "moon-calendar.p.rapidapi.com");

xhr.send(data);
}

function getZodiacSign(input){
    console.log("Zodiac Sign Requested!");
    var bDay = input.value;
    console.log(bDay);
    const data = null;
    var final;
    var date = "https://horoskopos.p.rapidapi.com/zodiac-signs/search?day=";
    const sp = bDay.split("-");
    const bob = sp[0]+"-"+sp[1]+"-"+sp[2];
    date = date.concat(sp[2],"&lang=en&month=",sp[1],"&year=",sp[0],"&date=",bob);
    const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'e756fb4d03msh17e5a6b0398e7a4p163ee7jsn08863d810795',
		'X-RapidAPI-Host': 'horoskopos.p.rapidapi.com'
	}
};

fetch(date, options)
.then(response => response.json())
.then(data => console.log(data.zodiacSign.name))
.catch(err => console.error(err));
}