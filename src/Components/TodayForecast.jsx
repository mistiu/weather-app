import React from "react";
import propTypes from "prop-types";
import { Box, Typography, Divider, GlobalStyles } from "@mui/material";
import { TodayWeatherCard } from "./TodayWeatherCard.jsx";

export const TodayForecast = ({ hourlyForecast }) => {

    const dayForecast = () => {
        const apiForecast = hourlyForecast;
        let tempArray = [];
        let forecastArray = [];

        if (Array.isArray(apiForecast)) {
            apiForecast.forEach((item) => {
                tempArray.push({
                    time: item.date,
                    temperature: item.temperature,
                    weatherIcon: item.weatherIcon,
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

    return (
        <>
            <GlobalStyles
                styles={{
                    '*::-webkit-scrollbar': {
                        width: '0.4em',
                        height: '0.4em',
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
                    {dayForecast().map((item, index) => (
                        <React.Fragment key={item.time}>
                            <TodayWeatherCard key={`todayCard-${item.time}`} dayForecast={item}/>
                            {(index !== dayForecast().length - 1) && <Divider orientation="vertical" variant='middle' flexItem sx={{height: '5.5rem'}} />}
                        </React.Fragment>
                    ))}
                </Box>
            </Box>
        </>
    )
}

TodayForecast.propTypes = {
    hourlyForecast: propTypes.arrayOf(propTypes.object).isRequired,
}