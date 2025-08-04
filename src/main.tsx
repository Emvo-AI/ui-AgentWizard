import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {createBrowserRouter, RouterProvider} from "react-router";
import HomePage from './Pages/HomePage.tsx';
import { ClerkProvider } from '@clerk/clerk-react';
import LoginPage from './Pages/LoginPage.tsx';
import SignUpPage from './Pages/SignUpPage.tsx';
import Chat from './Pages/Chat.tsx';
import ChatConvo from './Pages/ChatConvo.tsx';
import ConfigureConvo from './Pages/ConfigureConvo.tsx';
import CustomizeConvo from './Pages/CustomizeConvo.tsx';

// Import your Publishable Key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error('Missing Publishable Key')
}


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <HomePage/>
      },
      {
        path: "conversation",
        element: <Chat/>,
        children: [
          {
            path: "define",
            element: <ChatConvo/>
          },
          {
            path: "configure",
            element: <ConfigureConvo/>
          },
          {
            path: "customize",
            element: <CustomizeConvo/>
          }
        ]
      }
    ]
  },
  {
    path: "/login",
    element: <LoginPage/>,
  },
  {
    path: "/signup",
    element: <SignUpPage/>,
  }
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
      <RouterProvider router={router} />
    </ClerkProvider>
  </StrictMode>,
)
