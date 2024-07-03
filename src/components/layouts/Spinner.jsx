import React from 'react'
import spinner from '../../assets/spinner.gif'

const Spinner = () => {
  return (
    <div className='w-16 mx-auto'>
        <img src={spinner} alt="spinner" />
    </div>
  )
}

export default Spinner