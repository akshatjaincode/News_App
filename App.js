import React from 'react'
import News from './componets/News'
import Navbar from './componets/Navbar'
import reportWebVitals from './reportWebVitals'
import { useState } from 'react'

export default function App(props) {
  const [category, setCategory] = useState('general');
  const BusinessCat=()=>{
        setCategory('business');
      }
  return (
    <div>
      <div >
    <Navbar /> 
    <div className='container my-5' category={category} BusinessCat={BusinessCat}  >
      <News category={category} BusinessCat={BusinessCat} />
      </div>       
      </div>
    </div>
  )
}
reportWebVitals();
