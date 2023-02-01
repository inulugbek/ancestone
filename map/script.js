const markers = [];

const createElement = (marker) => {
    console.log(marker);
    let name = marker.title;
    let image = marker.image;
    let info = marker.info;

    let card = document.createElement("div");
    card.classList.add("card");
    document.body.appendChild(card);
    
    let imageEl = document.createElement("img");
    imageEl.src = image;
    imageEl.alt = "Avatar";
    
    let container = document.createElement("div");
    let heading = document.createElement("h4");
    let boldText = document.createElement("b");
    boldText.textContent = name;
    heading.appendChild(boldText);
    
    let paragraph = document.createElement("p");
    paragraph.textContent = info;

    container.appendChild(heading);
    container.appendChild(paragraph);

    card.innerHTML = "";
    card.appendChild(imageEl);
    card.appendChild(container);

    card.addEventListener('click', () => {
        window.open(marker.url, '_blank');
    });
}

function initMap() {
    const mapStyle = [
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
        "featureType": "poi.business",
        "elementType": "labels",
        "stylers": [
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

    const map = new google.maps.Map(document.getElementById("googleMap"), {
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

    // markers of stones
    const locations = [
        {
            lat: 48.139188,
            lng: 11.56098,
            name: 'Helene Simons',
            image: 'assets/1.jpg',
            info: '*1879 - 25.11.1941; DEPORTIERT 1941 KAUNAS'
        },
        {
            lat: 48.140536,
            lng: 11.593462,
            name: 'Else Basch',
            image: 'assets/2.jpg',
            info: '*1878 - 18.6.1944; DEPORTIERT 1942 THERESIENSTADT'
        },
        {
            lat: 48.157657,
            lng: 11.580811,
            name: 'Joseph Schuster',
            image: 'assets/3.png',
            info: '*1873 - 23.1.1943; DEPORTIERT 1942 THERESIENSTADT'
        },
        {
            lat: 48.122089,
            lng: 11.543811,
            name: 'Emanuel Gutmann',
            image: 'assets/5.jpg',
            info: '*1873 – 1943; DEPORTIERT 1942 THERESIENSTADT'
        },
        {
            lat: 48.12004,
            lng: 11.549581,
            name: 'Simon Berger',
            image: 'assets/5.jpg',
            info: '*1896 - 25.11.1941; DEPORTIERT KAUNAS'
        },
    ];

    locations.forEach(location => {
        let marker = new google.maps.Marker({
            position: {
                lat: location.lat, 
                lng: location.lng
            },
            map: map,
            title: location.name,
            image: location.image,
            info: location.info,
            url: `https://www.google.com/maps/search/ + ${location.lat} + , + ${location.lng}`,
            icon: {
                size: new google.maps.Size(15, 30),
                scaledSize: new google.maps.Size(15, 30),
                url: 'assets/pin.png'
            },
        });

        markers.push(marker);
    });

    markers.forEach((marker) => {
        google.maps.event.addListener(marker, 'click', function() {
            let card = document.querySelector(".card");

            if (card) {
                card.remove();
            }

            createElement(marker);
        });

    });
}