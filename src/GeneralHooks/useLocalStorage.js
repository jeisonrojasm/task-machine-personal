import { useEffect, useState } from "react";

export const useLocalStorage = (key, initialValue) => {

    const [data, setData] = useState(initialValue);

    let parsedData = localStorage.getItem(key);

    useEffect(() => {
        if (!parsedData) {
            localStorage.setItem(key, JSON.stringify(initialValue));
            parsedData = initialValue;
        } else {
            // setData(JSON.parse(localStorage.getItem(key)));
            parsedData = JSON.parse(localStorage.getItem(key));
        }
    }, []);

    const updateData = (newData) => {
        setData(newData);
        localStorage.setItem(key, JSON.stringify(newData));
    };


    return {
        parsedData,
        setData,
        updateData,
    };
};