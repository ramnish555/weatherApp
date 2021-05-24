import React from 'react';
import NavBar from './Navbar';
import Card from './Card';

function App() {
  return (
    <>
      <NavBar/>
      <div className="container1">
        <div className="flex-column justify-content-center">
          <Card/>
        </div>
      </div>
    </>
  );
}

export default App;
