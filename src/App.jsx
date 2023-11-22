import { useEffect, useState } from "react";
import { Container, Grid, Box } from '@mui/material';
import { CurrentWeather } from "./Components/CurrentWeather.jsx";
import { TodayForecast } from "./Components/TodayForecast.jsx";
import { CurrentAirConditions } from "./Components/CurrentAirConditions.jsx";
import { WeekForecast } from "./Components/WeekForecast.jsx";
import { Copyright } from "./Components/Copyright.jsx";
import { Search } from "./Components/Search.jsx";
import { fetchCurrentConditions, fetchFiveDaysForecast, fetchTwelveHoursForecast } from "./logic/accuWeatherAPI.js";
import './App.css';

export default function App() {
    const [cityKey, setCityKey] = useState('215854'); // default city is Tel Aviv [215854]
    const [currentConditions, setCurrentConditions] = useState({});
    const [hourlyForecast, setHourlyForecast] = useState([]);
    const [fiveDaysForecast, setFiveDaysForecast] = useState([]);

    useEffect(() => {
        handleCurrentConditions();
        handleHourlyForecast();
        handleFiveDaysForecast();
    }, [cityKey]);

    const getCurrentConditions = async (key) => {
        const response = await fetchCurrentConditions(key);
            return {
                date: response[0].LocalObservationDateTime,
                weatherIcon: response[0].WeatherIcon,
                temperature: response[0].Temperature.Metric.Value,
                realFeelTemperature: response[0].RealFeelTemperature.Metric.Value,
                cloudCover: response[0].CloudCover,
                wind: response[0].Wind.Speed.Metric.Value,
                uvIndex: response[0].UVIndex,
                pressure: response[0].Pressure.Metric.Value,
            }
    };

    const getHourlyForecast = async (key) => {
        const response = await fetchTwelveHoursForecast(key);
        return response.map((item) => {
            return {
                date: item.DateTime,
                temperature: item.Temperature.Value,
                weatherIcon: item.WeatherIcon,
            }
        });
    };

    const getFiveDaysForecast = async (key) => {
        const response = await fetchFiveDaysForecast(key);
        return response.DailyForecasts.map((item) => {
            return {
                date: item.Date,
                minTemperature: item.Temperature.Minimum.Value,
                maxTemperature: item.Temperature.Maximum.Value,
                weatherIcon: item.Day.Icon,
                weatherIconPhrase: item.Day.IconPhrase,
            }
        });
    };

    const handleCurrentConditions = async () => {
        getCurrentConditions(cityKey).then((response) => {
            setCurrentConditions(response);
        });
    };

    const handleHourlyForecast = async () => {
        getHourlyForecast(cityKey).then((response) => {
            setHourlyForecast(response);
        });
    };

    const handleFiveDaysForecast = async () => {
        getFiveDaysForecast(cityKey).then((response) => {
            setFiveDaysForecast(response);
        });
    };

    const handleCitySelect = (key) => {
        setCityKey(key);
    };

    return (
        <>
            <Container sx={{display: { lg: 'none' }}}>
                <Box sx={{my: 3}}>
                    <Search handleCitySelect={handleCitySelect} />
                    <CurrentWeather currentConditions={currentConditions} />
                    <TodayForecast hourlyForecast={hourlyForecast} />
                    <CurrentAirConditions currentConditions={currentConditions} />
                    <WeekForecast fiveDaysForecast={fiveDaysForecast} />
                    <Copyright />
                </Box>
            </Container>
            <Container sx={{display: { xs: 'none', lg: 'flex'}, minHeight: '100vh', justifyContent: 'center', alignItems: 'center'}} maxWidth="lg">
                <Box sx={{my: 3, width: '100vw'}}>
                    <Grid container spacing={3}>
                        <Grid item lg={8}>
                            <Search handleCitySelect={handleCitySelect} />
                            <CurrentWeather currentConditions={currentConditions} />
                            <TodayForecast hourlyForecast={hourlyForecast} />
                            <CurrentAirConditions currentConditions={currentConditions} />
                        </Grid>
                        <Grid item lg={4} sx={{mb: 3}}>
                            <WeekForecast fiveDaysForecast={fiveDaysForecast} />
                        </Grid>
                    </Grid>
                    <Copyright />
                </Box>
            </Container>
        </>
    );
}