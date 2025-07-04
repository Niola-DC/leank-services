import React, { useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import RootLayout from './pages/layout'
import HomePage from './pages/landing'
import LeanksHeader from './components/Top'
import ContactPage from './pages/contact'
import AboutPage from './pages/about'

import './index.css'

import TermsPage from './pages/termspage'
import PrivacyPolicyPage from './pages/privacypolicy'


function App() {
  const [count, setCount] = useState(0)

    
    const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        { index: true, element: <HomePage /> },
        { path: "/about", element: <AboutPage /> },
        { path: "/home", element: <HomePage /> },

        { path: "/contact", element: <ContactPage /> },
        { path: "/terms", element: <TermsPage /> },
        { path: "/privacy-policy", element: <PrivacyPolicyPage /> },

        
        { path: "*", element: <h1>404</h1>}
      ],
    },
  ]);

  return <RouterProvider router={router} />;
  // return(
  //   <>
  //   <LeanksHeader />
  //   </>
  // )
      
}

export default App
