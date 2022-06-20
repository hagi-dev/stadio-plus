import { useState } from "react";

export const useLocalStorage = (key:string, initialValue:string) => {
    const [storeValue,setStoreValue] = useState(() => {
        try {
            const item : string | null = window.localStorage.getItem(key);
            return item ? JSON.parse(item) : initialValue;
        } catch (error) {
            return initialValue;
        }
    });
    const setValue = (value:string) => {
        try {
            setStoreValue(value);
            window.localStorage.setItem(key, JSON.stringify(value));
        } catch (error) {
            console.log(error);
        }
    }
    return [storeValue,setValue];
};
