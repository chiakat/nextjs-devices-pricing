exports.seed = function (knex) {
  return knex('devices').del()
    .then(() => knex('devices').insert([
      {
        id: 1,
        name: 'Device 1',
        location: 'North',
        user: 1,
        project: 1,
      },
      {
        id: 2,
        name: 'Device 2',
        location: 'East',
        user: 1,
        project: 2,
      },
      {
        id: 3,
        name: 'Device 3',
        location: 'West',
        user: 2,
        project: 2,
      },
      {
        id: 4,
        name: 'Device 4',
        location: 'North',
        user: 2,
        project: 3,
      },
      {
        id: 5,
        name: 'Device 5',
        location: 'South',
        user: 3,
        project: null,
      },
    ]));
};
