import { Provider } from 'react-redux';
import { store } from '../../src/redux/store';

import App from '../../src/App';

describe('<App />', () => {
	it('should render and display expected content', () => {
		cy.mount(
			<Provider store={store}>
				<App />
			</Provider>
		);

		cy.get('h1').should('be.visible');

		cy.get('.btn').click();

		cy.get('span').contains('1');
	});
});
