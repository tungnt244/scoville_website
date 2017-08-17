function initMap() {
  var uluru = {lat: 35.646679, lng: 139.701801};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 18,
    center: uluru
  });
  var marker = new google.maps.Marker({
    position: uluru,
    map: map
  });
}