/* Take in an email and generate a Gravatar url */
/* https://gravatar.com/site/implement/ */
import md5 from 'md5';

export const gravatar = (email: string) => {
  const hash = md5(email);
  return `https://www.gravatar.com/avatar/${hash}.jpg?d=identicon`;
};
