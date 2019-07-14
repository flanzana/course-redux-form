export const required = value =>
  value ? undefined : 'Value is required';

export const minLength = value =>
  value.length < 4
    ? 'Value is too short'
    : undefined;

export const maxLength = value =>
  value.length > 10
    ? 'Value is too long'
    : undefined;