import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'  


function ArtistView() {
    const { id } = useParams()
    const [ artistData, setArtistData ] = useState([])
    const navagate= useNavigate()
    useEffect(() => {
        const API_URL = 'http://localhost:4000/album/${id}'
        const fetchData = async () => {
            const response = await fetch(API_URL)
            const resData = await response.json()
            setArtistData(resData.results)
        }
        fetchData()
    }, [id])
    const navButtons =()=>{
        return(
            <div>
                <button type='button'onClick={()=>navagate(-1)}>back</button>
                <button type='button'onClick={()=>navagate('/')}>home</button>
            </div>
        )
    }
    const justAlbums = artistData.filter(entry => entry.collectionType === 'Album')

    const renderAlbums = justAlbums.map((album, i) => {
        return (
            <div key={index}>
                <Link to={`/album/${album.collectionId}`}>
                    <p>{album.collectionName}</p>
                </Link>
            </div>
        )
    })

    return (
        <div>
            <h2>The id passed was: {id}</h2>
            <p>Artist Data Goes Here!</p>
            {artistData[0]?.artistName}
            {renderAlbums}
            {navButtons()}
        </div>
    )
}

