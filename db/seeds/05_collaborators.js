exports.seed = function (knex) {
  return knex('collaborators').del()
    .then(() => knex('collaborators').insert([
      {
        id: 1,
        user: 1,
        project: 1,
      },
      {
        id: 2,
        user: 1,
        project: 2,
      },
      {
        id: 3,
        user: 2,
        project: 1,
      },
      {
        id: 4,
        user: 2,
        project: 2,
      },
      {
        id: 5,
        user: 3,
        project: 3,
      },
    ]));
};
