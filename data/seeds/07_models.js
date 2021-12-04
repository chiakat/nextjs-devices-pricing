
exports.seed = function(knex) {
  return knex('model').del()
    .then(function () {
      return knex('model').insert([
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
          project: 2,
        }
      ]);
    });
};
