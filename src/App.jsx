import { Container, Grid, Box } from '@mui/material';
import { SearchBar } from "./Components/SearchBar.jsx";
import { CurrentWeather } from "./Components/CurrentWeather.jsx";
import { TodayForecast } from "./Components/TodayForecast.jsx";
import { CurrentAirConditions } from "./Components/CurrentAirConditions.jsx";
import { WeekForecast } from "./Components/WeekForecast.jsx";
import { Copyright } from "./Components/Copyright.jsx";
import './App.css';

export default function App() {
    return (
        <>
            <Container sx={{display: { lg: 'none' }}}>
                <Box sx={{my: 3}}>
                    <SearchBar/>
                    <CurrentWeather/>
                    <TodayForecast/>
                    <CurrentAirConditions/>
                    <WeekForecast/>
                    <Copyright />
                </Box>
            </Container>
            <Container sx={{display: { xs: 'none', lg: 'flex'}, minHeight: '100vh', justifyContent: 'center', alignItems: 'center'}} maxWidth="lg">
                <Box sx={{my: 3, width: '100vw'}}>
                    <Grid container spacing={3}>
                        <Grid item lg={8}>
                            <SearchBar/>
                            <CurrentWeather/>
                            <TodayForecast/>
                            <CurrentAirConditions/>
                        </Grid>
                        <Grid item lg={4} sx={{mb: 3}}>
                            <WeekForecast />
                        </Grid>
                    </Grid>
                    <Copyright />
                </Box>
            </Container>
        </>
    );
}