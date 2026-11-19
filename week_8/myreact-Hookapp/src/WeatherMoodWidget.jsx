
import { useState, useEffect } from "react";
import Sunny from "./Sunny.png";
import Rainy from "./Rainy.png";
import Cloudy from "./Cloudy.png";

function WeatherMoodWidget({ pic: selectedWeather }) {
  const [image, setImage] = useState(Sunny);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const weatherImages = {
      Sunny,
      Rainy,
      Cloudy,
    };

    setImage(weatherImages[selectedWeather] || Sunny);
    setCount(0);
  }, [selectedWeather]);

  const handleClick = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <div className="App">
      <h2>My Mood Weather Widget</h2>

      <p>{selectedWeather} Weather</p>

      <button type="button" onClick={handleClick}>
        I feel this way! ({count})
        <img
          src={image}
          alt={selectedWeather}
          width="100"
        />
      </button>
    </div>
  );
}

export default WeatherMoodWidget;
