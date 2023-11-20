import { Link, Typography } from "@mui/material";
import FavoriteIcon from '@mui/icons-material/Favorite';
export const Copyright = () => {
    return (
        <Typography variant="body2" component="footer" color="text.secondary" align="center" sx={{my: 4}}>
            {'Made with '}
            <FavoriteIcon sx={{color: 'red', verticalAlign: 'middle'}} stroke={"black"}/>
            {' by '}
            <Link color="text.primary" href="https://github.com/mistiu" target="_blank">mistiu</Link>
        </Typography>

    )
}