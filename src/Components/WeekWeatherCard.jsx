import { Card, CardContent, styled, Typography, Box, Grid } from "@mui/material";
import propTypes from "prop-types";

const CardContentNoPadding = styled(CardContent)(`
  padding: 0;
  &:last-child {
    padding-bottom: 0;
  }
`);

const GridFlex = styled(Grid)(`
  display: flex;
  align-items: center;
`);

export const WeekWeatherCard = ({ weekForecast }) => {
    return (
        <Card sx={{flexShrink: 0, backgroundColor: 'transparent', boxShadow: 'unset'}}>
            <CardContentNoPadding sx={{my: 2}}>
                <Grid container>
                    <GridFlex item xs={2}>
                        <Typography variant="subtitle1" color="secondary">{weekForecast.day}</Typography>
                    </GridFlex>
                    <GridFlex item xs={7} sx={{justifyContent: 'center'}}>
                        <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                            <Box component="img" src={`./weatherIcons/${weekForecast.weatherIcon}.png`} sx={{width: 50, marginRight: 1}}/>
                            <Typography>{weekForecast.weatherIconPhrase}</Typography>
                        </Box>
                    </GridFlex>
                    <GridFlex item xs={3} sx={{justifyContent: 'flex-end'}}>
                        <Typography variant="h6" sx={{fontSize: 18}} fontWeight="bold">
                            {weekForecast.minTemperature}&#176;
                            {" / "}
                            <Box component="span" sx={{color: 'text.secondary'}}>{weekForecast.maxTemperature}&#176;</Box>
                        </Typography>
                    </GridFlex>
                </Grid>
            </CardContentNoPadding>
        </Card>
    )
}

WeekWeatherCard.propTypes = {
    weekForecast: propTypes.shape({
        day: propTypes.string,
        minTemperature: propTypes.number,
        maxTemperature: propTypes.number,
        weatherIcon: propTypes.number,
        weatherIconPhrase: propTypes.string,
    })
}