export const useLocalStorage = (key, initialValue) => {
    let parsedData = JSON.parse(localStorage.getItem(key));

    if (!parsedData) {
        localStorage.setItem(key, JSON.stringify(initialValue));
        parsedData = JSON.parse(localStorage.getItem(key));
    } else {
        parsedData = JSON.parse(localStorage.getItem(key));
    }

    return {
        parsedData,
    };
};