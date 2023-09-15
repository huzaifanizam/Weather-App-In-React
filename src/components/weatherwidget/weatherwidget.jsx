import './weatheerwidget.css'


const WeatherCard = ({weatherData})=> {
    return (

      <div class="card">
        <h2>{weatherData?.name}</h2>
        <h2>{weatherData?.sys?.country}</h2>
        <h3>  Humidity : {weatherData?.main?.humidity}</h3>
        <h1>{weatherData?.main?.temp}</h1>
        <div class="sky">
            <div class="sun"></div>
            <div class="cloud">
                <div class="circle-small"></div>
                <div class="circle-tall"></div>
                <div class="circle-medium"></div>
            </div>
        </div>
        <h3><span>wind speed : { weatherData?.wind?.speed} <span class="dot">•••</span> <br /> weather: {weatherData?.weather[0]?.description}</span></h3>
        {/* <div className='card'>
        City Name:{weatherData?.name}
        <br />
        Country: {weatherData?.sys?.country}
        <br />
        temp: {weatherData?.main?.temp}
        <br />
        humidity: {weatherData?.main?.humidity}
        <br />
        wind speed: { weatherData?.wind?.speed}
        <br />
        weather: {weatherData?.weather[0]?.description} */}

      </div>
    );
};

export default  WeatherCard;
