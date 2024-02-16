import React from 'react'
import { useRouteError } from 'react-router-dom'

const Error = () => {
    const err = useRouteError();
  return (
    <div className=' text-red-600 w-1/4 m-8 font-extrabold '>
    <label>{err.status +"  "+ err.statusText}</label>
    </div>
  )
}

export default Error;
