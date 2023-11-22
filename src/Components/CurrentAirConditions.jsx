import propTypes from "prop-types";
import { Grid, Box, Typography, styled } from "@mui/material";
import DeviceThermostatIcon from '@mui/icons-material/DeviceThermostat';
import AirIcon from '@mui/icons-material/Air';
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import CycloneIcon from '@mui/icons-material/Cyclone';

const BoxFlex = styled(Box)(`
  display: flex;
`);


export const CurrentAirConditions = ({ currentConditions }) => {
    const realFeel = () => {
        const apiRealFeel = currentConditions.realFeelTemperature;
        return typeof apiRealFeel === 'number' ? apiRealFeel : '-';
    };

    const wind = () => {
        const apiWind = currentConditions.wind;
        return typeof apiWind === 'number' ? apiWind : '-';
    };

    const uvIndex = () => {
        const apiUvIndex = currentConditions.uvIndex;
        return typeof apiUvIndex === 'number' ? apiUvIndex : '-';
    };

    const airPressure = () => {
        const apiAirPressure = currentConditions.pressure;
        return typeof apiAirPressure === 'number' ? apiAirPressure : '-';
    };

    return (
        <Box sx={{backgroundColor: 'primary.main', borderRadius: '1rem', py: 2, px: 3, my: 3}}>
            <Typography variant="subtitle2" sx={{mb: 1}} color="text.secondary" fontWeight="bold">AIR CONDITIONS</Typography>
            <Grid container spacing={1}>
                <Grid item xs={6}>
                    <BoxFlex sx={{alignItems: 'center'}}>
                        <DeviceThermostatIcon style={{marginRight: 5}} color="secondary" />
                        <Box sx={{ml: 1}}>
                            <Typography variant="subtitle1" color="text.secondary">Real Feel</Typography>
                            <Typography variant="h5" fontWeight="bold">{realFeel()}°</Typography>
                        </Box>
                    </BoxFlex>
                </Grid>
                <Grid item xs={6}>
                    <BoxFlex sx={{alignItems: 'center'}}>
                        <AirIcon style={{marginRight: 5}} color="secondary" />
                        <Box sx={{ml: 1}}>
                            <Typography variant="subtitle1" color="text.secondary" fontWeight={500}>Wind</Typography>
                            <Typography variant="h5" fontWeight="bold">{wind()} km/h</Typography>
                        </Box>
                    </BoxFlex>
                </Grid>
                <Grid item xs={6}>
                    <BoxFlex sx={{alignItems: 'center'}}>
                        <WbSunnyIcon style={{marginRight: 5}} color="secondary" />
                        <Box sx={{ml: 1}}>
                            <Typography variant="subtitle1" color="text.secondary">UV Index</Typography>
                            <Typography variant="h5" fontWeight="bold">{uvIndex()}</Typography>
                        </Box>
                    </BoxFlex>
                </Grid>
                <Grid item xs={6}>
                    <BoxFlex sx={{alignItems: 'center'}}>
                        <CycloneIcon style={{marginRight: 5}} color="secondary" />
                        <Box sx={{ml: 1}}>
                            <Typography variant="subtitle1" color="text.secondary">Air Pressure</Typography>
                            <Typography variant="h5" fontWeight="bold">{airPressure()} hPa</Typography>
                        </Box>
                    </BoxFlex>
                </Grid>
            </Grid>
        </Box>
    )
}

CurrentAirConditions.propTypes = {
    currentConditions: propTypes.object.isRequired,
}