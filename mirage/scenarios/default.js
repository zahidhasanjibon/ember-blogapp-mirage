export default function (server) {
  /*
    Seed your development database using your factories.
    This data will not be loaded in your tests.
  */
  server.createList('post', 5);
  // server.loadFixtures('comments');
  // server.create('comment', { postId: 5 });
}
