window.addEventListener('load', () => {
    let long;
    let lat;

    if (navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position => {
            long = position.coords.longitude
            lat = position.coords.latitude
            
            const api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=metric&appid=ef2834f6ca7cd46c5802c404cb549b24
            `
            let timezone = document.querySelector(".timezone")
            let temperature = document.querySelector(".temperature")
            let summary = document.querySelector(".summary")
            let humidity = document.querySelector(".humidity")
            fetch(api).then(response => response.json())
            .then(data => {
                timezone.textContent = "Country: " + data.sys.country
                temperature.textContent = "Temp:  " + data.main.temp
                summary.textContent =  data.weather[0].description
                humidity.textContent = "Humidity: " + data.main.humidity
                
                let iconCode = data.weather[0].icon
                let iconUrl = "http://openweathermap.org/img/w/" + iconCode + ".png";
                $('#wicon').attr('src', iconUrl);
                console.log(data)
                
                
                
            })
        })
    }
    
})
