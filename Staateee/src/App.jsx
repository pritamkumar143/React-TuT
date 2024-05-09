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

// import React, { useState } from 'react'

// const App = () => {
//   const [val,setVal]=useState({name:'pritam',isBanned:false});

//   return (
//     <div>
//       <h1>name: {val.name}</h1>
//       <h2>banned : {val.isBanned.toString()}</h2>
//       {/* <button onClick={()=>setVal({...val, isBanned: !val.isBanned})} className='px-2 py-1 bg-blue-400 rounded-full text-white'>Change</button> */}
//       <button onClick={()=>setVal({...val,isBanned: !val.isBanned})} className={`px-3 py-1  text-xs rounded-full text-white  ${val.isBanned ? "bg-blue-500" : 'bg-red-500'}`}>Change</button>
//     </div>
//   )
// }

// export default App

// import React, { useState } from 'react'

// const App = () => {
//   const [val,setVal]= useState({name:'pritam',age:24});

//   return (
//     <div>
//       <button onClick={()=>{
//         setVal({...val,gender:'male'});
//         console.log(val);

//       }}>Click</button>
//     </div>
//   )
// }

// export default App

// import React, { useState } from 'react'

// const App = () => {
//   const [val,setVal]= useState([1,2,3,4,5,6,7,8])
//   return (
//     <div className='p-5'>
//       {val.map(item => <h1>{item}</h1>)}
//       <button onClick={()=>setVal(()=>{
//         return val.filter((item,index)=>index !=val.length-1)
//       })}

//       className='px-2 py-1 text-xs text-white rounded-full bg-blue-500'>click</button>
//     </div>
//   )
// }

// export default App

import React, { useState } from "react";

// const App = () => {
//   const [val, setVal] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9]);
//   return (
//     <div>
//       {val.map((item) => (
//         <h1>{item}</h1>
//       ))}

//       <button
//         // onClick={() => setVal(() => val.filter((item, index) => index != 2))}
//         // onClick={() => setVal(() => val.filter(item => item%2 !== 0))}
//         onClick={()=>setVal ([...val,7])}
//   className="px-2 py-1 text-xs text-white rounded-full bg-blue-500"
// >
//         click
//       </button>
//     </div>
//   );
// };

// export default App;

// import React from "react";

const App = () => {
  const [val, setVal] = useState([
    { name: "pritam", age: 24 },
    { name: "sweta", age: 24 },
  ]);

  return (
    <div>
      {val.map((item) => (
        <div>
          <h1>{item.name}</h1>
        <h2>{item.age}</h2>
        </div>
      ))}

      <button 
      onClick={() =>setVal(()=>val.map(item => item.name === "sweta" ? ({name:"sweta", age:26}) : item))}
      className="px-2 py-1 text-xs text-white rounded-full bg-blue-500">
        Click
      </button>
    </div>
  );
};

export default App;
