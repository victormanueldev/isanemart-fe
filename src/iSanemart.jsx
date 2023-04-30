import { BrowserRouter } from 'react-router-dom';
import { useEffect } from 'react';
import { AppRouter } from './routes';

export const ISanemart = () => {
  useEffect(() => {
    import('preline');
  }, []);
  return (
    <BrowserRouter>
      <AppRouter></AppRouter>
    </BrowserRouter>
  );
};
