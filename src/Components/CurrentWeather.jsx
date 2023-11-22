import { useAtomValue } from "jotai";
import propTypes from "prop-types";
import { Box, Typography } from "@mui/material";
import { cityAtom } from "../Atoms.js";

export const CurrentWeather = ({ currentConditions }) => {

    const cityName = useAtomValue(cityAtom);

    const city = () => {
        return typeof cityName === 'string' ? cityName : '-';
    };

    const cloudCover = () => {
        const apiCloudCover = typeof currentConditions === 'object' ? currentConditions.cloudCover : null;
        return typeof apiCloudCover === 'number' ? apiCloudCover : '-';
    };

    const temperature = () => {
        const apiTemperature = typeof currentConditions === 'object' ? currentConditions.temperature : null;
        let roundedTemperature = null;

        if (typeof apiTemperature === 'number') {
            roundedTemperature = Math.round(apiTemperature);
        }

        return roundedTemperature || '-';
    };

    const weatherIcon = () => {
        const apiWeatherIcon = typeof currentConditions === 'object' ? currentConditions.weatherIcon : null;
        return typeof apiWeatherIcon === 'number' ? apiWeatherIcon : '1';
    };

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

CurrentWeather.propTypes = {
    currentConditions: propTypes.object.isRequired
};