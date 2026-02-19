import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./infoBox.css";

export default function InfoBox({ info }) {
    const RAIN_URL = "https://images.unsplash.com/photo-1534274988757-a28bf1a57c17?q=80&w=600";
    const SUN_URL = "https://images.unsplash.com/photo-1504386106331-3e4e71712b38?q=80&w=600";
    const COLD_URL = "https://images.unsplash.com/photo-1476610182048-b716b8518aae?q=80&w=600";

    return (
        <div className='Card'>
            <Card sx={{ maxWidth: 345 }} className="vintage-card">
                <CardMedia
                    sx={{ height: 140 }}
                    image={info.humidity > 80 ? RAIN_URL : info.temp > 15 ? SUN_URL : COLD_URL}
                    className="sepia-img"
                />
                <CardContent>
                    <Typography variant="h5" className="city-title">
                        {info.city}
                    </Typography>
                    <div className="weather-details">
                        <p><b>TEMP:</b> {info.temp}°C</p>
                        <p><b>HUMIDITY:</b> {info.humidity}%</p>
                        <p><i>The sky is {info.weather}.</i></p>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}