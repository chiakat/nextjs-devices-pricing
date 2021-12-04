
exports.up = function(knex) {
  knex.schema.createTable("project", tbl => {
    tbl.increments();
    table.string('name').notNullable();
    table.foreign("team").references("team_id").inTable("team");
  });

  knex.schema.createTable("collaborator", tbl => {
    tbl.increments();
    table.foreign("user").references("user_id").inTable("user");
    table.foreign("project").references("project_id").inTable("project");
  });

  knex.schema.createTable("device", tbl => {
    tbl.increments();
    table.string('name').notNullable();
    table.string('location').notNullable();
    table.foreign("user").references("user_id").inTable("user").notNullable();
    table.foreign("project").references("project_id").inTable("project");
  });

  knex.schema.createTable("model", tbl => {
    tbl.increments();
    table.string('name').notNullable();
    table.foreign("project").references("project_id").inTable("project");
  });

  knex.schema.createTable("app", tbl => {
    tbl.increments();
    table.string('name').notNullable();
    table.foreign("project").references("project_id").inTable("project");
  });

};

exports.down = function(knex) {
  knex.schema.dropTableIfExists("project");
  knex.schema.dropTableIfExists("collaborator");
  knex.schema.dropTableIfExists("device");
  knex.schema.dropTableIfExists("model");
  knex.schema.dropTableIfExists("app");
};
