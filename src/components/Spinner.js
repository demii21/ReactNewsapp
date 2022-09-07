import React, { Component } from 'react'
import spin from './Spinner.gif'
const Spinner = () => {
  
    return (
        <div className="text-center">
          <img  className="my-3"src={spin} alt="loading" />
        </div>
    )
  }


export default Spinner