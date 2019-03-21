//init GITHUB
const github = new GitHub;
const ui = new UI;

const searchUser = document.getElementById('searchUser');


//Search input event listener
searchUser.addEventListener('keyup',(e) => {
  const userText = e.target.value;

  if(userText !== ''){
    console.log(userText);
    //Make HTTP Call
    github.getUser(userText)
    .then(data => {
      if(data.profile.message === 'Not Found'){
        //show alert
        ui.showAlert('User Not Found!','alert alert-danger');
      }
      else{
        //show profile
        ui.showProfile(data.profile);
      }
    });
  } else{
    //Clear Profile
    ui.clearProfile();
  }
});