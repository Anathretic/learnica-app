import { Path } from 'react-hook-form';
import { InputAndTextareaConfigModel, SelectConfigModel } from '../../../models/inputConfig.model';

export const firstnameField = <T>(inputName: Path<T>): InputAndTextareaConfigModel<T> => ({
	label: 'Imię:',
	inputName,
	type: 'text',
	placeholder: 'Wprowadź imię..',
});

export const lastnameField = <T>(inputName: Path<T>): InputAndTextareaConfigModel<T> => ({
	label: 'Nazwisko:',
	inputName,
	type: 'text',
	placeholder: 'Wprowadź nazwisko..',
});

export const emailField = <T>(inputName: Path<T>): InputAndTextareaConfigModel<T> => ({
	label: 'E-mail:',
	inputName,
	type: 'text',
	placeholder: 'Wprowadź e-mail..',
});

export const phoneField = <T>(inputName: Path<T>): InputAndTextareaConfigModel<T> => ({
	label: 'Telefon:',
	inputName,
	type: 'text',
	placeholder: 'Wprowadź numer telefonu..',
});

export const passwordField = <T>(inputName: Path<T>): InputAndTextareaConfigModel<T> => ({
	label: 'Hasło:',
	inputName,
	type: 'password',
	placeholder: 'Wprowadź hasło..',
});

export const confirmPasswordField = <T>(inputName: Path<T>): InputAndTextareaConfigModel<T> => ({
	label: 'Powtórz hasło:',
	inputName,
	type: 'password',
	placeholder: 'Wprowadź ponownie hasło..',
});

export const offerSelect = <T>(selectName: Path<T>): SelectConfigModel<T> => ({
	label: 'Wybór oferty:',
	selectName,
	optionItemsArray: [
		{ label: '-- wybierz --', value: '', disabled: true },
		{ label: 'Język polski', value: 'jezyk-polski', disabled: false },
		{ label: 'Język angielski', value: 'jezyk-angielski', disabled: false },
		{ label: 'Matematyka', value: 'matematyka', disabled: false },
		{ label: 'Tłumaczenia', value: 'tlumaczenia', disabled: false },
	],
});

export const locationSelect = <T>(selectName: Path<T>): SelectConfigModel<T> => ({
	label: 'Forma zajęć:',
	selectName,
	optionItemsArray: [
		{ label: '-- wybierz --', value: '', disabled: true },
		{ label: 'Hrubieszów - Stacjonarnie', value: 'hrubieszow', disabled: false },
		{ label: 'Lublin - Stacjonarnie', value: 'lublin', disabled: false },
		{ label: 'Zamość - Stacjonarnie', value: 'zamosc', disabled: false },
		{ label: 'Online', value: 'online', disabled: false },
	],
});
