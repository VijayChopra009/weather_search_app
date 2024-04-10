const apikey = "2ae09182a68afc5e13f06adcc56a02f5";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

const search = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");
const icon = document.querySelector(".weather-icon");

async function weather(city) {
    const response = await fetch(apiurl + city + `&appid=${apikey}`);
    if (response.status == 404) {
        search.style.background="red";
        setTimeout(() => {
            search.style.background="#ebfffcd3";
        }, 1000);
        document.querySelector(".weather").style.display = "none";
    } else {
        let data = await response.json();
        console.log(data);

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = data.main.temp + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";


        if (data.weather[0].main == "Clouds") {
            icon.src = "./images/cloud.png"
        }
        else if (data.weather[0].main == "Clear") {
            icon.src = "./images/sun.png"
        }
        else if (data.weather[0].main == "Rain") {
            icon.src = "./images/rain.png"
        }
        else if (data.weather[0].main == "Drizzle") {
            icon.src = "./images/drizzle.png"
        }
        else if (data.weather[0].main == "Haze") {
            icon.src = "./images/haze.png"
        }
        else if (data.weather[0].main == "Snow") {
            icon.src = "./images/snowman.png"
        }

        document.querySelector(".weather").style.display = "block";
    }

}

searchbtn.addEventListener("click", () => {
    weather(search.value);
})




