exports.up = function (knex) {
  return knex.schema
    .createTable('users', (table) => {
      table.increments();
      table.string('name').notNullable();
      table.string('email').notNullable();
      table.string('password').notNullable();
    })
    .createTable('teams', (table) => {
      table.increments();
      table.string('name').notNullable();
      table.integer('owner').references('id').inTable('users');
    })
    .createTable('teams_members', (table) => {
      table.increments();
      table.integer('member').references('id').inTable('users');
      table.integer('team').references('id').inTable('teams');
    })
    .createTable('projects', (table) => {
      table.increments();
      table.string('name').notNullable();
      table.integer('team').references('id').inTable('teams');
    })
    // TO DO: add validation that users is on the team associated with the project
    .createTable('collaborators', (table) => {
      table.increments();
      table.integer('user').references('id').inTable('users');
      table.integer('project').references('id').inTable('projects');
    })
    .createTable('devices', (table) => {
      table.increments();
      table.string('name').notNullable();
      table.string('location').notNullable();
      table.integer('user').references('id').inTable('users').notNullable();
      table.integer('project').references('id').inTable('projects');
    })
    .createTable('models', (table) => {
      table.increments();
      table.string('name').notNullable();
      table.integer('project').references('id').inTable('projects');
    })
    .createTable('apps', (table) => {
      table.increments();
      table.string('name').notNullable();
      table.integer('project').references('id').inTable('projects');
    })
    .then(console.log('users_team_device schema built into alwaysAI DB'))
    .catch((error) => { console.log('DB build failed', error); });
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists('apps')
    .dropTableIfExists('models')
    .dropTableIfExists('devices')
    .dropTableIfExists('collaborators')
    .dropTableIfExists('projects')
    .dropTableIfExists('teams_members')
    .dropTableIfExists('teams')
    .dropTableIfExists('users');
};
