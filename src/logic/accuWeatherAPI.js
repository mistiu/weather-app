const apiKey = import.meta.env.VITE_ACCUWEATHER_API_KEY;
const baseUrl = 'http://dataservice.accuweather.com/';

export const fetchCityList = async (name) => {
    const response = await fetch(`${baseUrl}locations/v1/cities/autocomplete?apikey=${apiKey}&q=${name}`);
    return await response.json();
};

export const fetchCurrentConditions = async (cityKey) => {
    const response = await fetch(`${baseUrl}currentconditions/v1/${cityKey}?apikey=${apiKey}&details=true`);
    return await response.json();
};

export const fetchFiveDaysForecast = async (cityKey) => {
    const response = await fetch(`${baseUrl}forecasts/v1/daily/5day/${cityKey}?apikey=${apiKey}&metric=true`);
    return await response.json();
};

export const fetchTwelveHoursForecast = async (cityKey) => {
    const response = await fetch(`${baseUrl}forecasts/v1/hourly/12hour/${cityKey}?apikey=${apiKey}&metric=true`);
    return await response.json();
};