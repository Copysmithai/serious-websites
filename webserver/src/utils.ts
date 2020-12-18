import * as EmailValidator from 'email-validator';

export const validateEmail = async (email: string) => {
  return EmailValidator.validate(email);
};

export const getRandomId = () => {
  const hex = '0123456789abcdef';

  let ret = '';
  for (let i = 0; i < 10; i += 1) {
    ret += hex[Math.floor(hex.length * Math.random())];
  }
  return ret;
};
