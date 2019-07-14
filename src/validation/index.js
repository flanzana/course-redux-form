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

export const matchesPassword = (value, allValues) =>
  value === allValues.password ? undefined : 'Passwords must match';


// In the real world, we would query our database, but for
// the sake of this example, we'll mark some already-taken user names.
const takenUsernames = ['kent', 'andy', 'john', 'joel'];


// In a real-world situation, we would need to wait until the database is queried. Let's simulate some latency.
export const asyncValidate = async values => {
  const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
  await sleep(1000);
  if (takenUsernames.includes(values.username)) {
    return Promise.reject({
      username: 'Username already taken',
    })

  }
};