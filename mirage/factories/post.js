import { faker } from '@faker-js/faker';
import { Factory } from 'miragejs';

export default Factory.extend({
  title() {
    return faker.lorem.sentence();
  },
  body() {
    return faker.lorem.paragraph();
  },
  publishedAt() {
    return faker.date.past();
  },
  afterCreate(post, server) {
    server.createList('comment', 3, { post });
  },
});
