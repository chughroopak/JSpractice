/** 
*
* @version 2.0.0
* @author Roopak Chugh
* @license MIT
*
**/

class EasyHTTP {
  //Make HTTP get Request
  get(url){

    return new Promise((resolve, reject) => {
      fetch(url)
      .then(res => res.json())
      .then(data => resolve(data))
      .catch(err => reject(err));
    }) ;
    
  }

  //Make HTTP post Request
  post(url,data){

    return new Promise((resolve, reject) => {
      fetch(url, {
        method: 'POST',
        headers: {
          'Content-type':'application/json'
        },
        body: JSON.stringify(data)
      })
      .then(res => res.json())
      .then(data => resolve(data))
      .catch(err => reject(err));
    }) ;
    
  }

  //Make HTTP put Request
  put(url,data){

    return new Promise((resolve, reject) => {
      fetch(url, {
        method: 'PUT',
        headers: {
          'Content-type':'application/json'
        },
        body: JSON.stringify(data)
      })
      .then(res => res.json())
      .then(data => resolve(data))
      .catch(err => reject(err));
    }) ;
    
  }

  //Make HTTP delete Request
  delete(url){
    return new Promise((resolve, reject) => {
      fetch(url)
      .then(res => res.json())
      .then(() => resolve('resource deleted'))
      .catch(err => reject(err));
    }) ;
    
  }


}
