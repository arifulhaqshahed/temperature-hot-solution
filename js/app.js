const API_key = `dd410ec31be67ba58c4d3d640627d4ad`;

const searchTemperature = () => {
    const city = document.getElementById('city-name').value;

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_key}&units=metric`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayTemperature(data))
} 

const setInnerText = (id, text) => {
    document.getElementById(id).innerText = text;
}

const displayTemperature = temperature => {
    setInnerText('city', temperature.name);
    setInnerText('temp', temperature.main.temp);
    setInnerText('condition', temperature.weather[0].main);
    
    // set icon
    const url = `http://openweathermap.org/img/wn/${temperature.weather[0].icon}@2x.png`;
    console.log(url);
    const imgIcon = document.getElementById('weather-icon');
    imgIcon.setAttribute('src', url);
    
}