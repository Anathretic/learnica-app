import { gql } from '@apollo/client';

export const userDataGraph = gql`
	query Userdata {
		userdataCollection {
			edges {
				node {
					user_id
					email
				}
			}
		}
	}
`;
