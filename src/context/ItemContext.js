import React, { useContext, useEffect, useMemo, useState } from 'react';
import { fetchItemById, fetchItems } from '../api';
import queryString from "query-string";

const ItemContext = React.createContext();

// Shared state
export const ItemProvider = props => {
    const [search, setSearch] = useState("");
    const [items, setItems] = useState([]);
    const [categories, setCategories] = useState([]);
    const [item, setItem] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const queryParams = queryString.parse(window.location.search);
        setSearch(queryParams.search || "");
    }, [window.location.search]);
    
    const handleSearchChange = event => setSearch(event.target.value);

    /**
     * Fetch data from api
     * @param {String} search is query
     */
    const getItems = search => {
        setIsLoading(true);
        const promise = fetchItems(search);
        promise.then(res => {
           setItems(res.data.items);
           setCategories(res.data.categories);
        }).catch(error => {
            alert("Se produjo un error: ", error);
        }).finally(() => setIsLoading(false));
        return promise;
    }

    /**
     * Get item by id
     * @param {String} id is item id
     */
    const getItemById = id => {
        setIsLoading(true);
        const promise = fetchItemById(id);
        promise.then(res => {
           setItem(res.data.item);
           setCategories(res.data.categories);
        }).catch(error => {
            alert("Se produjo un error: ", error);
        }).finally(() => setIsLoading(false));
        return promise;
    };

    // optimization to create an object instance
    const value = useMemo(() => {
        return {
            search,
            items,
            categories,
            item,
            isLoading,
            handleSearchChange,
            getItems,
            getItemById,
        }
    }, [search, items, categories, item, isLoading,]);

    return <ItemContext.Provider value={value} {...props} />
}

export const useItem = () => {
    const context = useContext(ItemContext);
    if (!context)
        throw new Error("useItem must be inside the ItemContext provider");
    return context;
}