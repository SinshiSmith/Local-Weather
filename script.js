
    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(position => {
            $.getJSON("https://fcc-weather-api.glitch.me/api/current?lat=" + position.coords.latitude + "&lon=" + position.coords.longitude, json => {
                var temp = json.main.temp;
                var celsius = true;
                var toFahrenheit = function (temp){
                    return temp * 9/5 + 32;
                }
                $("#country").html(json.name);
                $("#type").html("C");
                $("#temp").html(Math.round(temp));
                $("#type").on("click", () => {
                    celsius = !celsius;
                    if (celsius){
                        $("#type").html("C"); 
                        $("#temp").html(Math.round(temp));
                    } else {
                        $("#type").html("F");
                        $("#temp").html(Math.round(toFahrenheit(temp)));
                    }
                })
                
                
                $("#img").attr("src", json.weather[0].icon);
                $("#description").html(json.weather[0].description);
            })
        });

    }
