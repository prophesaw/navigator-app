mapboxgl.accessToken = 'pk.eyJ1IjoicHJvcGhlc2F3IiwiYSI6ImNsYXRsOXRvbjAyMzkzb3FtaW90MzlqYzkifQ.-2Y1KwxJOz_iph9afpmaOg';


navigator.geolocation.getCurrentPosition(successLocation,errorLocation,{
    enableHighAccuracy:true
});

function successLocation(position){
    setUpMap([position.coords.longitude,position.coords.latitude]);

}
function errorLocation(){
    setUpMap([3.359045,7.145309]);

}

function setUpMap(center){
    const map = new mapboxgl.Map({
        container: 'map', // container ID
        style: 'mapbox://styles/mapbox/streets-v12', // style URL
        center: center,
        zoom: 15, // starting zoom
        });
        
        const nav =new mapboxgl.NavigationControl();
        map.addControl(nav);
        const directions = new MapboxDirections({
            accessToken:mapboxgl.accessToken
        });
        
        map.addControl(directions,'top-left');

}
