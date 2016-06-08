$.ajax({
    url: "http://ipinfo.io/json",
    success: function(resp, txt, xhr){
      var loc = resp.city+", "+resp.region+", "+resp.country;
      $("#location").html(loc);
      console.log(resp);
      
      var weatherurl = `http://api.openweathermap.org/data/2.5/weather?zip=${resp.postal},us&APPID=a8f589720a5a69bbdd147c645d28f48b`;
      $.ajax({
        url: weatherurl,
        success: function(resp2, txt2, xhr2){
          console.log(resp2);
          var celsius = resp2.main.temp-273;
          celsius = Math.round(celsius);
          $("#temp").html(celsius);
          var iconName = resp2.weather[0].icon;
          var iconUrl = "http://openweathermap.org/img/w/"+iconName+".png";
          $("#weather-icon").attr("src", iconUrl);
        }
      });
    }
});


