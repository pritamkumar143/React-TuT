// import React, { useState } from 'react'

// const App = () => {

//   const [banned,setBanned] =useState(100);
//   return (
//     <div>
//       <h1>{banned.toString()}
//       </h1>
//       <button onClick={()=>setBanned(!banned)} className='px-2 py-1 mt-2 text-xs bg-blue-500 text-white rounded-full'>Ban karo</button>
//     </div>
//   )
// }

// export default App


// import React, { useState } from 'react'

// const App = () => {
// const [val,setVal] = useState(12);

//   return (
//     <div className='p-4'>
//       <h1>{val}</h1>
//       <button onClick={()=>setVal((prev)=>prev+1)} className='px-3 py-1 bg-blue-400 rounded-full'>Chnage karo</button>
//     </div>
//   )
// }

// export default App

import React, { useState } from 'react'

const App = () => {
  const [val,setVal]=useState({name:'pritam',isBanned:false});

  return (
    <div>
      <h1>name: {val.name}</h1>
      <h2>banned : {val.isBanned.toString()}</h2>
      <button onClick={()=>setVal({...val, isBanned: !val.isBanned})} className='px-2 py-1 bg-blue-400 rounded-full text-white'>Change</button>
    </div>
  )
}

export default App