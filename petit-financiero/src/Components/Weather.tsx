// import React, { useEffect, useState } from "react";
// const apiKey = import.meta.env.VITE_WEATHER_API_KEY;

// const WeatherWidget:React.FC = () => {
//   interface WeatherData {
//     main: {
//       temp: number;
//       temp_min: number;
//       temp_max: number;
//       humidity: number;
//     };
//     weather: {
//       description: string;
//     }[];
//   }

//   const [weather, setWeather] = useState<WeatherData | null>(null);

//   const getCurrentFormattedDate = () => {
//     return new Date().toLocaleDateString('es-AR', {
//         weekday: 'long',
//         day: 'numeric',
//         month: 'long'
//     }).replace(/^\w/, c => c.toUpperCase());
// };

//   useEffect(() => {
//     const fetchWeather = async () => {
//       try {
//         const res = await fetch(
//           `https://api.openweathermap.org/data/2.5/weather?q=Rosario,AR&units=metric&lang=es&appid=${apiKey}`
//         );
//         const data = await res.json();
//         setWeather(data);
//       } catch (err) {
//         console.error("Error fetching weather:", err);
//       }
//     };

//     fetchWeather();
//   }, []);

//   if (!weather) return <p>Cargando clima...</p>;

//   const temp = Math.round(weather.main.temp);
//   const tempMin = Math.round(weather.main.temp_min);
//   const tempMax = Math.round(weather.main.temp_max);
//   const humidity = weather.main.humidity;
//   const description = weather.weather[0].description;

//   return (
//     <div className="bg-gradient-to-r from-blue-500 to-blue-700 text-white p-4 rounded-lg shadow-md mb-6">
//       <div className="flex justify-between items-center">
//         <div>
//           <h3 className="font-bold">Rosario, Santa Fe</h3>
//           <p className="text-sm">{getCurrentFormattedDate()}</p>
//         </div>
//         <div className="text-center">
//           <span className="text-3xl font-bold">{temp}°C</span>
//           <p className="text-sm capitalize">{description}</p>
//         </div>
//         <div className="text-right">
//           <p className="text-sm">
//             Mín: {tempMin}°C / Máx: {tempMax}°C
//           </p>
//           <p className="text-xs">Humedad: {humidity}%</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default WeatherWidget;

import React, { useEffect, useState } from "react";
const apiKey = import.meta.env.VITE_WEATHER_API_KEY;

const WeatherWidget: React.FC = () => {
  interface WeatherData {
    main: {
      temp: number;
      temp_min: number;
      temp_max: number;
      humidity: number;
    };
    weather: {
      description: string;
    }[];
  }

  const [weather, setWeather] = useState<WeatherData | null>(null);

  const getCurrentFormattedDate = () => {
    return new Date().toLocaleDateString("es-AR", {
      weekday: "long",
      day: "numeric",
      month: "long",
    }).replace(/^\w/, (c) => c.toUpperCase());
  };

  useEffect(() => {
    const fetchWeather = async () => {
      const cachedWeather = localStorage.getItem("weatherData");
      const cachedTime = localStorage.getItem("weatherTimestamp");

      // Si hay datos en cache y no están vencidos (menos de 30 minutos)
      if (cachedWeather && cachedTime) {
        const age = Date.now() - parseInt(cachedTime, 10);
        const THIRTY_MINUTES = 30 * 60 * 1000;

        if (age < THIRTY_MINUTES) {
          setWeather(JSON.parse(cachedWeather));
          return;
        }
      }

      try {
        const res = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=Rosario,AR&units=metric&lang=es&appid=${apiKey}`
        );
        const data = await res.json();
        setWeather(data);
        localStorage.setItem("weatherData", JSON.stringify(data));
        localStorage.setItem("weatherTimestamp", Date.now().toString());
      } catch (err) {
        console.error("Error fetching weather:", err);
      }
    };

    fetchWeather();
  }, []);

  return (
    <div className="bg-gradient-to-r bg-[#74a4ab] text-white p-4 rounded-lg shadow-md mb-6">
      <div className="flex justify-between items-center">
        <div>
          <h3 className="font-bold">Rosario, Santa Fe</h3>
          <p className="text-sm">{getCurrentFormattedDate()}</p>
        </div>
        {!weather ? (
          <div className="text-center w-full">
            <p className="text-sm">Cargando clima...</p>
          </div>
        ) : (
          <>
            <div className="text-center">
              <span className="text-3xl font-bold">
                {Math.round(weather.main.temp)}°C
              </span>
              <p className="text-sm capitalize">
                {weather.weather[0].description}
              </p>
            </div>
            <div className="text-right">
              <p className="text-sm">
                Mín: {Math.round(weather.main.temp_min)}°C / Máx:{" "}
                {Math.round(weather.main.temp_max)}°C
              </p>
              <p className="text-xs">Humedad: {weather.main.humidity}%</p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default WeatherWidget;
