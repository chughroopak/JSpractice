class Weather{
  constructor(city,state){
    this.appid = "da4311c4db4902fa1b4f24d0e3f69d4c";
    this.city = city,
    this.state =state;
  }

  async getWeather(){
    const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.state}&APPID=${this.appid}`);
    const resData = await response.json();
    return resData;
  }

  //change weather location
  changeLocation(city,state){
    this.city=city;
    this.state=state;
  }
}