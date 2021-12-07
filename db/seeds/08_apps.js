
exports.seed = function(knex) {
  return knex('apps').del()
    .then(function () {
      return knex('apps').insert([
        {
          id: 1,
          name: 'App 1',
          project: 1,
        },
        {
          id: 2,
          name: 'App 2',
          project: 1,
        },
        {
          id: 3,
          name: 'App 3',
          project: 1,
        }
      ]);
    });
};