function hover(img)
{
    img.src = "2.jpg"
}
function getOutputDate(dateobj){
    var date = new Date();
    var dateobj = date.toISOString().substring(0,10);
    document.getElementById('dateobj').value = dateobj;
    return dateobj;
}

function getMoonPhase(dob){
    const bday = document.getElementById('dob').value;
    const data = null;
    var mp;
    const sp = bday.split("/");
    const bob = sp[2]+"-"+sp[0]+"-"+sp[1];
    var date = "https://moon-calendar.p.rapidapi.com/moon_phase?date=";
    date = date.concat(bob);
const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
	if (this.readyState === this.DONE) {
        console.log(JSON.parse(this.response).moon_phase);
		mp = JSON.parse(this.response).moon_phase;
	}
});

xhr.open("GET", date);
xhr.setRequestHeader("X-RapidAPI-Key", "e756fb4d03msh17e5a6b0398e7a4p163ee7jsn08863d810795");
xhr.setRequestHeader("X-RapidAPI-Host", "moon-calendar.p.rapidapi.com");

xhr.send(data);

if(mp =='First Quarter'){
    mp = 'first-quarter';
}
if(mp == 'Full Moon'){
    mp = 'full';
}
if(mp == 'New Moon'){
    mp =  'new-moon';
}
if(mp == 'Third Quarter'){
    mp =  'third-quarter';
}
if(mp == 'Waxing Gibbous'){
    mp = 'waxing-gibbous';
}

if(mp == 'Waning Gibbous'){
    mp =  'waning-gibbous';
}
if(mp == 'Waning Crescent'){
    mp =  'waning-crescent';
}
if(mp == 'Waxing Crescent'){
    mp =  'waxing-crescent';
}
console.log(mp);
return mp;
}

function getZodiacSign(dob){
    const bday = document.getElementById('dob').value;
    const data = null;
    var final;
    var date = "https://horoskopos.p.rapidapi.com/zodiac-signs/search?day=";
    const sp = bday.split("/");
    const bob = sp[2]+"-"+sp[0]+"-"+sp[1];
    console.log(bob);
    console.log(sp);
    date = date.concat(sp[1],"&lang=en&month=",sp[0],"&year=",sp[2],"&date=",bob);
    const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'e756fb4d03msh17e5a6b0398e7a4p163ee7jsn08863d810795',
		'X-RapidAPI-Host': 'horoskopos.p.rapidapi.com'
	}
};

fetch(date, options)
	.then((response) => response.json())
	.then((data) => {
        console.log(data.zodiacSign.name);
        final = console.log(data.zodiacSign.name);
        })
	    .catch(err => console.error(err));

    return final;
}