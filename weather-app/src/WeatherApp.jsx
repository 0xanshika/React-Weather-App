import { useState } from "react";
import SearchBox from "./SearchBox";
import InfoBox from "./infoBox";

export default function WeatherApp() {
    const [weatherState, setWeatherState] = useState({
        city: "Delhi",
        temp: 25.05,
        tempMin: 25.05,
        tempMax: 25.05,
        humidity: 47,
        feelsLike: 24.84,
        weather: "haze",
    });

    return (
        <div style={{ textAlign: "center", padding: "20px" }}>
            <h1>The Weather Gazette</h1>
            <SearchBox updateInfo={(info) => setWeatherState(info)} />
            <InfoBox info={weatherState} />
            <p style={{ marginTop: "40px", opacity: 0.6 }}>© 1926 Meteorological Society</p>
        </div>
    );
}