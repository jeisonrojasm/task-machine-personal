import { useEffect, useState } from "react";

export const useLocalStorage = (key, initialValue) => {

    const [data, setData] = useState(JSON.parse(localStorage.getItem(key)));

    useEffect(() => {
        if (!data) {
            localStorage.setItem(key, JSON.stringify(initialValue));
            setData(JSON.parse(localStorage.getItem(key)));
        } else {
            setData(JSON.parse(localStorage.getItem(key)));
        }
    }, []);


    return {
        data,
        setData,
    };
};