import { StrictMode } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { createRoot } from 'react-dom/client';

import { store } from './redux/store';
import App from './App';
import './sass/main.scss';

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<HelmetProvider>
			<Provider store={store}>
				<BrowserRouter>
					<App />
				</BrowserRouter>
			</Provider>
		</HelmetProvider>
	</StrictMode>
);
