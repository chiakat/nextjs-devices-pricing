exports.seed = function (knex) {
  return knex('users').del()
    .then(() => knex('users').insert([
      {
        id: 1,
        name: 'Hello World',
        email: 'chiakyu@gmail.com',
        password: 'password0',
      },
      {
        id: 2,
        name: 'Test User',
        email: 'testuser@email.com',
        password: 'password1',
      },
      {
        id: 3,
        name: 'Test User Again',
        email: 'testuser3@email.com',
        password: 'password123',
      },
    ]));
};
