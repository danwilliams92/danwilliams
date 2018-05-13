var forecastContainer = document.querySelector('#forecast-container');
var submitButton = document.querySelector('#getWeather');
var city = document.querySelector('#cityQuery').val();
var url = `http://api.openweathermap.org/data/2.5/weather?q=`;
var tempForecast = document.querySelector('#temperature');
var humidityForecast = document.querySelector('#humidity');		
		
		
		
		submitButton.addEventListener('click', getForecast());
		
		
		
		function getForecast(data){
			if(city === " "){
				forecastContainer.innerHTML = "Please give a valid city";
			} else {
				var request = new XMLHttpRequest();
				request.onreadystatechange = function(){
					if(this.readyState == 4 && this.status == 200){
						var response = JSON.parse(this.responseText);
						forecastContainer.innerHTML = response;
					getElements(response);
				}
			}
			request.open("GET", url, true);
			request.send();
			
			getElements = function(response){
				/* tempForecast.innerText = 'The temperature in' + city + 'is' + (response.main.temp);
				humidityForecast.innerText = 'The Humidity in' + city + 'is' + (response.main.humidity);
				*/
				
			}
		}
	}