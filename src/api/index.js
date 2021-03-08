import axios from "axios";
import config from "../config";

export const fetchItems = search => {
    const promise = axios({
        url: `${config.API_URL}?q=${search}`, //your url
        method: 'GET'
    });
    return promise
};

export const fetchItemById = id => {
    const promise = axios({
        url: `${config.API_URL}/${id}`, //your url
        method: 'GET'
    });
    return promise
};