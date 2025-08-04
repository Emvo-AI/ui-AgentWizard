import { useState, useEffect } from 'react'
import SideMenu from './components/SideMenu'
import { Outlet } from 'react-router';
import NavBar from './components/NavBar';
import { useAuth } from '@clerk/clerk-react';



function App() {

  const {isSignedIn, isLoaded} = useAuth();
  
  useEffect(() => {
    if (isLoaded && !isSignedIn) {
      window.location.href = '/login';
    }
  },[isLoaded]);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <div className='bg-[#00031C] h-[100vh] w-[100vw]'>
        <NavBar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}/>
        <SideMenu isMenuOpen={isMenuOpen}/> 
        <div className={`absolute min-h-[93vh] top-[7vh] ${isMenuOpen ? "w-[80vw] left-[20vw]" : "w-[95vw] left-[5vw]"}`}>
          <Outlet/>
        </div>
      </div>
    </>
  )
}

export default App

