import React from 'react';
import { InputAndTextarea } from '../models/inputAndTextarea.model';

export const InputElement: React.FC<InputAndTextarea> = React.forwardRef<HTMLInputElement, InputAndTextarea>(
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

export const TextareaElement: React.FC<InputAndTextarea> = React.forwardRef<HTMLTextAreaElement, InputAndTextarea>(
	({ label, inputName, placeholder, children, ...props }, ref) => {
		return (
			<div>
				<label htmlFor={inputName}>{label}</label>
				<textarea id='message' placeholder={placeholder} autoComplete='off' ref={ref} {...props}></textarea>
				<p>{children}</p>
			</div>
		);
	}
);
