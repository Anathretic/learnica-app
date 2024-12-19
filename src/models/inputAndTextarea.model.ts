export interface InputAndTextareaModel {
	label: string;
	inputName: string;
	children: React.ReactNode;
	type?: string;
	placeholder?: string;
	value?: string;
	readOnly?: boolean;
}
