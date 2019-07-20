
function getAxios() {
     axios
       .get("https://project-1-api.herokuapp.com/showdates?api_key=e0eea5f0-0f8c-4b54-9fc4-ff50843766d4")
       .then(response => {
         console.log(response);
         // fetch array and store it in showsArray:
         let showsArray = response.data;
         console.log(showsArray);
       
        createShows(showsArray);
       
       })
       .catch(err => {
         alert('Server Error:' + err.message);
         console.error(err);
       });
     }
     
     getAxios();


     // ************** fetch values
     let mainContainer = document.querySelector('.homepage__shows');


     function createShows(array) {
        for (let i = 0; i < array.length; i++) {
        
           let showsContainer = document.createElement('div');
           showsContainer.className = "homepage__shows--card";
           mainContainer.appendChild(showsContainer);

           let mobileDate = document.createElement('div');
           mobileDate.className = "mobile";
           mobileDate.innerHTML = "Date";
           showsContainer.appendChild(mobileDate);


           let dateText = document.createElement('div');
           dateText.className = "date-text";
           dateText.innerHTML = array[i].date;
           showsContainer.appendChild(dateText);

           let mobileVenue = document.createElement('div');
           mobileVenue.className = "mobile";
           mobileVenue.innerHTML = "Venue";
           showsContainer.appendChild(mobileVenue);

           let venueText = document.createElement('div');
           venueText.className = "venue-text";
           venueText.innerHTML = array[i].place;
           showsContainer.appendChild(venueText);

           let mobileLocation = document.createElement('div');
           mobileLocation.className = "mobile";
           mobileLocation.innerHTML = "Location";
           showsContainer.appendChild(mobileLocation);

           let locationText = document.createElement('div');
           locationText.className = "venue-text";
           locationText.innerHTML = array[i].location;
           showsContainer.appendChild(locationText);


           let button = document.createElement('button');
           button.className = "card-button";
           button.innerHTML = "Buy Tickets";
           showsContainer.appendChild(button);

        }
       
     }

