import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import HCaptcha from '@hcaptcha/react-hcaptcha';
import { useAppDispatch, useAppSelector } from '../../../hooks/reduxHooks';
import { getFormInitialValues, setButtonText } from '../../../redux/formReduxSlice/formSlice';
import { CaptchaModel, InputAndTextareaModel, SelectModel, SubmitModel } from '../../../models/formElements.model';
import { Loader } from '../../Loader';

export const InputElement: React.FC<InputAndTextareaModel> = React.forwardRef<HTMLInputElement, InputAndTextareaModel>(
	({ label, inputName, type, placeholder, value, readOnly, errorMessage, ...props }, ref) => {
		return (
			<div className='form__box'>
				<label className='form__label' htmlFor={inputName}>
					{label}
				</label>
				<input
					className='form__input'
					type={type}
					id={inputName}
					placeholder={placeholder}
					value={value}
					readOnly={readOnly}
					ref={ref}
					autoComplete='off'
					{...props}
				/>
				<p className='form__input-error'>{`${errorMessage === undefined ? '' : errorMessage}`}</p>
			</div>
		);
	}
);

export const TextareaElement: React.FC<InputAndTextareaModel> = React.forwardRef<
	HTMLTextAreaElement,
	InputAndTextareaModel
>(({ label, inputName, placeholder, errorMessage, ...props }, ref) => {
	return (
		<div className='form__box'>
			<label className='form__label' htmlFor={inputName}>
				{label}
			</label>
			<textarea
				className='form__textarea'
				id='message'
				placeholder={placeholder}
				autoComplete='off'
				ref={ref}
				{...props}></textarea>
			<p className='form__textarea-error'>{`${errorMessage === undefined ? '' : errorMessage}`}</p>
		</div>
	);
});

export const SelectElement: React.FC<SelectModel> = React.forwardRef<HTMLSelectElement, SelectModel>(
	({ label, selectName, optionItemsArray, errorMessage, pathname, ...props }, ref) => {
		const selectValue = () => {
			if (selectName === 'classes') {
				return pathname;
			} else {
				return;
			}
		};

		return (
			<div className='form__box'>
				<label className='form__label' htmlFor={selectName}>
					{label}
				</label>
				<select
					className={`${selectName === 'classes' ? 'form__select form__select--blocked' : 'form__select'}`}
					ref={ref}
					id={selectName}
					{...props}
					value={selectValue()}>
					{optionItemsArray.map((option, id) => (
						<option key={id} disabled={option.disabled} value={option.value}>
							{option.label}
						</option>
					))}
				</select>
				<p className='form__select-error'>{`${errorMessage === undefined ? '' : errorMessage}`}</p>
			</div>
		);
	}
);

export const CaptchaComponent: React.FC<CaptchaModel> = ({ refCaptcha }) => {
	const { errorValue } = useAppSelector(getFormInitialValues);
	const isMobile = useMediaQuery({ query: '(max-width: 499px)' });

	return (
		<div className='form__captcha-box'>
			<HCaptcha
				key={isMobile ? 'compact-hcaptcha' : 'normal-hcaptcha'}
				size={isMobile ? 'compact' : 'normal'}
				sitekey={import.meta.env.VITE_HCAPTCHA_SITE_KEY}
				ref={refCaptcha}
			/>
			<div className='form__captcha-error'>
				<p>{errorValue}</p>
			</div>
		</div>
	);
};

export const FormSubmit: React.FC<SubmitModel> = ({ classname }) => {
	const { isLoading, buttonText } = useAppSelector(getFormInitialValues);
	const dispatch = useAppDispatch();

	const checkButtonValue = () => {
		if (buttonText === 'Zaloguj się' || buttonText === 'Zarejestruj się') {
			return;
		} else if (buttonText !== 'Wyślij') {
			setTimeout(() => {
				dispatch(setButtonText('Wyślij'));
			}, 2500);
		}
	};

	useEffect(checkButtonValue, [buttonText]);

	return (
		<div className='form__box'>
			{isLoading ? (
				<Loader className='loader' />
			) : (
				<input className={`form__submit ${classname}`} type='submit' value={buttonText} />
			)}
		</div>
	);
};

export const ReturnButton: React.FC = () => {
	const { isLoading } = useAppSelector(getFormInitialValues);

	return (
		<div className='form__box'>
			<Link className={isLoading ? 'form__return-btn form__return-btn--opacity' : 'form__return-btn'} to='/'>
				Powrót
			</Link>
		</div>
	);
};
