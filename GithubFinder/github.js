class GitHub {
  constructor(){
    this.client_id = 'babf9b2f9404768f205e';
    this.client_secret = '91a4d1485d3b2111a4144eca30bd9ad3e62af920';
    this.repos_count = '5';
    this.repos_sort = 'created: asc';
  }

  async getUser(user){

    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const reposResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profile = await profileResponse.json();
    const repos = await reposResponse.json();

    return {
      profile,
      repos
    } 
  }

}