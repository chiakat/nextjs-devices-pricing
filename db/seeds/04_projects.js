
exports.seed = function(knex) {
  return knex('projects').del()
    .then(function () {
      return knex('projects').insert([
        {
          id: 1,
          name: 'Project 1 - Team 1',
          team: 1,
        },
        {
          id: 2,
          name: 'Project 2 - Team 1',
          team: 1,
        },
        {
          id: 3,
          name: 'Project 3 - Team 2',
          team: 2,
        },
        {
          id: 4,
          name: 'Project 4 - Team 3',
          team: 3,
        }
      ]);
    });
};
