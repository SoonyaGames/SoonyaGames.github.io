var day_description = "Отчисления";
var today = new Date();
var year = today.getYear();
if ((navigator.appName == "Microsoft Internet Explorer") && (year < 2000))		
year="19" + year;
if (navigator.appName == "Netscape")
year=1900 + year;
var date = new Date("March 31, " + year);
var diff = date.getTime() - today.getTime();
var days = Math.floor(diff / (1000 * 60 * 60 * 24));

document.write("<center><h1>")
document.write("Осталось " + (days+1) + " дней до " + day_description + "!");