function apiCall() {


const apiUrl = 'https://run.mocky.io/v3/1cf99f40-712a-459c-8e34-7b34ac3e07c9';

var dataFromApi;
fetch(apiUrl)
  .then(response => {
   
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
   
    return response.json();
  })
  .then(data => {
    
    dataFromApi = data;
    let params = new URLSearchParams(window.location.search);
     let signSelected = params.get('sign').toString();

    let dataToBeDisplayed = dataFromApi[signSelected];
    console.log(dataToBeDisplayed)

    document.getElementById('sign-name').innerHTML = signSelected.toUpperCase();
    document.getElementById('description-sign').innerHTML = dataToBeDisplayed;
   document.getElementById('sign-image').src = "Images/"+signSelected +".jpeg"


  })
  .catch(error => {
   
    console.error('Fetch error:', error);
  });

}


apiCall();