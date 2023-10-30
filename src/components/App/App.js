import './App.css';
import React from 'react';
import { useState, useEffect } from 'react'
import { getTricks } from '../../apiCalls';



function App() {
  const [tricks, setTricks] = useState('')
  const [serverError, setServerError] = useState({hasError: false, message: ''})

  useEffect(() => {
    getTricks()
      .then((data) => {
        setTricks(data)
      })
      .catch((error) => {
        setServerError({hasError: true, message: `${error.message}`})
      })
  }, [])

  return (
    <div className="App">
      <h1>Sick Trick Wish List</h1>
    </div>
  );
}

export default App; 
