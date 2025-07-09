import ReactDOM from 'react-dom/client';

import ThemeProvider from '@/components/ThemeProvider';

import App from './App';

import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeProvider>
    <App />
  </ThemeProvider>,
);
