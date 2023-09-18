
const apiKey = "369d78e049abbd3e426e8db5017d1597";
const getWeatherButton = document.getElementById("get-weather-button");
const cityInput = document.getElementById("city-input");
const weatherInfoContainer2 = document.getElementById("weather-info");
const weathericon = document.getElementById("weather-image");

getWeatherButton.addEventListener( "click", () => {

  try {
    const city = document.getElementById('city-input').value;
    if (city) {
      getWeather(city);
    } else {
      throw new Error("Por favor, ingrese una ciudad");
    }
  } catch (error) {
    alert(error.message); // Muestra el mensaje de error en un cuadro de alerta
  }
})

async function getWeather(city){


  try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`);
  
    if (!response.ok) {
      throw new Error('La solicitud no se completó correctamente');
    }
  
    const data = await response.json();
    console.log(data);
  
      const temperature = Math.round(data.main.temp - 273.15);
      const description = data.weather[0].description;
      const cityName = data.name;
      const country = data.sys.country;
      const base = data.base;

     const icon = data.weather[0].icon;
     console.log(icon);
  
    const iconImage = document.createElement("img");
    iconImage.src = `https://openweathermap.org/img/wn/${icon}.png`;
   

  
    const weatherInfoContainer = document.getElementById('weather-info'); 
    weatherInfoContainer.appendChild(iconImage)

    

    
    const mensajeelemento = document.createElement("ul");
    mensajeelemento.textContent = `${temperature} °C en ${city}, ${country}, ${description} `;
    

   
    const weatherInfoContainer2 = document.getElementById('weather-info');
   
    weatherInfoContainer2 .classList.add("message", "outgoing");
    weatherInfoContainer2.appendChild(iconImage);
    weatherInfoContainer2.appendChild(mensajeelemento);
  

  } catch (error) {
    console.error(error);
  


  }
}


const resetButton = document.getElementById("reset-button");
resetButton.addEventListener("click", function () {
  const weatherInfoContainer = document.getElementById("weather-info");

  const iconImage = document.querySelector("#weather-info img");
  

  if (iconImage) {
    weatherInfoContainer.removeChild(iconImage);
  }

  weatherInfoContainer.textContent = "";
  weatherInfoContainer2.textContent = "";


  cityInput.value = "";
});
