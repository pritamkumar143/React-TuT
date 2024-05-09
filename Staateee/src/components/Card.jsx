import React, { useState } from 'react'

const Card = () => {
    const [val,setVal] = useState(false);
  return (
    <div>
        {/* print bahar  jaao if val is false and print mat jao if val id true */}

        <h1>
            {val === false ? "BAHAR JAAO" : "MAT JAAO"}
        </h1>
        <button 
        // onClick={() => setVal(()=>!val)}
        onClick={() => setVal(!val)} //this is wrong way
        className='px-2 py-1  bg-blue-300'>click</button>
    </div>
  )
}

export default Card;