import { useContext } from "react";

import { TodoContext } from "../TodoContext/TodoContext";

export const useSearchedData = () => {

    const { data, searchedValue } = useContext(TodoContext);

    let parsedData;

    if (!searchedValue) {
        parsedData = [...data];
    } else {
        parsedData = data.filter(data => {
            const actualValueLower = data.text.toLowerCase();
            const searchedValueLower = searchedValue.toLocaleLowerCase();
            return actualValueLower.includes(searchedValueLower);
        });
    }

    return parsedData;
};
