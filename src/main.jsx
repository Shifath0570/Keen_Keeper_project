import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from "react-router";
import { router } from './Routes/Routes';
import FriendProvider from './ContextApi/FriendProvider';
import { ToastContainer } from 'react-toastify';




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FriendProvider>
      <ToastContainer />
      <RouterProvider router={router}></RouterProvider>
    </FriendProvider>
  </StrictMode>,
)
