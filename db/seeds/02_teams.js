
exports.seed = function(knex) {
  return knex('team').del()
    .then(function () {
      return knex('team').insert([
        {
          id: 1,
          name: 'Team 1'
        },
        {
          id: 2,
          name: 'Team 2'
        },
        {
          id: 3,
          name: 'Team 3'
        }
      ]);
    });
};
