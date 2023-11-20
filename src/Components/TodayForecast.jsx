import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {TodayWeatherCard} from "./TodayWeatherCard.jsx";
import Divider from "@mui/material/Divider";
import GlobalStyles from '@mui/material/GlobalStyles';
import {twelveHoursHourlyForecast} from "../mocks/twelveHoursHourlyForecast.js";

const forecast = () => {
    const apiForecast = twelveHoursHourlyForecast;
    let tempArray = [];
    let forecastArray = [];

    if (Array.isArray(apiForecast)) {
        apiForecast.forEach((item) => {
            tempArray.push({
                time: item.DateTime,
                temperature: item.Temperature.Value,
                weatherIcon: item.WeatherIcon,
            });
        });

        forecastArray = tempArray.map((item) => {
            const date = new Date(item.time);
            const time = date.getHours();
            const temperature = Math.round(item.temperature);
            const weatherIcon = item.weatherIcon;

            return {time, temperature, weatherIcon};
        });
    }

    return forecastArray || [{time: '-', temperature: '-', weatherIcon: '1'}];
};
export const TodayForecast = () => {
    return (
        <>
            <GlobalStyles
                styles={{
                    '*::-webkit-scrollbar': {
                        width: '0.4em',
                        height: '0.4em',
                    },
                    '*::-webkit-scrollbar-track': {
                        '-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0.00)',
                    },
                    '*::-webkit-scrollbar-thumb': {
                        backgroundColor: 'rgba(189,195,199, 1)',
                        borderRadius: '1rem',
                    },
                }}
            />
            <Box sx={{backgroundColor: 'primary.main', borderRadius: '1rem', py: 2, px: 3}}>
                <Typography variant="subtitle2" sx={{mb: 1}} color="text.secondary" fontWeight="bold">TODAY&apos;S
                    FORECAST</Typography>
                <Box sx={{overflowX: 'auto', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start'}}>
                    {forecast().map((item, index) => (
                        <>
                            <TodayWeatherCard key={item.time} forecast={item}/>
                            {(index !== forecast().length - 1) && <Divider orientation="vertical" variant='middle' flexItem sx={{height: '5.5rem'}}/>}
                        </>
                    ))}
                </Box>
            </Box>
        </>
    )
}