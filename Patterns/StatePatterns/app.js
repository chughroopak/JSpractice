const PageState = function(){
  let currentState = new homeState(this);

  this.init = function(){
    this.change(new homeState);
  }

  this.change = function(state){
    currentState = state;
  }
};

const homeState = function(page){
  document.querySelector('#heading').textContent = null;
  document.querySelector('#content').innerHTML = `
  <div class="jumbotron">
  <h1 class="display-4">Hello, world!</h1>
  <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
  <hr class="my-4">
  <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
  <p class="lead">
    <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
  </p>
</div>
  `;
};

//About State
const aboutState = function(page){
  document.querySelector('#heading').textContent = 'About Us';
  document.querySelector('#content').innerHTML = `
  <p> This is the about state</p>
  `;
};

const contactState = function(page){
  document.querySelector('#heading').textContent = 'Contact Us';
  document.querySelector('#content').innerHTML = `
    <form>
    <div class="form group">
    <input type="text" name="name" id="name" class="form-control" placeholder="Name">
    </div>
    <div class="form group">
    <input type="text" name="name" id="name" class="form-control" placeholder="Email"></div>
    <div class="form group">
    <input type="submit" id="submit" class="btn btn-block btn-secondary" value="Submit"></div>
    </form>
  `;
};

const page = new PageState();

page.init();

//UI Vars
const home = document.getElementById('home'),
      about = document.getElementById('about'),
      contact = document.getElementById('contact');

//HOME
home.addEventListener('click',(e)=> {
  page.change(new homeState);
  e.preventDefault();
});

//ABOUT
about.addEventListener('click',(e)=> {
  page.change(new aboutState);
  e.preventDefault();
});

//contact
contact.addEventListener('click',(e)=> {
  page.change(new contactState);
  e.preventDefault();
});