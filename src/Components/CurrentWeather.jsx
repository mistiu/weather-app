import { Box, Typography } from "@mui/material";
import autoCompleteSearch from "../mocks/autoCompleteSearch.js";
import currentConditions from "../mocks/currentConditions.js";

const city = () => {
    const apiCity = autoCompleteSearch[4].LocalizedName;
    return typeof apiCity === 'string' ? apiCity : '-';
};

const cloudCover = () => {
    const apiCloudCover = currentConditions[0].CloudCover;
    return typeof apiCloudCover === 'number' ? apiCloudCover : '-';
};

const temperature = () => {
    const apiTemperature = currentConditions[0].Temperature.Metric.Value;
    let roundedTemperature = null;

    if (typeof apiTemperature === 'number') {
        roundedTemperature = Math.round(apiTemperature);
    }

    return roundedTemperature || '-';
};

const weatherIcon = () => {
    const apiWeatherIcon = currentConditions[0].WeatherIcon;
    return typeof apiWeatherIcon === 'number' ? apiWeatherIcon : '1';
};

export const CurrentWeather = () => {
    return (
        <Box sx={{my: 3, mx: 4, display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
            <Box>
                <Typography variant="h4" sx={{color: 'text.primary'}} fontWeight="bold">{city()}</Typography>
                <Typography variant="subtitle1" sx={{color: 'text.secondary'}}>Cloud cover: {cloudCover()}%</Typography>
                <Typography variant="h3" sx={{color: 'text.primary', mt: 5}} fontWeight="bold">{temperature()}&#176;</Typography>
            </Box>
            <Box>
                <Box component="img" src={`./weatherIcons/${weatherIcon()}.png`} sx={{width: 200}}/>
            </Box>
        </Box>
    )
}