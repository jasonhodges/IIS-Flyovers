function gotRefreshedData (iss,weather) {
  console.log ('ISS Flyovers: ', iss);
  console.log ('Weather: ', weather);
}
function refreshData () {
  var LAT = '39.2014';
  var LON = '85.9214';
  jQuery.getJSON("http://api.open-notify.org/iss-pass.json?lat=LAT&lon=LAT&n=100&callback=CALLBACK=?", function (iss) {
    jQuery.getJSON("api.openweathermap.org/data/2.5/forecast?lat=LAT&lon=LON&callback=?", function (weather) {
      gotRefreshedData(iss, weather);
    });
  });
}