import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {ClerkProvider} from '@clerk/react'
import {BrowserRouter} from "react-router"
import './index.css'
import App from './App.jsx'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'


const queryClient = new QueryClient();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ClerkProvider>
      <BrowserRouter>
     <QueryClientProvider client={queryClient}>
       <App />
     </QueryClientProvider>
      </BrowserRouter>
    </ClerkProvider>
  </StrictMode>,
)
