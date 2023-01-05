const { createContext, useState } = require('react');

const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const [error, setError] = useState('');
  const [info, setInfo] = useState([]);

  const API_KEY = 'd7fbf7bafecd2860560184824e28793e';
  const getSearchResult = async (text) => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${text}&appid=${API_KEY}&units=metric`
      );
      const data = await response.json();
      setInfo(data);
    } catch (error) {
      setError(error.response.data.message);
    }
  };
  console.log(info);

  return (
    <WeatherContext.Provider value={{ error, info, getSearchResult }}>
      {children}
    </WeatherContext.Provider>
  );
};

export default WeatherContext;
