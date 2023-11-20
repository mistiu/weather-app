import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import {WeekWeatherCard} from "./WeekWeatherCard.jsx";
import {fiveDaysDailyForecast} from "../mocks/fiveDaysDailyForecast.js";

const times = [
    {label: 'Today', temperatureDay: '25°', temperatureNight: '15°'},
    {label: 'Tue', temperatureDay: '25°', temperatureNight: '15°'},
    {label: 'Wed', temperatureDay: '25°', temperatureNight: '15°'},
    {label: 'Thu', temperatureDay: '25°', temperatureNight: '15°'},
    {label: 'Fri', temperatureDay: '25°', temperatureNight: '15°'},
    {label: 'Sat', temperatureDay: '25°', temperatureNight: '15°'},
    {label: 'Sun', temperatureDay: '25°', temperatureNight: '15°'},
];

const getDayOfWeek = (date) => {
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    return days[date.getDay()];
};

const forecast = () => {
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
                {forecast().map((item, index) => (
                    <>
                        <WeekWeatherCard key={item.day} forecast={item}/>
                        {index !== forecast().length - 1 && <Divider orientation="horizontal" flexItem/>}
                    </>
                ))}
            </Box>
        </Box>
    )
}