import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {createBrowserRouter, RouterProvider} from "react-router";
import HomePage from './Pages/HomePage.tsx';
import { ClerkProvider, SignedIn } from '@clerk/clerk-react';
import LoginPage from './Pages/LoginPage.tsx';
import SignUpPage from './Pages/SignUpPage.tsx';
import Chat from './Pages/Chat.tsx';
import ChatConvo from './Pages/ChatConvo.tsx';
import ConfigureConvo from './Pages/ConfigureConvo.tsx';
import CustomizeConvo from './Pages/CustomizeConvo.tsx';
import CustomizeCreate from './Pages/CustomizeCreate.tsx';
import CustomizeEdit from './Pages/CustomizeEdit.tsx';
import CustomizeAdd from './Pages/CustomizeAdd.tsx';
import CustomizeTools from './Pages/CustomizeTools.tsx';
import Building from './Pages/Building.tsx';
import Publish from './Pages/Publish.tsx';
import Test from './Pages/Test.tsx';
import AgentFactory from './Pages/AgentFactory.tsx';

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
          element: (
            <SignedIn>
              <HomePage/>
            </SignedIn>
          )
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
            element: <CustomizeConvo/>,
            children: [
              {
                path: "createCollection",
                element: <CustomizeCreate/>
              },
              {
                path: "editCollection",
                element: <CustomizeEdit/>
              },
              {
                path: "addCollection",
                element: <CustomizeAdd/>
              }
            ]
          },
          {
            path: "selectTools",
            element: <CustomizeTools/>
          },
          {
            path: "building",
            element: <Building/>
          },
          {
            path: "publish",
            element: <Publish/>
          },
          {
            path: "test",
            element: <Test/>
          }
        ]
      },
      {
        path: "agentFactory",
        element: <AgentFactory/>,
      },
      
      {
        path: "edit/conversation",
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
            element: <CustomizeConvo/>,
            children: [
              {
                path: "createCollection",
                element: <CustomizeCreate/>
              },
              {
                path: "editCollection",
                element: <CustomizeEdit/>
              },
              {
                path: "addCollection",
                element: <CustomizeAdd/>
              }
              

            ]
          },
          {
            path: "selectTools",
            element: <CustomizeTools/>
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
