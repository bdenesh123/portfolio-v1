import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';

import ThemeProvider from '@/components/ThemeProvider';

import App from './App';
import { LoadingProviders } from './providers/LoadingProviders';

import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LoadingProviders>
      <ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
        <App />
      </ThemeProvider>
    </LoadingProviders>
  </StrictMode>,
);
