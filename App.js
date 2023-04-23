import { useEffect, useRef, useState } from 'react';
import Gallery from './components/gallery';
import SerchBar from './components/serchBar';
import { DataContext } from "./context/DataContext"
import { SearchContext } from "./context/SerchContext";

import './App.css';

function App() {
  let [serch, setSerch] = useState('')
  let [message, setMessage] = useState('serch for music')
  let [data, setData] = useState([])
  let serchImput = useRef('')
  
  useEffect(() => {
    const fetchData = async () => {
      if (!serch)return
        document.tytle = `${serch}music`;
      const response = await fetch(`https://itunes.apple.com/search?term=${serch}`)
      const resData = await response.json()
      if (resData.results.length) {
        setData(resData.results)
      }
      else {
        setData([])
        setMessage('Not Found')
      }
      console.log(resData)
    }
    fetchData()
  }, [serch])




  return (
    <div className="App">
      <SearchContext.provider value={{
        term:serchImput,
        handleSerch:setSerch
      }}>
 <SerchBar/>
      </SearchContext.provider>
      

      <DataContext.Provider value={{setSerch,data}}>
    
     
      {message}
      
     
      
      <gallery data ={data}/>
      </DataContext.provider>


    </div>
  );
}

export default App;
