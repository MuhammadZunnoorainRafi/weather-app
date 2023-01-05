import React, { useContext } from 'react';
import { Accordion } from 'flowbite-react';
import WeatherContext from '../context/WeatherContext';

function SearchResult() {
  const { info } = useContext(WeatherContext);

  if (info.length === 0 || info === []) {
    return <h3>No data yet</h3>;
  } else if (info.length > 0 || info.message !== 'city not found') {
    return (
      <div className=" max-w-2xl mx-auto space-y-4 mt-4 text-center ">
        <h2 className="text-lg">{info.list[0].dt_txt.slice(0, 10)}</h2>
        <h1 className="text-xl font-bold">
          {info.city.name}, {info.city.country}
        </h1>
        <p className=" text-4xl font-bold font-serif">
          {info.list[0].weather[0].description}
        </p>
        <div className="flex items-center justify-between">
          <div>
            <img
              src={`http://openweathermap.org/img/wn/${info.list[0].weather[0].icon}.png`}
              alt=""
            />
          </div>
          <h3 className="text-2xl font-bold">
            {info.list[0].main.temp.toFixed()} °
          </h3>
          <div className="flex flex-col items-center">
            <p>Real feel : {info.list[0].main.feels_like.toFixed()} °</p>
            <p>Humidity : {info.list[0].main.humidity} ° </p>
            <p>Wind : {info.list[0].wind.speed}</p>
          </div>
        </div>
        <div className="flex justify-between items-center pb-5 ">
          <p>Pressure : {info.list[0].main.pressure.toFixed()}</p>
          <p>|</p>

          <p>Temp Min : {info.list[0].main.temp_min.toFixed()} °</p>
          <p>|</p>
          <p>Temp Max : {info.list[0].main.temp_max.toFixed()} °</p>
        </div>
        <h3 className=" font-bold pb-2 border-b-2 text-left border-slate-500">
          Daily ForeCast
        </h3>

        <div>
          <Accordion alwaysOpen={true}>
            <Accordion.Panel>
              <Accordion.Title>
                <div className="  space-x-14  flex  items-center justify-between">
                  <p className=" text-slate-500">
                    {info.list[8].dt_txt.slice(0, 10)}
                  </p>
                  <img
                    src={`http://openweathermap.org/img/wn/${info.list[8].weather[0].icon}.png`}
                    alt=""
                  />
                  <p>{info.list[8].main.temp.toFixed()} °</p>
                  <p>{info.list[8].weather[0].description}</p>
                </div>
              </Accordion.Title>
              <Accordion.Content>
                <div className="mb-2 text-gray-500 dark:text-gray-400">
                  <div className="flex justify-between items-center pb-5 ">
                    <p>Pressure : {info.list[8].main.pressure.toFixed()}</p>
                    <p>|</p>

                    <p>Temp Min : {info.list[8].main.temp_min.toFixed()} °</p>
                    <p>|</p>
                    <p>Temp Max : {info.list[8].main.temp_max.toFixed()} °</p>
                  </div>
                </div>
              </Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
              <Accordion.Title>
                <div className="  space-x-14  flex  items-center justify-between">
                  <p className=" text-slate-500">
                    {info.list[16].dt_txt.slice(0, 10)}
                  </p>
                  <img
                    src={`http://openweathermap.org/img/wn/${info.list[16].weather[0].icon}.png`}
                    alt=""
                  />
                  <p>{info.list[16].main.temp.toFixed()} °</p>
                  <p>{info.list[16].weather[0].description}</p>
                </div>
              </Accordion.Title>
              <Accordion.Content>
                <div className="mb-2 text-gray-500 dark:text-gray-400">
                  <div className="flex justify-between items-center pb-5 ">
                    <p>Pressure : {info.list[16].main.pressure.toFixed()}</p>
                    <p>|</p>

                    <p>Temp Min : {info.list[16].main.temp_min.toFixed()} °</p>
                    <p>|</p>
                    <p>Temp Max : {info.list[16].main.temp_max.toFixed()} °</p>
                  </div>
                </div>
              </Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
              <Accordion.Title>
                <div className="  space-x-14  flex  items-center justify-between">
                  <p className=" text-slate-500">
                    {info.list[24].dt_txt.slice(0, 10)}
                  </p>
                  <img
                    src={`http://openweathermap.org/img/wn/${info.list[24].weather[0].icon}.png`}
                    alt=""
                  />
                  <p>{info.list[24].main.temp.toFixed()} °</p>
                  <p>{info.list[24].weather[0].description}</p>
                </div>
              </Accordion.Title>
              <Accordion.Content>
                <div className="mb-2 text-gray-500 dark:text-gray-400">
                  <div className="flex justify-between items-center pb-5 ">
                    <p>Pressure : {info.list[24].main.pressure.toFixed()}</p>
                    <p>|</p>

                    <p>Temp Min : {info.list[24].main.temp_min.toFixed()} °</p>
                    <p>|</p>
                    <p>Temp Max : {info.list[24].main.temp_max.toFixed()} °</p>
                  </div>
                </div>
              </Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
              <Accordion.Title>
                <div className="  space-x-14  flex  items-center justify-between">
                  <p className=" text-slate-500">
                    {info.list[32].dt_txt.slice(0, 10)}
                  </p>
                  <img
                    src={`http://openweathermap.org/img/wn/${info.list[32].weather[0].icon}.png`}
                    alt=""
                  />
                  <p>{info.list[32].main.temp.toFixed()} °</p>
                  <p>{info.list[32].weather[0].description}</p>
                </div>
              </Accordion.Title>
              <Accordion.Content>
                <div className="mb-2 text-gray-500 dark:text-gray-400">
                  <div className="flex justify-between items-center pb-5 ">
                    <p>Pressure : {info.list[32].main.pressure.toFixed()}</p>
                    <p>|</p>

                    <p>Temp Min : {info.list[32].main.temp_min.toFixed()} °</p>
                    <p>|</p>
                    <p>Temp Max : {info.list[32].main.temp_max.toFixed()} °</p>
                  </div>
                </div>
              </Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
              <Accordion.Title>
                <div className="  space-x-14  flex  items-center justify-between">
                  <p className=" text-slate-500">
                    {info.list[39].dt_txt.slice(0, 10)}
                  </p>
                  <img
                    src={`http://openweathermap.org/img/wn/${info.list[39].weather[0].icon}.png`}
                    alt=""
                  />
                  <p>{info.list[39].main.temp.toFixed()} °</p>
                  <p>{info.list[39].weather[0].description}</p>
                </div>
              </Accordion.Title>
              <Accordion.Content>
                <div className="mb-2 text-gray-500 dark:text-gray-400">
                  <div className="flex justify-between items-center pb-5 ">
                    <p>Pressure : {info.list[39].main.pressure.toFixed()}</p>
                    <p>|</p>

                    <p>Temp Min : {info.list[39].main.temp_min.toFixed()} °</p>
                    <p>|</p>
                    <p>Temp Max : {info.list[39].main.temp_max.toFixed()} °</p>
                  </div>
                </div>
              </Accordion.Content>
            </Accordion.Panel>
          </Accordion>
        </div>
      </div>
    );
  }
}

export default SearchResult;
