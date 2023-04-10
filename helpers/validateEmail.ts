const validateEmail = (email: string) =>
  email.slice(email.indexOf('@')).includes('.');

export default validateEmail;
