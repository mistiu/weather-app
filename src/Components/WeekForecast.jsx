import React from "react";
import propTypes from "prop-types";
import { Typography, Box, Divider } from "@mui/material";
import { WeekWeatherCard } from "./WeekWeatherCard.jsx";

const getDayOfWeek = (date) => {
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    return days[date.getDay()];
};

export const WeekForecast = ({ fiveDaysForecast }) => {
    const weekForecast = () => {
        const apiForecast = fiveDaysForecast;
        let tempArray = [];
        let forecastArray = [];

        if (typeof apiForecast === 'object' && apiForecast !== null) {
            apiForecast.forEach((item) => {
                tempArray.push({
                    day: item.date,
                    minTemperature: item.minTemperature,
                    maxTemperature: item.maxTemperature,
                    weatherIcon: item.weatherIcon,
                    weatherIconPhrase: item.weatherIconPhrase,
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

    return (
        <Box sx={{backgroundColor: 'primary.main', borderRadius: '1rem', py: 2, px: 3, height: '100%', pb: { lg: 4, xs: 0} }}>
            <Typography variant="subtitle2" sx={{mb: 1}} color="secondary" fontWeight="bold">5-DAY FORECAST</Typography>
            <Box sx={{overflowY: 'auto', display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'space-evenly'}}>
                {weekForecast().map((item, index) => (
                    <React.Fragment key={item.day}>
                        <WeekWeatherCard weekForecast={item}/>
                        {index !== weekForecast().length - 1 && <Divider orientation="horizontal" flexItem />}
                    </React.Fragment>
                ))}
            </Box>
        </Box>
    )
}

WeekForecast.propTypes = {
    fiveDaysForecast: propTypes.arrayOf(propTypes.shape({
        day: propTypes.string.isRequired,
        minTemperature: propTypes.number.isRequired,
        maxTemperature: propTypes.number.isRequired,
        weatherIcon: propTypes.number.isRequired,
        weatherIconPhrase: propTypes.string.isRequired,
    })).isRequired,
}