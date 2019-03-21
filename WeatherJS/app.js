//init weather
const weather = new Weather("Delhi","IN");
const ui = new UI();

//GET WEATHER ON DOM LOAD
document.addEventListener('DOMContentLoaded',getWeather);

function getWeather(){
  weather.getWeather()
  .then((response)=>{
    console.log(response);
    ui.paint(response);
  })
  .catch((err)=>console.log(err));

}