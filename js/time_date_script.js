var x = setInterval(function() {
  var myDate = new Date();
  var myDay = myDate.getDay();
  var weekday = ['Sunday', 'Monday', 'Tuesday',
      'Wednesday', 'Thursday', 'Friday', 'Saturday'
  ];
  var dayNumber = String(myDate.getDate()).padStart(2, '0');
  var monthNumber = String(myDate.getMonth() + 1).padStart(2, '0');
  var yearFullNumber = myDate.getFullYear();
  var hours = String(myDate.getHours()).padStart(2, '0');
  var minutes = String(myDate.getMinutes()).padStart(2, '0');
  var seconds = String(myDate.getSeconds()).padStart(2, '0');

  document.getElementById("titletext").innerHTML = (weekday[myDay] + ", " + dayNumber + "." + monthNumber + "." + yearFullNumber + "<br/>" + hours + " : " + minutes + " : " + seconds);
}, 1000);
