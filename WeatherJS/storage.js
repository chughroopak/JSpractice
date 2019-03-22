class Storage{
  constructor(){
    this.city;
    this.state;
    this.previousCity;
    this.previousState;
    this.defaultCity = 'Delhi';
    this.defaultState = 'IN';
  }

  getLocationData(){
    if(localStorage.getItem('city') == null){
      this.city = this.defaultCity;
    }
    else{
      this.city = localStorage.getItem('city');
    }

    if(localStorage.getItem('state') === null){
      this.state = this.defaultState;
    }
    else{
      this.state = localStorage.getItem('state');
    }

    return{
      city: this.city,
      state: this.state
    }
  }

  setPrevious(){
    this.setLocationData(this.previousCity,this.previousState);
  }

  setLocationData(city, state){
      this.previousCity=this.city;
      this.previousState=this.state;
      this.city = city;
      this.state = state;
      localStorage.setItem('city', city);
      localStorage.setItem('state',state);
  }
}