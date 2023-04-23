import { createContext } from "react";
export let SearchContext=createContext({
    term: '' ,
    handelSerch:() => {}
})