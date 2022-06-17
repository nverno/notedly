import md5 from 'md5';

/**
 * Take in an username/email and generate a Gravatar url
 * https://gravatar.com/site/implement/
 */
export const gravatar = (username: string) => {
  const hash = md5(username);
  return `https://www.gravatar.com/avatar/${hash}.jpg?d=identicon`;
};
