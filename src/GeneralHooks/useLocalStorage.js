import { useState } from "react";

export const useLocalStorage = (key, initialValue) => {

    let parsedData = JSON.parse(localStorage.getItem(key));

    if (!parsedData) {
        localStorage.setItem(key, JSON.stringify(initialValue));
        parsedData = JSON.parse(localStorage.getItem(key));
    } else {
        parsedData = JSON.parse(localStorage.getItem(key));
    }

    const [data, setData] = useState(parsedData);

    const saveData = (newValue) => {
        localStorage.setItem(key, JSON.stringify(newValue));
        setData(newValue);
    }

    return {
        data,
        saveData,
    };
};