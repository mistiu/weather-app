import {Card, CardContent, styled} from "@mui/material";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

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

export const WeekWeatherCard = ({forecast}) => {
    return (
        <Card sx={{flexShrink: 0, backgroundColor: 'transparent', boxShadow: 'unset'}}>
            <CardContentNoPadding sx={{my: 2}}>
                <Grid container>
                    <GridFlex item xs={2}>
                        <Typography variant="subtitle1" color="secondary">{forecast.day}</Typography>
                    </GridFlex>
                    <GridFlex item xs={7} sx={{justifyContent: 'center'}}>
                        <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                            <Box component="img" src={`./weatherIcons/${forecast.weatherIcon}.png`} sx={{width: 50, marginRight: 1}}/>
                            <Typography>{forecast.weatherIconPhrase}</Typography>
                        </Box>
                    </GridFlex>
                    <GridFlex item xs={3} sx={{justifyContent: 'flex-end'}}>
                        <Typography variant="h6" sx={{fontSize: 18}} fontWeight="bold">
                            {forecast.minTemperature}&#176;
                            {" / "}
                            <Box component="span" sx={{color: 'text.secondary'}}>{forecast.maxTemperature}&#176;</Box>
                        </Typography>
                    </GridFlex>
                </Grid>
            </CardContentNoPadding>
        </Card>
    )
}