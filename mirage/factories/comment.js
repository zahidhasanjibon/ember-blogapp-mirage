import { faker } from '@faker-js/faker';
import { Factory } from 'miragejs';

export default Factory.extend({
  text() {
    return faker.lorem.sentence();
  },
  publishedAt() {
    return faker.date.past();
  },
});
