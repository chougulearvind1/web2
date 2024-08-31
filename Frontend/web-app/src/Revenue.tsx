import React, { useEffect, useState } from 'react'

// funtion of toatal amount is used to show total insted of  props,navigate data,context ,redux ,cookies etc

const Revenue = () => {
  const [Total, setTotal] = useState()
  useEffect(() => {
    fetch('http://localhost:5000/API/revenue', {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
    }   
  }).then((response) => { 
    return response.json()
   })
  .then(  (data) => { 
    
    console.log(data,'data');
     setTotal(data.Total)
   })
  
  }, [])
  
  
  
  return (
    <div>Revenue
      <h1>TODAY'S REVENUE IS {Total}</h1>

    </div>
  )
}

export default Revenue