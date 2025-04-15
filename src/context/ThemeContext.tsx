'use client';
import { createContext,useEffect,useState } from "react";

export const ThemeContext = createContext({
    theme: "light",
    onToggle: () => {},
});

const getFormLocalStorage = () => {
    if(typeof window !== "undefined"){
        const value = localStorage.getItem("theme");
        return value || "light";  
    };
    return "light";
}

export const ThemeContextProvider = ({children}:any) => {
    const [theme,setTheme] = useState(() => getFormLocalStorage());
    useEffect(()=>{
        localStorage.setItem('theme',theme);
    },[theme])
    const onToggle = () => {
        setTheme((prev) => prev === "light" ? "dark":"light")
    }
    return(
        <ThemeContext.Provider value={{theme,onToggle}}>
            <div className={theme}>
            {children}
            </div>
        </ThemeContext.Provider>
    )
}