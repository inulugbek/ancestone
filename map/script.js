let map, infoWindow;

function initMap() {

    var mapStyle = [
        {
        "elementType": "geometry",
        "stylers": [
            {
            "color": "#ebe3cd"
            }
        ]
        },
        {
        "elementType": "labels.text.fill",
        "stylers": [
            {
            "color": "#523735"
            }
        ]
        },
        {
        "elementType": "labels.text.stroke",
        "stylers": [
            {
            "color": "#f5f1e6"
            }
        ]
        },
        {
        "featureType": "administrative",
        "elementType": "geometry.stroke",
        "stylers": [
            {
            "color": "#c9b2a6"
            }
        ]
        },
        {
        "featureType": "administrative.land_parcel",
        "stylers": [
            {
            "visibility": "off"
            }
        ]
        },
        {
        "featureType": "administrative.land_parcel",
        "elementType": "geometry.stroke",
        "stylers": [
            {
            "color": "#dcd2be"
            }
        ]
        },
        {
        "featureType": "administrative.land_parcel",
        "elementType": "labels.text.fill",
        "stylers": [
            {
            "color": "#ae9e90"
            }
        ]
        },
        {
        "featureType": "administrative.neighborhood",
        "stylers": [
            {
            "visibility": "off"
            }
        ]
        },
        {
        "featureType": "landscape.natural",
        "elementType": "geometry",
        "stylers": [
            {
            "color": "#dfd2ae"
            }
        ]
        },
        {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [
            {
            "color": "#dfd2ae"
            }
        ]
        },
        {
        "featureType": "poi",
        "elementType": "labels.text",
        "stylers": [
            {
            "visibility": "off"
            }
        ]
        },
        {
        "featureType": "poi",
        "elementType": "labels.text.fill",
        "stylers": [
            {
            "color": "#93817c"
            }
        ]
        },
        {
        featureType: "poi.business",
        elementType: "labels",
        stylers: [
            { 
            "visibility": "off" 
            }
        ]
        },
        {
        "featureType": "poi.park",
        "elementType": "geometry.fill",
        "stylers": [
            {
            "color": "#a5b076"
            }
        ]
        },
        {
        "featureType": "poi.park",
        "elementType": "labels.text.fill",
        "stylers": [
            {
            "color": "#447530"
            }
        ]
        },
        {
        "featureType": "road",
        "elementType": "geometry",
        "stylers": [
            {
            "color": "#f5f1e6"
            }
        ]
        },
        {
        "featureType": "road",
        "elementType": "labels",
        "stylers": [
            {
            "visibility": "off"
            }
        ]
        },
        {
        "featureType": "road.arterial",
        "elementType": "geometry",
        "stylers": [
            {
            "color": "#fdfcf8"
            }
        ]
        },
        {
        "featureType": "road.highway",
        "elementType": "geometry",
        "stylers": [
            {
            "color": "#f8c967"
            }
        ]
        },
        {
        "featureType": "road.highway",
        "elementType": "geometry.stroke",
        "stylers": [
            {
            "color": "#e9bc62"
            }
        ]
        },
        {
        "featureType": "road.highway.controlled_access",
        "elementType": "geometry",
        "stylers": [
            {
            "color": "#e98d58"
            }
        ]
        },
        {
        "featureType": "road.highway.controlled_access",
        "elementType": "geometry.stroke",
        "stylers": [
            {
            "color": "#db8555"
            }
        ]
        },
        {
        "featureType": "road.local",
        "elementType": "labels.text.fill",
        "stylers": [
            {
            "color": "#806b63"
            }
        ]
        },
        {
        "featureType": "transit.line",
        "elementType": "geometry",
        "stylers": [
            {
            "color": "#dfd2ae"
            }
        ]
        },
        {
        "featureType": "transit.line",
        "elementType": "labels.text.fill",
        "stylers": [
            {
            "color": "#8f7d77"
            }
        ]
        },
        {
        "featureType": "transit.line",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
            "color": "#ebe3cd"
            }
        ]
        },
        {
        "featureType": "transit.station",
        "elementType": "geometry",
        "stylers": [
            {
            "color": "#dfd2ae"
            }
        ]
        },
        {
        "featureType": "water",
        "elementType": "geometry.fill",
        "stylers": [
            {
            "color": "#b9d3c2"
            }
        ]
        },
        {
        "featureType": "water",
        "elementType": "labels.text",
        "stylers": [
            {
            "visibility": "off"
            }
        ]
        },
        {
        "featureType": "water",
        "elementType": "labels.text.fill",
        "stylers": [
            {
            "color": "#92998d"
            }
        ]
        }
    ];

    map = new google.maps.Map(document.getElementById("googleMap"), {
        center: { lat: 48.1423965, lng: 11.5757072 },
        zoom: 15,
        styles: mapStyle,
        disableDefaultUI: true,
        mapTypeControl: false,
        scaleControl: true,
        streetViewControl: false,
        zoomControl: false,
        zoomControlOptions: {
            style: google.maps.ZoomControlStyle.NONE
        },
        mapTypeId: google.maps.MapTypeId.ROADMAP
    });

    infoWindow = new google.maps.InfoWindow();

    // markers of stones
    var markers = [
        [48.139188, 11.56098, 'Helene Simons', "assets/1.jpg", "*1879 - 25.11.1941; DEPORTIERT 1941 KAUNAS"],
        [48.140536, 11.593462, 'Else Basch', "assets/2.jpg", "*1878 - 18.6.1944; DEPORTIERT 1942 THERESIENSTADT"],
        [48.157657, 11.580811, 'Joseph Schuster', "assets/3.png", "*1873 - 23.1.1943; DEPORTIERT 1942 THERESIENSTADT"],
        [48.122089, 11.543811, 'Emanuel Gutmann', "assets/4.jpg", "*1873 – 1943; DEPORTIERT 1942 THERESIENSTADT"],
        [48.12004, 11.549581, 'Simon Berger', "assets/5.jpg", "*1896 - 25.11.1941; DEPORTIERT KAUNAS"],
    ];

    for (i = 0; i < markers.length; i++) {
        var lat = markers[i][0];
        var lng = markers[i][1];
        var name = markers[i][2];
        var imgSrc = markers[i[3]];
        var desc = markers[i[4]];

        marker = new google.maps.Marker({
                    position: new google.maps.LatLng(lat, lng),
                    map: map,
                    icon: {
                        size: new google.maps.Size(15, 30),
                        scaledSize: new google.maps.Size(15, 30),
                        url: 'assets/pin.png'
                    },
                });



        google.maps.event.addDomListener(marker, 'click', function() {
            var card = document.createElement("div");
            card.className = "card";
            
            var img = document.createElement("img");
            img.src = imgSrc;
            
            var container = document.createElement("div");
            var h4 = document.createElement("h4");
            var b = document.createElement("b");
            b.textContent = name;
            h4.appendChild(b);
            
            var p = document.createElement("p");
            p.textContent = desc;
            
            container.appendChild(h4);
            container.appendChild(p);
            
            card.appendChild(img);
            card.appendChild(container);

            card.onclick = function() {
                var url = 'https://www.google.com/maps/search/' + lat + "," + lng;
                window.open(url, '_blank');
              };
            
            document.body.appendChild(card);
        });
    }


    // my location button
    // const locationButton = document.createElement("div");
    // const locationIcon = document.createElement("i");
    // locationIcon.classList.add("material-icons nav__icon");
    // locationButton.children.add(locationIcon);
    // locationButton.id.add("my-position-button");

    // map.controls[google.maps.ControlPosition.RIGHT_BOTTOM].push(locationButton);
    
    // locationButton.addEventListener("click", () => {
    //     // Try HTML5 geolocation.
    //     if (navigator.geolocation) {
    //     navigator.geolocation.getCurrentPosition(
    //         (position) => {
    //         const pos = {
    //             lat: position.coords.latitude,
    //             lng: position.coords.longitude,
    //         };

    //         infoWindow.setPosition(pos);
    //         infoWindow.setContent("Location found.");
    //         infoWindow.open(map);
    //         map.setCenter(pos);
    //         },
    //         () => {
    //         handleLocationError(true, infoWindow, map.getCenter());
    //         }
    //     );
    //     } else {
    //     // Browser doesn't support Geolocation
    //     handleLocationError(false, infoWindow, map.getCenter());
    //     }
    // });

}


function handleLocationError(browserHasGeolocation, infoWindow, pos) {
    infoWindow.setPosition(pos);
    infoWindow.setContent(
        browserHasGeolocation
        ? "Error: The Geolocation service failed."
        : "Error: Your browser doesn't support geolocation."
    );
    infoWindow.open(map);
}

window.initMap = initMap;