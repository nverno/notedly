import { faker } from '@faker-js/faker';
import { mapi } from '@utils';

export const notes = mapi(10, (i) => ({
  id: String(i),
  content: faker.hacker.phrase(),
  author: faker.name.findName(),
}));
