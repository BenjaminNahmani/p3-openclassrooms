$(function () { // $(function(){}) = windows.onload en Jquery 


    // Carte initialisé a CRETEIL
    var myMap = L.map('map', { scrollWheelZoom: false }).setView([48.790367, 2.455572], 13);

    new Slider()

    new MapMarker(L, myMap)

    if (sessionStorage.getItem("name")) // Permet de garder la réservation d'une page a l'autre
    {
        new Reservation()
    }
})