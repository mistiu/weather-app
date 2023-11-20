import {TextField} from "@mui/material";

export const SearchBar = () => {
    return (
        <form>
            <TextField fullWidth variant="standard" InputProps={{disableUnderline: true}} placeholder="Search for cities" />
        </form>
    )
}