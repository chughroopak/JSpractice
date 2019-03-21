/** 
*
* @version 2.0.0
* @author Roopak Chugh
* @license MIT
*
**/

class EasyHTTP {
  //Make HTTP get Request
  async get(url){
    const response = await fetch(url);

    const resData = await response.json();

    return resData;
  }

  //Make HTTP post Request
  async post(url,data){

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-type':'application/json'
      },
      body: JSON.stringify(data)
    });

    const resData = await response.json();
    return resData;
  }

  //Make HTTP put Request
  async put(url,data){

    const response = await fetch(url, {
        method: 'PUT',
        headers: {
          'Content-type':'application/json'
        },
        body: JSON.stringify(data)
      });

      const resData = await response.json();
      return resData;
    
  }

  //Make HTTP delete Request
  async delete(url){
    const response = await fetch(url,{
      method: 'DELETE',
      headers:{
        'Content-type' : 'application/json'
      }
    });
    const resData = await 'resource deleted';
    return resData;
    }
}
