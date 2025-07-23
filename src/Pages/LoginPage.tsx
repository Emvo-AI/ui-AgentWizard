import { SignedIn, SignedOut, SignIn, SignOutButton, useAuth } from '@clerk/clerk-react';
import {useEffect} from 'react';

function LoginPage() {

  const {isSignedIn} = useAuth();
  
  useEffect(() => {
    if (isSignedIn) {
      window.location.href = '/';
    }
  }, [isSignedIn]);


  return (
   <header className='flex items-center justify-center w-[100vw] h-[100vh] text-white'>
      <SignedOut>
        <SignIn signUpUrl={"/signup"}/>
      </SignedOut>
      <SignedIn>
        <SignOutButton/>
      </SignedIn>
    </header>
  )
}

export default LoginPage