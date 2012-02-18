var map;

//This function makes the map
function init(){            

        map = new OpenLayers.Map("mapCanvas");              // make a map object
        osmLayer = new OpenLayers.Layer.OSM();              // using OpenStreetMap (OSM)
        map.addLayer(osmLayer);                             // add OSM to map   
        //map.addControls();

        var mapCenter = new OpenLayers.LonLat(0, 47);       // make a lon/lat object
        map.setCenter(mapCenter, 3);                        // set the zoom level


}