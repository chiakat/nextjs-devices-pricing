
exports.seed = function(knex) {
  return knex('app').del()
    .then(function () {
      return knex('app').insert([
        {
          id: 1,
          project: 1,
        },
        {
          id: 2,
          project: 1,
        },
        {
          id: 3,
          project: 1,
        }
      ]);
    });
};