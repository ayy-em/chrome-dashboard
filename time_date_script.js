var myDate = new Date();
var myDay = myDate.getDay();
var weekday = ['Sunday', 'Monday', 'Tuesday',
    'Wednesday', 'Thursday', 'Friday', 'Saturday'
];
var dayNumber = String(myDate.getDate()).padStart(2, '0');
var monthNumber = String(myDate.getMonth() + 1).padStart(2, '0');
var yearFullNumber = myDate.getFullYear();
document.write(weekday[myDay] + ", " + dayNumber + "." + monthNumber + "." + yearFullNumber);
document.write("<br/>");
// get hour value.
var hours = String(myDate.getHours()).padStart(2, '0');
var minutes = String(myDate.getMinutes()).padStart(2, '0');
var myTime = hours + " : " + minutes;
document.write(myTime);
