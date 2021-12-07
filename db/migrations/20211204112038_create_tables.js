exports.up = function (knex) {
  return knex.schema
    .createTable('user', (table) => {
      table.increments();
      table.string('name').notNullable();
      table.string('email').notNullable();
      table.string('password').notNullable();
    })
    .createTable('team', (table) => {
      table.increments();
      table.string('name').notNullable();
      table.integer('owner').references('id').inTable('user');
    })
    .createTable('team_member', (table) => {
      table.increments();
      table.integer('member').references('id').inTable('user');
      table.integer('team').references('id').inTable('team');
    })
    .createTable('project', (table) => {
      table.increments();
      table.string('name').notNullable();
      table.integer('team').references('id').inTable('team');
    })
    // TO DO: add validation that user is on the team associated with the project
    .createTable('collaborator', (table) => {
      table.increments();
      table.integer('user').references('id').inTable('user');
      table.integer('project').references('id').inTable('project');
    })
    .createTable('device', (table) => {
      table.increments();
      table.string('name').notNullable();
      table.string('location').notNullable();
      table.integer('user').references('id').inTable('user').notNullable();
      table.integer('project').references('id').inTable('project');
    })
    .createTable('model', (table) => {
      table.increments();
      table.string('name').notNullable();
      table.integer('project').references('id').inTable('project');
    })
    .createTable('app', (table) => {
      table.increments();
      table.string('name').notNullable();
      table.integer('project').references('id').inTable('project');
    })
    .then(console.log('user_team_device schema built into alwaysAI DB'))
    .catch((error) => { console.log('DB build failed', error); });
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists('app')
    .dropTableIfExists('model')
    .dropTableIfExists('device')
    .dropTableIfExists('collaborator')
    .dropTableIfExists('project')
    .dropTableIfExists('team_member')
    .dropTableIfExists('team')
    .dropTableIfExists('user');
};
