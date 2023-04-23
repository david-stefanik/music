import { useState } from "react";
import { useContext } from "react";
import { SearchContext } from "../context/SerchContext";


export default function SerchBar() {
    let [term, handelSerch] = useContext(SearchContext)
    
    
    let onSerchSubmit = e => {
        e.preventDefault()
        handelSerch(term.current.value)
        //todo wire in serch from out
    }
    return (
        <form onSubmit={onSerchSubmit}>
              <imput ref={term}
                type="text"
                Placeholder="Enter Serch Term Here"
                 />

            <imput type="submit"  />

        </form>
    )



}