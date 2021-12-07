
exports.seed = function(knex) {
  return knex('teams_members').del()
    .then(function () {
      return knex('teams_members').insert([
        {
          id: 1,
          member: 1,
          team: 1
        },
        {
          id: 2,
          member: 2,
          team: 1
        },
        {
          id: 3,
          member: 3,
          team: 1
        },
        {
          id: 4,
          member: 1,
          team: 2
        },
        {
          id: 5,
          member: 2,
          team: 2
        },
        {
          id: 6,
          member: 2,
          team: 3
        },
        {
          id: 7,
          member: 3,
          team: 3
        }
      ]);
    });
};
