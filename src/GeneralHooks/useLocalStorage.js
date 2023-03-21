import { useEffect, useState } from "react";

export const useLocalStorage = (key, initialValue) => {

    const [data, setData] = useState(initialValue);

    let parsedData = localStorage.getItem(key);

    useEffect(() => {
        if (!parsedData) {
            localStorage.setItem(key, JSON.stringify(data));
        } else {
            setData(JSON.parse(localStorage.getItem(key)));
        }
    }, []);


    return {
        data,
        setData,
    };
};