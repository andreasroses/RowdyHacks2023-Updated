function getTraits(sign){
    const traits = ["","","","",""];
    var check;
    var i = 0;
    document.getElementById('file').onchange = function(){
        var file = this.files[0];
        var reader = new FileReader();
        reader.onload = function(progressEvent){
        var arr = this.result.split(/\r\n|\n/);
        while(!check.equals("sign")){
        check = arr[i];
        i++;
        }
        for(j=0;j<5;j++){
            traits[j] = arr[i+1];
        }
        reader.readAsText(file);
        };
    }
    return traits;
}
function getMoonPhase(dob){
    const data = null;
    var mp;
const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
	if (this.readyState === this.DONE) {
		return this.moon_phase;
	}
});

xhr.open("GET", "https://moon-calendar.p.rapidapi.com/moon_phase?date=2002-03-07");
xhr.setRequestHeader("X-RapidAPI-Key", "e756fb4d03msh17e5a6b0398e7a4p163ee7jsn08863d810795");
xhr.setRequestHeader("X-RapidAPI-Host", "moon-calendar.p.rapidapi.com");

xhr.send(data);
}