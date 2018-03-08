


mapboxgl.accessToken = 'pk.eyJ1IjoicmpkZXNobXVraCIsImEiOiJjajAzZm1nNWMwYXV4MndwM3Rsb3p6cHNnIn0.AssOKgLheiWRLzKSW4UWUg';
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/rjdeshmukh/cje8st0pi7yqc2snrbp4rtq0m'
});


map.on('load', function() {
    map.loadImage('img/map/map-marker.svg', function(error, image) {
        if (error) throw error;
        map.addImage('nid-marker', image);
        map.addLayer({
            "id": "points",
            "type": "symbol",
            "source": {
                "type": "geojson",
                "data": {
                    "type": "FeatureCollection",
                    "features": [{
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [77.535793, 13.034548],
                            "zoom": 16.21
                        }
                    }]
                }
            },
            "layout": {
                "icon-image": "nid-marker",
                "icon-size": 0.35
            }
        });
    });
});
