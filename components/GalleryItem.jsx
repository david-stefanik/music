import { useState } from "react";
export default function GalleryItem(){
    let[view, setView]= useState(false)
    return(
        <div
            onClick={()=>setView(!view)}
            style={{'display':'inline-block'}}
            >
            <p>
                onegalleryitem
            </p>
        </div>
    )
}

