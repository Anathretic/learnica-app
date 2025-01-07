import React from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { InputAndTextareaModel, SubmitButtonModel, LoaderModel, ReCaptchaV2Model } from '../models/formElements.model';

export const InputElement: React.FC<InputAndTextareaModel> = React.forwardRef<HTMLInputElement, InputAndTextareaModel>(
	({ label, inputName, type, placeholder, value, readOnly, children, ...props }, ref) => {
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
				<p className='form__input-error'>{children}</p>
			</div>
		);
	}
);

export const TextareaElement: React.FC<InputAndTextareaModel> = React.forwardRef<
	HTMLTextAreaElement,
	InputAndTextareaModel
>(({ label, inputName, placeholder, children, ...props }, ref) => {
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
			<p className='form__textarea-error'>{children}</p>
		</div>
	);
});

export const FormSubmit: React.FC<SubmitButtonModel> = ({ value }) => {
	return (
		<div className='form__box'>
			<input className='form__submit' type='submit' value={value} />
		</div>
	);
};

export const Loader: React.FC<LoaderModel> = ({ className }) => {
	return (
		<div className={className}>
			<div className='loader__spinner' />
		</div>
	);
};

export const ReCaptchaV2Component: React.FC<ReCaptchaV2Model> = ({ isMobile, refCaptcha, errorValue }) => {
	return (
		<div className='form__recaptcha-box'>
			<ReCAPTCHA
				key={isMobile ? 'compact-recaptcha' : 'normal-recaptcha'}
				size={isMobile ? 'compact' : 'normal'}
				sitekey={import.meta.env.VITE_SITE_KEY}
				ref={refCaptcha}
			/>
			<div className='form__recaptcha-error'>
				<p>{errorValue}</p>
			</div>
		</div>
	);
};
