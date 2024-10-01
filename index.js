function initialize() {
    var mapOptions = {
        center: new google.maps.LatLng(-22.9068467, -43.1728965),
        zoom: 14,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    var map = new google.maps.Map(document.getElementById("map_canvas"),
        mapOptions)
}