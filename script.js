const apiKey="287c25180b4f9cc8db51c776ae4c5d3f";
const form=document.querySelector("form");

form.addEventListener('submit',function(e){
  e.preventDefault();
  const cityName=document.getElementById('city-name').value;
  getWeatherData(cityName);
})

async function getWeatherData(cityName){
 let url=`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&APPID=${apiKey}`;
 const response=await fetch(url);
 const data=await response.json();
 showWeatherInfo(data);
}

function showWeatherInfo(data){
  console.log(data)
  let imgIcon="http://api.openweathermap.org/img/w/"+data.weather[0].icon+".png";
  const weatherInfo=document.getElementById('weather-info');
  weatherInfo.innerHTML=`
  <h2>CountryCode: ${data.sys.country}</h2>
  <p>CityName: ${data.name}</p>
  <p>Sunrise: </p>
  <p>Sunset: </p>
  <p>Wind Speed: ${data.wind.speed}m/s</p>
  <p>Humidity: ${data.main.humidity}%</p>
  <p>Pressure: ${data.main.pressure}hPa</p>
  <p>Longitude: ${Math.round(data.coord.lon)}&deg;</p>
  <p>Latitude: ${Math.round(data.coord.lat)}&deg;</p>  
  <p>Weather: ${data.weather[0].description}<img src=${imgIcon} height=50 width=50></p>
  <p>Temperature: ${data.main.temp}F | ${Math.round(data.main.temp-273.15)}&degC</p>
  `;
}