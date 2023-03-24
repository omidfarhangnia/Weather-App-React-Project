import Head from "next/head";
import { useEffect, useState } from "react";
import backgroundImage from "../public/earth-image.webp";
import ShowSearchResult from "../components/ShowSearchResult";
import SearchCity from "../components/SearchCity";
import SearchLoader from "../components/SearchLoader";

export default function Home() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    
  })

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${process.env.NEXT_PUBLIC_WEATHER_KEY}`;

  const fetchWeather = (e) => {
    e.preventDefault();
    setLoading(true);
    fetch(url)
    .then(response => response.json())
    .then(data => setWeather(data))
    .catch((error) => {
      console.log(error)
    })
    setTimeout(() => {
      setLoading(false);
    }, 1500)
  };

  function handleChangeCity(e) {
    setCity(e.target.value);
  }

  return (
    <div>
      <Head>
        <title>wheater - Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {
        loading ?
        <SearchLoader /> :
        <>
          {/* overlay */}
          <div className="image__overlay" />
          {/* background image */}
          <BackgroundImage src={backgroundImage} />
          {/* search */}
          <SearchCity onChangeCity={handleChangeCity} fetchWeather={fetchWeather} />
          {/* weather */}
          {weather.main && <ShowSearchResult data={weather} />}
        </>
      }
    </div>
  );
}

function BackgroundImage({ src }) {
  const divBgImage = {
    backgroundImage: `url(${src})`,
  };

  return <div className="backgroundDiv" style={divBgImage}></div>;
}


// bugs
// 