import { Card, CardContent, styled, Typography, Box } from "@mui/material";
import propTypes from 'prop-types';

const CardContentNoPadding = styled(CardContent)(`
  padding: 0;
  &:last-child {
    padding-bottom: 0;
  }
`);

export const TodayWeatherCard = ({ dayForecast }) => {
    return (
        <Card sx={{ minWidth: 60, flexShrink: 0, backgroundColor: 'transparent', boxShadow: 'unset'}}>
            <CardContentNoPadding sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', mx: 1.5, mb: 1}}>
                <Typography variant="subtitle1" color="text.secondary" fontWeight="bold">{dayForecast.time}:00</Typography>
                <Box component="img" src={`./weatherIcons/${dayForecast.weatherIcon}.png`} sx={{width: 50, marginY: 1}}/>
                <Typography variant="h6" sx={{fontSize: 18}} fontWeight="bold">{dayForecast.temperature}&#176;</Typography>
            </CardContentNoPadding>
        </Card>
    )
}

TodayWeatherCard.propTypes = {
    dayForecast: propTypes.shape({
        time: propTypes.number.isRequired,
        temperature: propTypes.number.isRequired,
        weatherIcon: propTypes.number.isRequired,
    }).isRequired,
}
