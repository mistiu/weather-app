import propTypes from "prop-types";
import { TextField } from "@mui/material";

export const SearchBar = ({ currentSearchValue, handleSearchValueChange, handleSearchSubmit  }) => {
    const handleEnterKey = (event) => {
        if (event.keyCode === 13) handleSearchSubmit();
    };

    return (
            <TextField fullWidth variant="standard"
                       InputProps={{disableUnderline: true}}
                       placeholder="Search for cities"
                       value={currentSearchValue}
                       onChange={handleSearchValueChange}
                       onKeyDown={handleEnterKey}
                       sx={{borderBottom: '2px solid #161e29'}}
                        />
    )
}

SearchBar.propTypes = {
    currentSearchValue: propTypes.string.isRequired,
    handleSearchValueChange: propTypes.func.isRequired,
    handleSearchSubmit: propTypes.func.isRequired
};