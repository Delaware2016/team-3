var map, cloud;
var map;
var markers = [];
var infowindow;
var GeoMarker;
var closeMarkers = [];

function initMap() {
  infowindow = new google.maps.InfoWindow({
          content: contentString
        });

  map = new google.maps.Map(document.getElementById('map_canvas'), {
          center: {lat: 39.783229999999996, lng: -75.54888319999999},
          zoom: 16,
          mapTypeId: 'roadmap',
          styles: googMapsStyle
  });

  for (var i = 0; i < locations.length; i++) {
    makeMarker(locations[i]);
    /* Add the overlay to your map */
    cloud = new CloudOverlay(markers.slice(), map);
  }
  var image = 'http://ec2-54-210-156-211.compute-1.amazonaws.com:3000/images/Farmer.png';

  var markerOptions = {icon: image,
      animation: google.maps.Animation.DROP,
      optimized: false,
      zIndex:99999999
    };

  GeoMarker = new GeolocationMarker(map, markerOptions);
  centerMap();
  //var updateRT = 60000;
  var updateRT = 6000;
  var tillTheEOT = setInterval(extrapolateLoc, updateRT);
}

function extrapolateLoc() {
  for (var i=0; i<markers.length; i++) {
      if (GeoMarker.getBounds().contains(markers[i].getPosition())) { // horribly inefficient. Really REALLY inefficient.
        toggleBounceOn(i);
        //markers[i].setAnimation(google.maps.Animation.BOUNCE);
        break;
      } else {
        if (markers[i].getAnimation() !== null) {
          toggleBounceOff(i);
        }
      }
  }

}

function centerMap() {
  map.setCenter(markers[markers.length-1].getPosition());
}

function nextMarker() {
  makeMarker(locations[markers.length]);
  //cloud.setMarkers(markers); 
  centerMap();
}

function makeMarker(location) {
  
  var image = 'http://ec2-54-210-156-211.compute-1.amazonaws.com:3000/images/pin.png';
  var markerOptions = {icon: image,
      animation: google.maps.Animation.DROP,
      map: map, 
      position: new google.maps.LatLng(location.lat, location.lng)
    };
  
  var marker = new google.maps.Marker(markerOptions);
  marker.addListener('click', toggleInfo);
  markers.push(marker);
}

function getClosestMarkers() {
  /*
  Do fast stuff...later
  #Stretch Goals
  #Optimization
  */
}

function toggleInfo() {
  //window.alert(GeoMarker.getPosition());
  infowindow.open(map, this);
}

function toggleBounceOn(i) {
  //if (markers[i].getAnimation() !== null) {
    //markers[i].setAnimation(null);
  //} else {
     markers[i].setAnimation(google.maps.Animation.BOUNCE);
  //}
}

function toggleBounceOff(i) {
  markers[i].setAnimation(null);
}