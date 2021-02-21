<template>
  <!-- <div> -->
    <!-- <div id="floating-panel">
    <b>Start: </b>
    <select id="start">
      <option value="chicago, il">Chicago</option>
      <option value="st louis, mo">St Louis</option>
      <option value="joplin, mo">Joplin, MO</option>
      <option value="oklahoma city, ok">Oklahoma City</option>
      <option value="amarillo, tx">Amarillo</option>
      <option value="gallup, nm">Gallup, NM</option>
      <option value="flagstaff, az">Flagstaff, AZ</option>
      <option value="winona, az">Winona</option>
      <option value="kingman, az">Kingman</option>
      <option value="barstow, ca">Barstow</option>
      <option value="san bernardino, ca">San Bernardino</option>
      <option value="los angeles, ca">Los Angeles</option>
    </select>
    <b>End: </b>
    <select id="end">
      <option value="chicago, il">Chicago</option>
      <option value="st louis, mo">St Louis</option>
      <option value="joplin, mo">Joplin, MO</option>
      <option value="oklahoma city, ok">Oklahoma City</option>
      <option value="amarillo, tx">Amarillo</option>
      <option value="gallup, nm">Gallup, NM</option>
      <option value="flagstaff, az">Flagstaff, AZ</option>
      <option value="winona, az">Winona</option>
      <option value="kingman, az">Kingman</option>
      <option value="barstow, ca">Barstow</option>
      <option value="san bernardino, ca">San Bernardino</option>
      <option value="los angeles, ca">Los Angeles</option>
    </select>
    </div>
    <div id="map"></div>
  </div> -->
    <base-header class="pb-6 pb-8 pt-5 pt-md-8 bg-gradient-warning">
    
      <b-row>
        <b-col>
          <b-card no-body class="border-0">
            <div id="map-custom" class="map-canvas"
                 style="height: 600px;"></div>
                 
          </b-card>
        </b-col>
      </b-row>
      
    </base-header>

</template>

   
<script>
  import { API_KEY } from './Maps/API_KEY';
  import GoogleMapsLoader from 'google-maps';

  GoogleMapsLoader.KEY ="AIzaSyDLDnz1m8s_xuDzXV6xG-GEm9Jg8Qcpr0w";

  export default {
    methods: {
      // initMap(google) {
      //   var directionsService = new google.maps.DirectionsService;
      //   var directionsDisplay = new google.maps.DirectionsRenderer;
      //   var map = new google.maps.Map(document.getElementById('map'), {
      //     zoom: 17,
      //     center: {lat:38.582559969215886, lng:-121.41242937344376}
      //   });
      //   directionsDisplay.setMap(map);

      //   var onChangeHandler = function() {
      //     calculateAndDisplayRoute(directionsService, directionsDisplay);
      //   };
      //   document.getElementById('start').addEventListener('change', onChangeHandler);
      //   document.getElementById('end').addEventListener('change', onChangeHandler);
      // },
      // calculateAndDisplayRoute(directionsService, directionsDisplay) {
      //   directionsService.route({
      //     origin: document.getElementById('start').value,
      //     destination: document.getElementById('end').value,
      //     travelMode: 'DRIVING'
      //   }, function(response, status) {
      //     if (status === 'OK') {
      //       directionsDisplay.setDirections(response);
      //     } else {
      //       window.alert('Directions request failed due to ' + status);
      //     }
      //   });
      // }
      initMap(google) {
        let map, lat = 40.748817, lng = -73.985428, color = "#5e72e4";
        map = document.getElementById('map-custom');

        let myLatlng = new google.maps.LatLng(lat, lng);
        let mapOptions = {
          zoom: 12,
          scrollwheel: false,
          center: myLatlng,
          mapTypeId: google.maps.MapTypeId.ROADMAP,
          styles: [{
            "featureType": "administrative",
            "elementType": "labels.text.fill",
            "stylers": [{ "color": "#444444" }]
          }, {
            "featureType": "landscape",
            "elementType": "all",
            "stylers": [{ "color": "#f2f2f2" }]
          }, {
            "featureType": "poi",
            "elementType": "all",
            "stylers": [{ "visibility": "off" }]
          }, {
            "featureType": "road",
            "elementType": "all",
            "stylers": [{ "saturation": -100 }, { "lightness": 45 }]
          }, {
            "featureType": "road.highway",
            "elementType": "all",
            "stylers": [{ "visibility": "simplified" }]
          }, {
            "featureType": "road.arterial",
            "elementType": "labels.icon",
            "stylers": [{ "visibility": "off" }]
          }, {
            "featureType": "transit",
            "elementType": "all",
            "stylers": [{ "visibility": "off" }]
          }, { "featureType": "water", "elementType": "all", "stylers": [{ "color": color }, { "visibility": "on" }] }]
        }

        map = new google.maps.Map(map, mapOptions);

        let marker = new google.maps.Marker({
          position: myLatlng,
          map: map,
          animation: google.maps.Animation.DROP,
          title: 'Hello World!'
        });

        let contentString = '<div class="info-window-content"><h2>Argon Dashboard PRO</h2>' +
          '<p>A beautiful premium dashboard for Bootstrap 4.</p></div>';

        let infowindow = new google.maps.InfoWindow({
          content: contentString
        });

        google.maps.event.addListener(marker, 'click', function () {
          infowindow.open(map, marker);
        });
      }
    },
    mounted() {
      GoogleMapsLoader.load(google => {
        this.initMap(google);
      });
    }
  };
</script>
