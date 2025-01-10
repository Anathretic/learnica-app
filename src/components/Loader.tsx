import { LoaderModel } from '../models/formElements.model';

export const Loader: React.FC<LoaderModel> = ({ className }) => {
	return (
		<div className={className}>
			<div className='loader__spinner' />
		</div>
	);
};
