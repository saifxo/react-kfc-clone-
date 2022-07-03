import {React,useEffect,useState} from 'react'

function Api()
{
    const [countries, setcountries] = useState([])
    useEffect(()=>{
        return(
        fetch("https://restcountries.com/v3.1/all")
        .then((res)=>res.json())
        .then((data)=>setcountries(data))
        .catch((err)=>console.log(err))
        )
    },[])
    


    


    
    
    
  return (
    <div>
        <h1>API FETCHING</h1>
        <h1>LIST OF COUNTRIES</h1>
        {countries.map((country)=>{return(
            <div>
                <h2>Name: {country.name.common}</h2>
                <p>Area: {country.area}</p>
                <img src={country.flags.png} alt=""/>
                
            </div>
        )})}
    </div>
  )
}

export default Api