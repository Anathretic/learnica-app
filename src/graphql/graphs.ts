import { gql } from '@apollo/client';

export const offerGraph = gql`
	query OfferData {
		offerCollection {
			edges {
				node {
					id
					subpage
					text
					title
					price
					offerItemsCollection {
						edges {
							node {
								id
								content
							}
						}
					}
				}
			}
		}
	}
`;

export const opinionsGraph = gql`
	query OpinionsData {
		opinionsCollection {
			edges {
				node {
					id
					title
					opinion
					name
				}
			}
		}
	}
`;

export const blogGraph = gql`
	query BlogData {
		articlesCollection {
			edges {
				node {
					id
					main_title
					public_date
					sectionsCollection {
						edges {
							node {
								id
								article_id
								title
								content
							}
						}
					}
				}
			}
		}
	}
`;

export const userDataGraph = gql`
	query UserData {
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
