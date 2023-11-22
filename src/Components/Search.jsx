import React, { useState } from "react";
import propTypes from "prop-types";
import { useSetAtom } from "jotai";
import { SearchBar } from "./SearchBar.jsx";
import { Box, Divider, Typography } from "@mui/material";
import { fetchCityList } from "../logic/accuWeatherAPI.js";
import { cityAtom } from "../Atoms.js";

export const Search = ({ handleCitySelect }) => {
    const [searchValue, setSearchValue] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const setCity = useSetAtom(cityAtom);

    const getCityList = async (params) => {
        const response = await fetchCityList(params);
        return response.map((item) => {
            return {
                key: item.Key,
                name: item.LocalizedName,
                country: item.Country.LocalizedName,
                administrativeArea: item.AdministrativeArea.LocalizedName
            }
        });
    };

    const handleSearchValueChange = (event) => {
        setSearchValue(event.target.value);
    };

    const handleSearchSubmit = async () => {
        if (searchValue.length > 0) {
            getCityList(searchValue).then((response) => {
                response.length === 0 ? setSearchResults(['no results']) : setSearchResults(response);
            });
        } else {
            setSearchResults([]);
        }
    };

    const cityOnClick = (key, city) => {
        handleCitySelect(key);
        setCity(city);
        setSearchValue('');
        setSearchResults([]);
    };

    return (
        <>
            <SearchBar currentSearchValue={searchValue} handleSearchValueChange={handleSearchValueChange}
                       handleSearchSubmit={handleSearchSubmit}/>
            {(searchResults.length > 0 && typeof searchResults[0] === 'object') ? (
                <Box sx={{mt: -3, px: 2, py: 1, pt: 3.5, backgroundColor: 'primary.main', borderRadius: '1rem'}}>

                    {searchResults.map((item, index) => (
                        <React.Fragment key={item.key}>
                            <Typography sx={{py: 2, cursor: 'pointer'}}
                                        onClick={() => cityOnClick(item.key, item.name)}>{item.name}, {item.country}, {item.administrativeArea}</Typography>
                            {index !== searchResults.length - 1 &&
                                <Divider orientation="horizontal" />}
                        </React.Fragment>
                    ))}
                </Box>) : searchResults[0] === 'no results' &&
                <Box sx={{mt: -3, px: 2, py: 1, pt: 3.5, backgroundColor: 'primary.main', borderRadius: '1rem'}}>
                    <Typography sx={{py: 2}}>No results found</Typography>
                </Box>}
        </>
    )
}

Search.propTypes = {
    handleCitySelect: propTypes.func.isRequired
}