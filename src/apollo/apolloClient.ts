import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { supabase } from '../supabase/supabase';

const httpLink = createHttpLink({
	uri: `${import.meta.env.VITE_API_URL}/graphql/v1`,
});

const authLink = setContext(async (_, { headers }) => {
	const token = (await supabase.auth.getSession()).data.session?.access_token;

	return {
		headers: {
			...headers,
			apikey: `${import.meta.env.VITE_API_KEY}`,
			Authorization: token ? `Bearer ${token}` : '',
		},
	};
});

export const client = new ApolloClient({
	link: authLink.concat(httpLink),
	cache: new InMemoryCache(),
});
