const button=document.getElementById("button");
const city=document.getElementById("city");
const weather=document.getElementById("weather");
const description=document.getElementById("description");
let i=0;
button.onclick=()=>{
    axios
    .get('https://www.freetestapi.com/api/v1/weathers')
    .then(function(response){
        weather.textContent="";
        city.textContent=response.data[i].city;
        weather.textContent=response.data[i].temperature;
        description.textContent=response.data[i].weather_description;
        i++;
    })
    .catch(function(error){
        console.log(error);
    })
}

