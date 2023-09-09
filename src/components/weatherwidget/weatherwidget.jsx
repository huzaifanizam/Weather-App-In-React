import './weatheerwidget.css'


const WeatherCard = (weatherData)=> {
    return (
        <div>
        City Name:{weatherData?.name}
        <br />
        Country: {weatherData?.sys?.country}
        <br />
        temp: {weatherData?.main?.temp}
        <br />
        humidity: {weatherData?.main?.humidity}
        <br />
        wind speed: {weatherData?.wind?.speed}
        <br />
        weather: {weatherData?.weather[0]?.description}
      </div>
      
    );

};

export default  WeatherCard;
