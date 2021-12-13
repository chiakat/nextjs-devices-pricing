exports.seed = function (knex) {
  return knex('teams').del()
    .then(() => knex('teams').insert([
      {
        id: 1,
        name: 'Team 1',
        owner: 3,
      },
      {
        id: 2,
        name: 'Team 2',
        owner: 2,
      },
      {
        id: 3,
        name: 'Team 3',
        owner: 1,
      },
    ]));
};
