// Crear funcion y poner coordenadas para que muestre El Salvador
      function initMap() {
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 9,
          center: new google.maps.LatLng(13.794185, -88.89652999999998)
        });
        //Crea variables con las imagenes que se utilizaran como marcador dentro del mapa
        var image = "icono/logo.png";
        var image2= "icono/logoP (2).png";
        //Marcador UDB Soyapango
        var udb1 = new google.maps.Marker({
          position: {lat: 13.715917975408844, lng: -89.15368022695316},//Para determinar la ubicación dentro del mapa
          map: map,
          title: "Universidad Don Bosco, Soyapango.",
          icon: image
        });
        //Marcador UDB Antiguo Cuscatlán
        var udb2 = new google.maps.Marker({
          position: {lat:  13.6739996, lng: -89.2367663},
          map: map,
          title: "Universidad Don Bosco, Postgrados.",
          icon: image2        
        });
      } //Linkear con la api de Google