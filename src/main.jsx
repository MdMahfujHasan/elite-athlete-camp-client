import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import router from './routes/Routes.jsx';
import AuthProvider from './providers/AuthProvider';
import { QueryClient, QueryClientProvider, } from '@tanstack/react-query'
import ThemeProvider from './providers/ThemeProvider';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <ThemeProvider>
        <AuthProvider>
          <QueryClientProvider client={queryClient}>
            <div className="max-w-screen-xl mx-auto">
              <RouterProvider router={router} />
            </div>
          </QueryClientProvider>
        </AuthProvider>
      </ThemeProvider>
    </HelmetProvider>
  </React.StrictMode>,
)