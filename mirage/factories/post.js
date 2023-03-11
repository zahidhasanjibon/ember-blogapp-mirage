import { faker } from '@faker-js/faker';
import { Factory } from 'miragejs';
export default Factory.extend({
  title() {
    return faker.name.fullName();
  },
  body() {
    return `${faker.company.name()} ${faker.company.name()} ${faker.company.name()}`;
  },
  publishedAt() {
    return faker.date.past();
  },
});
