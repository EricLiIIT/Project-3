function initMap() {
    // The location of Bourg-Saint-Maurice, France
    var bsg = { lat: 45.572240, lng: 6.829647 };
    // The map, centered at Bourg-Saint-Maurice
    var map = new google.maps.Map(
        document.getElementById('maps'), { zoom: 4, center: bsg });
    // The marker, positioned at Bourg-Saint-Maurice
    var marker = new google.maps.Marker({ position: bsg, map: map });
}