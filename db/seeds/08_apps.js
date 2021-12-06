
exports.seed = function(knex) {
  return knex('app').del()
    .then(function () {
      return knex('app').insert([
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