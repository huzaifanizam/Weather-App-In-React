import axios from "axios";
import { useState, useRef } from "react";
import WeatherCard from "../weatherwidget/weatherwidget";
import "./home.css";

const Home = () => {
  // const [ cityName , setCityName ] = useState("")

  const [weatherData, setweatherData] = useState(null);
  const cityNameRef = useRef(null);

  const SubmitHandeler = async (e) => {
    e.preventDefault();

    console.log("City Name; ", cityNameRef.current.value);

    let API_KEY = "e0f99c494c2ce394a18cc2fd3f100543";
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityNameRef.current.value}&appid=${API_KEY}&units=metric`
      );
      console.log(response.data);
      setweatherData(response.data);
    } catch (error) {
      console.log(error.data);
    }
  };

  return (
    <div>
      {/* <form onSubmit={SubmitHandeler}>
        <label htmlFor="cityNameInput"> City Name </label>
        <input
          id="cityNameInput"
          type="text"
          required
          maxLength={20}
          minLength={2}
          ref={cityNameRef}
        />
        <br />
        <button type="submit"> Get Weather </button>
      </form> */}
      <div class="wrapper">
        <form onSubmit={SubmitHandeler}>
          <label htmlFor="cityNameInput"> <center> Weather Application </center> </label>
          <div class="input-box">
            <input
              type="text"
              id="cityNameInput"
              placeholder="Your Location"
              maxLength={20}
              minLength={2}
              ref={cityNameRef}
              required
            />
          </div>
          <button type="submit" class="btn">
            Get Weather
          </button>
        </form>
      </div>

      <br />

      {weatherData ? ( <WeatherCard weatherData={weatherData} />) : (<div className="wrapper"> <center>Enter Your City Name First</center> </div>)}
    </div>
  );
};

export default Home;
