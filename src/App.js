import getApiInfo from './getApiInfo';
import React, {useEffect, useState} from 'react';
import Cardclima from './components/Cardclima';
import SearchCountry from './components/SearchCointry';


function App () {

  const [data, setData] = useState({
    city: '',
    country: '',
    temp: '',
    temp_max: '',
    temp_min: '',
  })

  const [city, setCity] = useState('')

  useEffect(()=>{
       
    getApiInfo(city).then(data =>{
      console.log(data)

      setData ( prevState => ({
        ...prevState,
        city: data.location.name,
        country: data.location.country,
        temp: data.current.temp_c,
        
      }))
      
    })

},[city])

const handleSumit = (e) => {
  e.preventDefault()
  setCity(e.target[0].value);
    console.log(e.target[0].value)
    e.target.reset() 
}
  return (
    <div className="">
      <h1>App del clima</h1>
      <SearchCountry handleSumit={handleSumit}/>
      <div className='container'>
      <Cardclima data={data}/>
      </div>
    </div>
    
  
  );
}

export default App;
