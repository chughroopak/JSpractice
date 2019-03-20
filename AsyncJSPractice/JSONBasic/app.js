document.getElementById('get-customer').addEventListener('click',loadCustomer);
document.getElementById('get-customers').addEventListener('click',loadCustomers);



function loadCustomer(){
  const xhr = new XMLHttpRequest();

  xhr.open('GET','customer.json',true);

  xhr.onload = function(){
    if(this.status === 200){
      const customer = JSON.parse(this.responseText);
      document.getElementById('customer').innerHTML=`<ul>
      <li><b>ID:</b> ${customer.id}</li>
      <li><b>Name:</b> ${customer.name}</li>
      <li><b>Phone:</b> ${customer.phone}</li>
      <li><b>Company:</b> ${customer.company}</li>
      </ul>`;
    }
  }

  xhr.send();
}

function loadCustomers(){
  const xhr = new XMLHttpRequest();

  xhr.open('GET','customers.json',true);
  let output = `<hr>`;
  xhr.onload = function(){
    if(this.status === 200){
      const customers = JSON.parse(this.responseText);
      customers.forEach(function(customer){
        output += `<ul>
        <li><b>ID:</b> ${customer.id}</li>
        <li><b>Name:</b> ${customer.name}</li>
        <li><b>Phone:</b> ${customer.phone}</li>
        <li><b>Company:</b> ${customer.company}</li>
        </ul><hr>`;
      });
      document.getElementById('customers').innerHTML=output;
    }
  }

  xhr.send();
}