import './App.css';
import React from 'react';
import { useState, useEffect } from 'react'
import { getTricks } from '../../apiCalls';
import Tricks from '../Tricks/Tricks';



function App() {
  const [tricks, setTricks] = useState([])
  const [serverError, setServerError] = useState({hasError: false, message: ''})

  useEffect(() => {
    getTricks()
      .then((data) => {
        console.log('useEffect DATA', data)
        setTricks(data)
      })
      .catch((error) => {
        setServerError({hasError: true, message: `${error.message}`})
      })
  }, [])

  return (
    <div className="App">
      <h1>Sick Trick Wish List</h1>
      <Tricks tricks={tricks} />
    </div>
  );
}

export default App; 
