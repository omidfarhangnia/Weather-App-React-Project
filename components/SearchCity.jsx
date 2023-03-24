import { BsSearch } from "react-icons/bs";

export default function SearchCity({ onChangeCity, fetchWeather }) {
    return(
        <div className="search__container">
        <form onSubmit={fetchWeather} className="search__container--form">
          <div>
            <input
              onChange={onChangeCity}
              className="search__container--input"
              type={"text"}
              placeholder="search city"
            />
          </div>
          <button onClick={fetchWeather}>
            <BsSearch size={25} />
          </button>
        </form>
      </div>
    );
}