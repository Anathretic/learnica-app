import React from 'react';
import { InputAndTextareaModel } from '../models/inputAndTextarea.model';

export const InputElement: React.FC<InputAndTextareaModel> = React.forwardRef<HTMLInputElement, InputAndTextareaModel>(
	({ label, inputName, type, placeholder, value, readOnly, children, ...props }, ref) => {
		return (
			<div>
				<label htmlFor={inputName}>{label}</label>
				<input
					type={type}
					id={inputName}
					placeholder={placeholder}
					value={value}
					readOnly={readOnly}
					ref={ref}
					autoComplete='off'
					{...props}
				/>
				<p>{children}</p>
			</div>
		);
	}
);

export const TextareaElement: React.FC<InputAndTextareaModel> = React.forwardRef<
	HTMLTextAreaElement,
	InputAndTextareaModel
>(({ label, inputName, placeholder, children, ...props }, ref) => {
	return (
		<div>
			<label htmlFor={inputName}>{label}</label>
			<textarea id='message' placeholder={placeholder} autoComplete='off' ref={ref} {...props}></textarea>
			<p>{children}</p>
		</div>
	);
});
