import { LoaderModel } from '../models/formElements.model';

export const Loader: React.FC<LoaderModel> = ({ className, provider }) => {
	return (
		<div className={className}>
			<div className={`loader__spinner ${provider?.includes('--user-actions') && 'loader--spinner-user-actions'}`} />
		</div>
	);
};
