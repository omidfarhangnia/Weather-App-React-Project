

export default function ShowSearchResult({ data }) {
    return(
        <>
            <div className="result__container">
                <div className="place__name">{data.name}</div>
                <img className="place__image" src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} alt="weather icon"/>
                <div className="place__temp">temperate : {data.main.temp}&#176;</div>
                <div className="place__pressure">pressure : {data.main.pressure}</div>
                <div className="place__humidity">humidity : {data.main.humidity}</div>
                <div className="place__windSpeed">wind speed : {data.wind.speed} MPH</div>
            </div>
        </>
    );
}