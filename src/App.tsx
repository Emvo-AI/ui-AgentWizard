
import { useEffect, useState } from 'react'
import SideMenu from './components/SideMenu'
import NavBar from './components/NavBar';
import { Outlet } from 'react-router';
import { useAuth } from '@clerk/clerk-react';


function App() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const {isSignedIn} = useAuth();

  // useEffect(() => {
  //   if (!isSignedIn) {
  //     window.location.href = '/login';
  //   }
  // }, [isSignedIn]);

  return (
    <>
      <div className='bg-[#00031C] h-[100vh] w-[100vw]'>
        <SideMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} /> 
        <div className={`absolute min-h-[91vh] top-[9vh] ${isMenuOpen ? "w-[80vw] left-[20vw]" : "w-[95vw] left-[5vw]"}`}>
          <Outlet/>
        </div>
      </div>
    </>
  )
}

export default App
