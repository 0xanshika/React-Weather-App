import { useState } from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css";

export default function SearchBox({ updateInfo }) {
    const [city, setCity] = useState("");
    const [err, setErr] = useState(false);
    
    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "63722489dbe604a9c0c9551ef2f11eff";

    const getWeatherInfo = async () => {
        let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        let jsonResponse = await response.json();
        if(jsonResponse.error) throw jsonResponse.error;
        return {
            city: city,
            temp: jsonResponse.main.temp,
            tempMin: jsonResponse.main.temp_min,
            tempMax: jsonResponse.main.temp_max,
            humidity: jsonResponse.main.humidity,
            feelsLike: jsonResponse.main.feels_like,
            weather: jsonResponse.weather[0].description,
        };
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setErr(false);
            let info = await getWeatherInfo();
            updateInfo(info);
            setCity("");
        } catch (error) {
            setErr(true);
        }
    };

    return (
        <div className="search-container">
            <form onSubmit={handleSubmit}>
                <TextField 
                    className="retro-input"
                    label="City Name" 
                    variant="outlined" 
                    value={city} 
                    onChange={(e) => setCity(e.target.value)} 
                    required 
                />
                <br /><br />
                <Button className="retro-btn" variant="contained" type="submit">Search</Button>
            </form>
            {err && <p style={{color: "red"}}>Error: Location unknown.</p>}
        </div>
    );
}