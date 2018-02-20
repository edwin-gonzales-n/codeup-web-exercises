// San antonio coordinates -> -33.58 -71.61
displayWeather('-33.58','-71.61');

function displayWeather(lat,lon){

    $.get("http://api.openweathermap.org/data/2.5/weather", {
        APPID: "c12a0547a06025b129ff3ac4132e4544",
        lat: lat,
        lon: lon,
        units: "imperial"
    }).done(function(data) {
       // console.log(data);
        $('.img_1-1').append('<a>Today</a>');
        $('.img_1-1').append('<p>' +data.main.temp_max+'/'+data.main.temp_min+'</p>');
        $('.img_1-1').append('<img src="http://openweathermap.org/img/w/'+data.weather[0].icon+'.png" alt="">');
        $('.img_1-1').append('<p>Clouds: ' +data.weather[0].description+'</p>');
        $('.img_1-1').append('<p>Humidity: ' +data.main.humidity+'</p>');
        $('.img_1-1').append('<p>Wind: ' +data.wind.speed+'</p>');
        $('.img_1-1').append('<p>Pressure: ' +data.main.pressure+'</p>');
        $('.img_1-1').append('<br>');
        $('#weatherLocation').append(''+data.name+'');
    });
    $.get("http://api.openweathermap.org/data/2.5/forecast", {
        APPID: "c12a0547a06025b129ff3ac4132e4544",
        // q:     input,
        lat: lat,
        lon: lon,
        units: "imperial"
    }).done(function(data){
        $('.img_1-2').append('<a>Tomorrow</a>');
        $('.img_1-2').append('<p>' +data.list[4].main.temp_max+'/'+data.list[4].main.temp_min+'</p>');
        $('.img_1-2').append('<img src="http://openweathermap.org/img/w/'+data.list[4].weather[0].icon+'.png" alt="">');
        $('.img_1-2').append('<p>Clouds: ' +data.list[4].weather[0].description+'</p>');
        $('.img_1-2').append('<p>Humidity: ' +data.list[4].main.humidity+'</p>');
        $('.img_1-2').append('<p>Wind: ' +data.list[4].wind.speed+'</p>');
        $('.img_1-2').append('<p>Pressure: ' +data.list[4].main.pressure+'</p>');
        $('.img_1-2').append('<br>');

        $('.img_1-3').append('<a>Day After Tomorrow</a>');
        $('.img_1-3').append('<p>' +data.list[12].main.temp_max+'/'+data.list[4].main.temp_min+'</p>');
        $('.img_1-3').append('<img src="http://openweathermap.org/img/w/'+data.list[12].weather[0].icon+'.png" alt="">');
        $('.img_1-3').append('<p>Clouds: ' +data.list[12].weather[0].description+'</p>');
        $('.img_1-3').append('<p>Humidity: ' +data.list[12].main.humidity+'</p>');
        $('.img_1-3').append('<p>Wind: ' +data.list[12].wind.speed+'</p>');
        $('.img_1-3').append('<p>Pressure: ' +data.list[12].main.pressure+'</p>');
        $('.img_1-3').append('<br>');
    });
}

var latarray = [];
var longiarray = [];
$('#searchLat').click(function(){
    $( "#lattitude" ).keyup(function() {
        latarray.push($(this).val());
    })
        .keyup();
    $( "#longitude" ).keyup(function() {
        // var longiarray = [];
        longiarray.push($(this).val());
    })
        .keyup();
    $('#weatherLocation').empty();
    $('.img_1-1').empty();
    $('.img_1-2').empty();
    $('.img_1-3').empty();

    var latDigits = latarray.toString();
    var longiDigits = longiarray.toString();
    displayWeather(latDigits, longiDigits);
});

var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 11
});
console.log(map);
map.setTilt(45);

var address = "San Antonio";
var geocoder = new google.maps.Geocoder();
geocoder.geocode({ "address": address }, function(results, status) {
    var latCoordinates = [];
    var lonCoordinates = [];
    // if the status returns a value of OK, then display the results in the browser.
    if (status == google.maps.GeocoderStatus.OK) {
        // Recenter the map over the address
        map.setCenter(results[0].geometry.location);
        var marker = new google.maps.Marker({
            position: results[0].geometry.location,
            map: map,
            draggable: true, // make marker draggable.
            animation: google.maps.Animation.DROP
        });

        google.maps.event.addListener(marker, 'dblclick', function(evet){
            map.setCenter(marker.getPosition());
            marker.setMap(map);
        });

        google.maps.event.addListener(marker, 'dragstart', function(evet){
            map.setZoom(8);
        });

        google.maps.event.addListener(marker, 'dragend', function(event) {
            var newLat = event.latLng.lat();
            latCoordinates.push(newLat);
            $('#Newlatitude').val(newLat);
            var newLon = event.latLng.lng();
            lonCoordinates.push(newLon);
            $('#Newlongitude').val(newLon);
            map.panTo(marker.getPosition());
            map.setZoom(10);
            map.setCenter(marker.getPosition());
            // console.log(map);
            $('#weatherLocation').empty();
            $('.img_1-1').empty();
            $('.img_1-2').empty();
            $('.img_1-3').empty();
            displayWeather(newLat,newLon);
        });

    } else {
        // Show an error message with the status if our request fails
        alert("Geocoding was not successful - STATUS: " + status);
    }
});

function initMap() {
    // variable to call the value entered by the user.
    var address = document.getElementById("user_address").value;
    // variable to call the Geocoder function/method.
    var geocoder = new google.maps.Geocoder();

    // Geocode or "search" for the value passed to the address variable.
    geocoder.geocode({ "address": address }, function(results, status) {

        // if the status returns a value of OK, then display the results in the browser.
        if (status == google.maps.GeocoderStatus.OK) {
            // Recenter the map over the address
            map.setCenter(results[0].geometry.location);
        } else {
            // Show an error message with the status if our request fails
            alert("Geocoding was not successful - STATUS: " + status);
        }
    });
}