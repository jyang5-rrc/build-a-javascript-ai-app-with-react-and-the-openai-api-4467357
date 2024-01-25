import { useEffect, useState } from "react";
import "./App.css";// CSS file for styling
import useApiRequests from "./components/useApiRequests";
import WeatherForm from "./components/WeatherForm";
import WeatherCard from "./components/WeatherCard";
import Description from "./components/Description";

function App() {
  const [prompt, setPrompt] = useState(""); // User input,prompt means the user input, useState is a hook for state management
  const [units, setUnits] = useState("metric");// Units for weather data, metric or imperial (default: metric), metric means Celsius, imperial means Fahrenheit
  const [weatherDataLoading, setWeatherDataLoading] = useState(false);// Loading state for weather data, true when API request is in progress, false when API request is complete
  const [weatherDescriptLoading, setWeatherDescriptLoading] = useState(false);// Loading state for weather description, true when API request is in progress, false when API request is complete
  const [errorMsg, setErrorMsg] = useState("");// Error message returned from API request

  // Custom hook to handle API requests. Fires when prompt changes.
  const { error, promptData, locationData, weatherData, weatherDescription } =
    useApiRequests(prompt);// useApiRequests is a custom hook, it is defined in components/useApiRequests.js, it is used to handle API requests

  // Set error message if error is returned from API request.
  useEffect(() => { // useEffect is a hook for side effects, it is used to handle side effects, such as API requests, it is called after every render
    if (error) {
      setErrorMsg(error);// setErrorMsg is a hook for state management, it is used to set error message returned from API request
      setWeatherDataLoading(false);// setWeatherDataLoading is a hook for state management, it is used to set weatherDataLoading to false when error is returned from API request
    }
  }, [error]);// [error] is a dependency array, it is used to specify the dependencies of useEffect, useEffect will be called when the dependencies change

  // Set weatherDataLoading to false when weatherData is returned from API request.
  useEffect(() => {
    if (weatherData) {
      setWeatherDataLoading(false);
    }
  }, [weatherData]);

  useEffect(() => {
    if (weatherDescription) {
      setWeatherDescriptLoading(false);
    }
  }, [weatherDescription]);

  // Set units to user input.
  useEffect(() => {
    if (promptData && promptData.units) {
      setUnits(promptData.units);
    }
  }, [promptData]);

  // Handle form submission. Set prompt to user input.
  const handleSubmit = (newPrompt) => {
    setErrorMsg("");
    setWeatherDataLoading(true);
    setWeatherDescriptLoading(true);
    setPrompt(newPrompt);
  };

  return (
    <div className="container">
      <header className="header">
        <h1 className="page-title">Current Weather</h1>
        <WeatherForm onSubmit={handleSubmit} />
        {error && <p className="error">{errorMsg.message}</p>}
        {weatherDescription ? (
          <Description
            isLoading={weatherDescriptLoading}
            weatherDescription={weatherDescription}
          />
        ) : (
          <Description isLoading={weatherDescriptLoading} />
        )}
      </header>
      <main className="main-content">
        {weatherData.name && !errorMsg ? (
          <WeatherCard
            isLoading={weatherDataLoading}
            data={weatherData}
            units={units}
            country={promptData.country}
            USstate={locationData[0].state}
            setUnits={setUnits}
          />
        ) : (
          <WeatherCard isLoading={weatherDataLoading} setUnits={setUnits} />
        )}
      </main>
    </div>
  );
}

export default App;
