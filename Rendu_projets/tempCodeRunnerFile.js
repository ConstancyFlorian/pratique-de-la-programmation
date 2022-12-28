const axios = require("axios");
const OSCServer = require("./oscServer");

const address = 'localhost';
const port = 3001;

const oscServer = new OSCServer(port, address);



// getAvion();


const options = {
  method: 'GET',
  url: 'https://adsbx-flight-sim-traffic.p.rapidapi.com/api/aircraft/json/lat/-11/lon/11/dist/25/',
  headers: {
    'X-RapidAPI-Key': 'a60c42affemsh0e2e25f5a558651p17efd2jsnb70b11ddc853',
    'X-RapidAPI-Host': 'adsbx-flight-sim-traffic.p.rapidapi.com'
  }
};

async function getData() {
  let result = await axios.request(options)
    .then(function (response) {
      return response.data.ptime
    })
    .catch(function (error) {
      console.error(error);
  });
  return result;
}

async function getAvion() {
  let data = await getData();
  console.log(data);
  oscServer.sendMsg('avion', data);
}



async function requestWeather(options) {
  // console.log(options);
  return await axios.request(options).then(function (response) {
      console.log(response.data);
      return response.data;
  }).catch(function (error) {
      console.error(error);
  });
}

async function displayCurrentWeather(params) {
  let weather = await this.requestWeather(this.getOptions());
  let infoToDisplay = [];
  params.forEach(param => {
      infoToDisplay.push({param: param, value: weather.current[param]});
      // console.log(`${param} à ${this.city} :  ${infoToDisplay}`); //${weather.current.wind_kph}
  });
  return infoToDisplay;
}

for (let i=0; i<10; i++){
  setTimeout(function() {
    console.log('timeouted, ', i)
    getAvion(); 
  }, 5000*i);
}