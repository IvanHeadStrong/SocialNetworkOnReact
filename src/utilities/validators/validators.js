export const required = (message) => (value) => (value ? undefined : message);

export const maxLength = (max) => (value) =>
	value && value.length > max ? `Max length is ${max} symbols` : undefined;

export const minLength = (min) => (value) =>
	value && value.length < min ? `Min length is ${min} symbols` : undefined;

export const composeValidators = (...validators) => (value) =>
	validators.reduce((error, validator) => error || validator(value), undefined);
