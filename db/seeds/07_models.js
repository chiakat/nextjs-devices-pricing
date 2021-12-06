
exports.seed = function(knex) {
  return knex('model').del()
    .then(function () {
      return knex('model').insert([
        {
          id: 1,
          name: 'Model 1',
          project: 1,
        },
        {
          id: 2,
          name: 'Model 2',
          project: 1,
        },
        {
          id: 3,
          name: 'Model 3',
          project: 2,
        }
      ]);
    });
};
