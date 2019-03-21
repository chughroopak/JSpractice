class UI{

  constructor(){
    this.location = document.getElementById('w-location');
    this.desc = document.getElementById('w-desc');
    this.string = document.getElementById('w-string');
    this.details = document.getElementById('w-details');
    this.icon = document.getElementById('w-icon');
    this.humidity = document.getElementById('w-humidity');
    this.cloudiness = document.getElementById('w-cloudiness');
    this.wind = document.getElementById('w-wind');
    this.visibility = document.getElementById('w-visibility');
  }

  paint(result){
    this.location.textContent = result.name+','+result.sys.country;
    this.desc.textContent = result.weather[0].main;
    this.string.innerHTML = `<b>Temprature: </b>${Math.floor(result.main.temp-273)} &deg;C`;
    this.icon.setAttribute('src', `http://openweathermap.org/img/w/${result.weather[0].icon}.png`);
    this.humidity.textContent=`Relative Humidity: ${result.main.humidity}%`;
    this.cloudiness.textContent=`Cloudiness: ${result.clouds.all}%`;
    this.visibility.textContent=`Visibility: ${result.visibility/1000} Km`
    this.wind.textContent=`Wind: ${result.wind.speed} m/s`;
  }
}