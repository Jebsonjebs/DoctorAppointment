import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import AppContextProvider from './context/AppContext.jsx'
import { ClerkProvider } from '@clerk/clerk-react'
import DoctorContextProvider from './AdminContext/DoctorContext.jsx'
import { AdminContext } from './AdminComponents/AdminContext.jsx'

// Import your Publishable Key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error('Missing Publishable Key')
}


createRoot(document.getElementById('root')).render(
  <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl='/'>
  <BrowserRouter>
  <AppContextProvider>
    <DoctorContextProvider>
      <AdminContext>
        <AppContextProvider>
          <App />
        </AppContextProvider>
      </AdminContext>
    </DoctorContextProvider>
  </AppContextProvider>
  </BrowserRouter>
  </ClerkProvider>
)
