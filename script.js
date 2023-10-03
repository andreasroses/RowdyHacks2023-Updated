function hover(img) {
    img.src = "2.jpg"
}
function remove(nuke) {
    nuke.remove();
}
// function newBoxes(dob){
//     //const newNode = document.createElement("div");
//     const textNode = document.createTextNode(getZodiacSign(dob));
//     document.getElementById("header").append(textNode);
// }
function callFunctions(a, b, c, d) {
    alert('Your moons are now merging for your compatibility');
    if (!a.value || !b.value) {
        window.alert('Missing date!');
    }
    else {
        getMoonPhase(a, c);
        getMoonPhase(b, d);
        // getZodiacSign(a);
        // getZodiacSign(b);
    }
    //getZodiacSign(b,c);
}
function getMoonPhase(dob, id) {
    const data = null;
    console.log("Moon Phase Requested!");
    var bDay = dob.value;
    var mp;
    var date = "https://aa.usno.navy.mil/api/rstt/oneday?date=" + bDay + "&coords=40.927643, -98.338205";
    var mppng;
    fetch(date,{ mode: 'no-cors' })
        .then(response => {
            if (response.ok || response.type === 'opaque') {
                return response.text(); // Parse the response data as JSON
            } else {
                throw new Error('API request failed');
            }
        })
        .then(data => {
            // Process the response data here
            const mpData = JSON.parse(data);
            console.log(data);
            if (mpData.hasOwnProperty('curphase')) {
                mp = mpData.curphase;
            }
            else {
                mp = mpData.closestphase.phase;
            }
            console.log("This is MP " + mp);
            if (mp == 'First Quarter') {
                mppng = "lunarphase/first-quarter.png";
            }
            if (mp == 'Full Moon') {
                mppng = "lunarphase/full.png";
            }
            if (mp == 'New Moon') {
                mppng = 'lunarphase/new-moon.png';
            }
            if (mp == 'Last Quarter') {
                mppng = 'lunarphase/third-quarter.png';
            }
            if (mp == 'Waxing Gibbous') {
                mppng = 'lunarphase/waxing-gibbous.png';
            }

            if (mp == 'Waning Gibbous') {
                mppng = 'lunarphase/waning-gibbous.png';
            }
            if (mp == 'Waning Crescent') {
                mppng = 'lunarphase/waning-crescent.png';
            }
            if (mp == 'Waxing Crescent') {
                mppng = 'lunarphase/waxing-crescent.png';
            } // Example: Logging the data to the console
            console.log(mp);
            const moonImg = document.getElementById(id);
            moonImg.src = mppng;
        })
        .catch(error => {
            // Handle any errors here
            console.error(error); // Example: Logging the error to the console
        });
}

function getZodiacSign(input) {
    console.log("Zodiac Sign Requested!");
    var bDay = input.value;
    console.log(bDay);
    const data = null;
    var final;
    var date = "https://horoskopos.p.rapidapi.com/zodiac-signs/search?day=";
    const sp = bDay.split("-");
    const bob = sp[0] + "-" + sp[1] + "-" + sp[2];
    date = date.concat(sp[2], "&lang=en&month=", sp[1], "&year=", sp[0], "&date=", bob);
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'e756fb4d03msh17e5a6b0398e7a4p163ee7jsn08863d810795',
            'X-RapidAPI-Host': 'horoskopos.p.rapidapi.com'
        }
    };

    fetch(date, options)
        .then(response => response.json())
        .then(data => { console.log(data.zodiacSign.name); document.getElementById(input.id).parentNode.parentNode.innerHTML = "Zodiac Sign: " + data.zodiacSign.name; })
        .catch(err => console.error(err));
}