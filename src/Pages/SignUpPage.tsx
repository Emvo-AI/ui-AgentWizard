import { SignedIn, SignedOut, SignOutButton, SignUp } from '@clerk/clerk-react';

function SignUpPage() {


  return (
   <header className='flex items-center justify-center w-[100vw] h-[100vh]'>
      <SignedOut>
        <SignUp signInUrl={"/login"}/>
      </SignedOut>
      <SignedIn>
        <SignOutButton/>
      </SignedIn>
    </header>
  )
}

export default SignUpPage