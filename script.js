// Data => Done
// Variable to Store the Element => Done
// Function to get the data from weather app
// Manipluate the varibe of already created element

let data;

const inputBox = document.getElementById("inputBox");
const countryName = document.getElementById("countryName");
const stateName = document.getElementById("stateName");
const cityName = document.getElementById("cityName");
const humidity = document.getElementById("humidity");
const windSpeed = document.getElementById("windSpeed");
const temprature = document.getElementById("temprature");
const logoImage = document.getElementById("logoImage");
const weatherStatus = document.getElementById("weatherStatus");
const date = document.getElementById("date");
const miniTemp = document.getElementById("minTemp");
const maxTemp = document.getElementById("maxTemp");
const sunset = document.getElementById("sunset");
const sunrise = document.getElementById("sunrise");


const getData = async (event) => {
  event.preventDefault();
  if (!inputBox.value) {
    alert("Please Enter The City Name: ");
    return;
  }

  //
  const city = inputBox.value;

  // Fetch Details

  const fetchData = await fetch(
    // // `c017703642f7440da92124836231102`
    // `http://api.weatherapi.com/v1/current.json?key=1&q=${city}`
    // `http://api.weatherapi.com/v1/current.json?key=ea180275cfb64a2287f75107231202&q=${city}`

    `http://api.weatherapi.com/v1/forecast.json?key=62573e1ec4e84bdfbbb73254231602&q=${city}&days=5`

  );

  const orgData = await fetchData.json();
  data = orgData;
  console.log(data);

 
  
  
    // Displaying the data in HTML
    countryName.innerHTML = data.location.country;
    stateName.innerHTML = data.location.region;
    cityName.innerHTML = data.location.name;
    humidity.innerHTML = data.current.humidity;
    windSpeed.innerHTML = data.current.wind_kph;
    temprature.innerHTML = data.current.temp_c;
    logoImage.src = data.current.condition.icon;
    weatherStatus.innerHTML = data.current.condition.text;
  
   
  };
  
  // date.innerHTML = data.forecast.forecastday[0].date;
  // miniTemp.innerHTML = data.forecast.forecastday[0].day.mintemp_c;
  // maxTemp.innerHTML = data.forecast.forecastday[0].day.maxtemp_c;
  // sunset.innerHTML = data.forecast.forecastday[0].astro.sunset;
  // sunrise.innerHTML = data.forecast.forecastday[0].astro.sunrise;

  // date1.innerHTML = data.forecast.forecastday[1].date;
  // miniTemp1.innerHTML = data.forecast.forecastday[1].day.mintemp_c;
  // maxTemp1.innerHTML = data.forecast.forecastday[1].day.maxtemp_c;
 
  
  // date3.innerHTML = data.forecast.forecastday[3].date;
  // miniTemp3.innerHTML = data.forecast.forecastday[3].day.mintemp_c;
  // maxTemp3.innerHTML = data.forecast.forecastday[3].day.maxtemp_c;
  // sunset3.innerHTML = data.forecast.forecastday[3].astro.sunset;
  // sunrise3.innerHTML = data.forecast.forecastday[3].astro.sunrise;
  
  




















// api key = 62573e1ec4e84bdfbbb73254231602