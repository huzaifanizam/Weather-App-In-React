import axios from "axios";
import { useState, useRef } from "react";
import WeatherCard from "../weatherwidget/weatherwidget";

const Home = () => {
  // const [ cityName , setCityName ] = useState("")

  const [weatherData, setweatherData] = useState("");
  const cityNameRef = useRef(null);

  const SubmitHandeler = async (e) => {
    e.preventDefault();
    // console.log("SubmitHandeler");

    // let cityName = document.querySelector("#cityNameInput").value;
    let API_KEY = "e0f99c494c2ce394a18cc2fd3f100543";

    console.log("City Name; ", cityNameRef.current.value);

    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityNameRef.current.value}&appid=${API_KEY}&units=metric`
      );
      // handle success
      console.log(response.data);
      setweatherData(response.data);
    } catch (error) {
      // handle error
      console.log(error.data);
    //   document.querySelector("#result").innerHTML =
    //     "error in getting weather data";
    }
  };

  return (
    <div>
      <form onSubmit={SubmitHandeler}>
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
      </form>

      <hr />

      {(weatherData)? <WeatherCard weatherData={weatherData} /> : <div>No Data</div>
    }
    </div>
  );
};

export default Home;
