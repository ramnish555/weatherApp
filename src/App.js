import React, { useEffect, useState } from 'react';
import NavBar from './Navbar';
import Card from './Card';

function App() {
  const [state, setState] = useState(true);

  useEffect(()=>{
    setTimeout(() => {
      setState(false);
    },1000);
  })

  return (
    <>
    {
      state?null:(
        <>
          <NavBar/>
          <div className="container1">
            <div className="flex-column justify-content-center">
              <Card/>
            </div>
          </div>
        </>
      )
    }
    </>
  );
}

export default App;
