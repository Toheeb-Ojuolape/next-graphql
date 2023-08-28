import React from 'react'
import error from "../../assets/error.svg"
import Image from 'next/image'


function ErrorComponent(props:{error:string}) {
  return (
    <div className="errorComponent">
        <div>
        <Image src={error} width={300} alt="error" />
        <h2>Something went wrong</h2>
        <p>{props.error}</p>
        </div>
    </div>
  )
}

export default ErrorComponent