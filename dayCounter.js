var day_description = "Отчисления";
var day_before = "Íîâîãî ãîäà";

var today = new Date();
var year = today.getYear();
if ((navigator.appName == "Microsoft Internet Explorer") && (year < 2000))		
year="19" + year;
if (navigator.appName == "Netscape")
year=1900 + year;
var date = new Date("March 31, " + year);
var diff = date.getTime() - today.getTime();
var days = Math.floor(diff / (1000 * 60 * 60 * 24));

document.write("<center><h3>")

if (days > 1)
document.write("Осталось " + (days+1) + " дней до " + day_description + "!");
else if (days == 1)
document.write("Çàâòðà " + day_before  + "!");
else if (days == 0)
document.write("Ñåãîäíÿ " + day_before + "!");
else if (days == -1)
document.write("Ýòî " + day_description + "!");
else if (days < -1)
document.write(day_description + " was " + ((days+1)*-1) + (days < -2 ? " äíÿ(åé)" : " day") + " ago this year!");
document.write("</h3></center>");