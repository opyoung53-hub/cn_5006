import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import WeatherMoodWidget from "./WeatherMoodWidget.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <WeatherMoodWidget pic="Sunny" />
    <WeatherMoodWidget pic="Rainy" />
    <WeatherMoodWidget pic="Cloudy" />
  </StrictMode>
);