import { Typography, Box, Divider } from "@mui/material";
import { WeekWeatherCard } from "./WeekWeatherCard.jsx";
import fiveDaysDailyForecast from "../mocks/fiveDaysDailyForecast.js";

const getDayOfWeek = (date) => {
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    return days[date.getDay()];
};

const weekForecast = () => {
    const apiForecast = fiveDaysDailyForecast;
    let tempArray = [];
    let forecastArray = [];

    if (typeof apiForecast === 'object' && apiForecast !== null) {
        apiForecast.DailyForecasts.forEach((item) => {
            tempArray.push({
                day: item.Date,
                minTemperature: item.Temperature.Minimum.Value,
                maxTemperature: item.Temperature.Maximum.Value,
                weatherIcon: item.Day.Icon,
                weatherIconPhrase: item.Day.IconPhrase,
            });
        });

        forecastArray = tempArray.map((item) => {
            const date = new Date(item.day);
            const day = getDayOfWeek(date);
            const minTemperature = Math.round(item.minTemperature);
            const maxTemperature = Math.round(item.maxTemperature);
            const weatherIcon = item.weatherIcon;
            const weatherIconPhrase = item.weatherIconPhrase;

            return {day, minTemperature, maxTemperature, weatherIcon, weatherIconPhrase};
        });
    }

    return forecastArray || [{day: '-', minTemperature: '-', maxTemperature: '-', weatherIcon: '1', weatherIconPhrase: '-'}];
};

export const WeekForecast = () => {
    return (
        <Box sx={{backgroundColor: 'primary.main', borderRadius: '1rem', py: 2, px: 3, height: '100%', pb: { lg: 4, xs: 0} }}>
            <Typography variant="subtitle2" sx={{mb: 1}} color="secondary" fontWeight="bold">5-DAY FORECAST</Typography>
            <Box sx={{overflowY: 'auto', display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'space-evenly'}}>
                {weekForecast().map((item, index) => (
                    <>
                        <WeekWeatherCard key={`weekCard-${item.day}`} weekForecast={item}/>
                        {index !== weekForecast().length - 1 && <Divider orientation="horizontal" flexItem key={`divider-${item.day}`} />}
                    </>
                ))}
            </Box>
        </Box>
    )
}