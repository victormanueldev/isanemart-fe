import { BrowserRouter } from 'react-router-dom';
import { useEffect } from 'react';
import { AppRouter } from './routes';
import { Provider } from 'react-redux';
import { store } from './state';

export const ISanemart = () => {
  useEffect(() => {
    import('preline');
  }, []);

  return (
    <Provider store={store}>
      <BrowserRouter>
        <AppRouter></AppRouter>
      </BrowserRouter>
    </Provider>
  );
};
