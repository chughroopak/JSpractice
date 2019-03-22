const ui = new UI();
const storage = new Storage();
//get stored location data
const weatherLocation = storage.getLocationData();
//init weather
const weather = new Weather(weatherLocation.city, weatherLocation.state);



//GET WEATHER ON DOM LOAD
document.addEventListener('DOMContentLoaded',getWeather);
document.getElementById('w-change-btn').addEventListener('click',(e) => {
  const city = document.getElementById('city').value;
  const state = document.getElementById('state').value;
  weather.changeLocation(city,state);
  storage.setLocationData(city,state);
  getWeather();
  
  //Get and display weather

  $('#locModal').modal('hide');
});

function getWeather(){
  weather.getWeather()
  .then((response)=>{
    ui.paint(response);
  })
  .catch((err)=>{
    storage.setPrevious();
    ui.showAlert('City/State Data is not correct! Please try again.', 'alert alert-danger');
    
  });

}