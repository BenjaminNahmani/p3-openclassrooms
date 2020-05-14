class MapMarker{

    constructor(L,myMap) {
        $.get("https://api.jcdecaux.com/vls/v1/stations?contract=creteil&apiKey=4b9cc2545ee45e4946453c4c45e97a274001368e",function(data) {
            

            // Marqueur personnalisé
            var icone = L.icon({
                iconUrl:"image/icone.png",
                iconSize: [50, 50],
                iconAnchor: [25, 50],
                popupAnchor: [0, -50]
            })
            
            // Chargement des tuiles
            L.tileLayer('https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png}', {
            attribution: 'données c <a href="//osm.org/ - copyright">OpenStreetMap</a>/0Dbl - rendu <a href="https://openstreetmap.fr/">OSM France</a>',
            minzoom: 10,
            maxZoom: 20,
            })
            .addTo(myMap);

            var markersTable = []
        
            // Regroupement des marqueurs (regroupe les marqueurs présent a proximité dans une petite bulle où qui indiquera combien de marqueur seront présent aux alentours.)
            var markers = L.markerClusterGroup();

            data.forEach(station => {
                var marker = L.marker(station.position,{icon:icone}).on("click", function() {


                    console.log(station)



                    if(station.available_bikes > 0){

                        if( !sessionStorage.getItem("timeLimit"))
                        {
                            $("#statut_station").text("Statut : "+station.status)
                            $("#bikes_address").text("Adresse : "+station.address)
                            $("#places_bikes").text("Place dans la station : "+station.available_bike_stands)
                            $("#bikes_available").text("Vélo disponibles : "+station.available_bikes)


                            let recup = $('#items_form');
                        
                            recup.css("display","flex");

                            new Form(station)
                        }else{
                            alert("vous avez deja une reservation en cours")
                        }
                                   

                   }else{
                       alert("aucuns velos disponibles")
                   } 

                }) 
                
                // Pop-up sur le marqueur
                marker.bindPopup("<p>"+station.address+"</p>");

                markers.addLayer(marker); // Ajoute le marqueur au regroupement de marqueur

                markersTable.push(marker)

               
                
            });

            // Regroupement des marqueurs dans un groupe Leaflet
            var group = new L.featureGroup(markersTable);

            // Adaptation du zoom au groupe
            myMap.fitBounds(group.getBounds().pad(0.5)); // Crée automatiquement les limites dans le quel les marqueurs se trouvent
           
            myMap.addLayer(markers);

        })
    }


}

