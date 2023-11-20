import {Card, CardContent, styled} from "@mui/material";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const CardContentNoPadding = styled(CardContent)(`
  padding: 0;
  &:last-child {
    padding-bottom: 0;
  }
`);

export const TodayWeatherCard = ({forecast}) => {
    return (
        <Card sx={{ minWidth: 60, flexShrink: 0, backgroundColor: 'transparent', boxShadow: 'unset'}}>
            <CardContentNoPadding sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', mx: 1.5, mb: 1}}>
                <Typography variant="subtitle1" color="text.secondary" fontWeight="bold">{forecast.time}:00</Typography>
                <Box component="img" src={`./weatherIcons/${forecast.weatherIcon}.png`} sx={{width: 50, marginY: 1}}/>
                <Typography variant="h6" sx={{fontSize: 18}} fontWeight="bold">{forecast.temperature}&#176;</Typography>
            </CardContentNoPadding>
        </Card>
    )
}
