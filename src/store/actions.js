export default {
    savetodo({ commit }, todo) {
        commit('savetodo', todo);
    },
    findweather({ commit }, city) {
    	fetch('http://api.openweathermap.org/data/2.5/weather?q='+ city +'&appid=f695810da3d2519f537d79c03869977f&units=metric').then(  
            function(response) {  
              if (response.status !== 200) {  
                console.log('Status Code: ' + response.status);  
                return null;  
              }  
              response.json().then(function(data) {
                commit('findweather', data);
              });  
            }  
          )
          .catch(function(err) {  
            console.log(err);
            return null;  
          })
    }
}