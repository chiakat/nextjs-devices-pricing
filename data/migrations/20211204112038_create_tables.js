
exports.up = function(knex) {
  knex.schema
    .createTable("user", tbl => {
      tbl.increments();
      table.string('email').notNullable();
      table.string('password').notNullable();
    })
    .createTable("team", tbl => {
      tbl.increments();
      tbl.string("name").notNullable();
      table.foreign("owner").references("user_id").inTable("user");
    })
    .createTable("team_member", tbl => {
      tbl.increments();
      table.foreign("member").references("user_id").inTable("user");
      table.foreign("team").references("team_id").inTable("team");
    })
    .createTable("project", tbl => {
      tbl.increments();
      table.string('name').notNullable();
      table.foreign("team").references("team_id").inTable("team");
    })
    .createTable("collaborator", tbl => {
      tbl.increments();
      table.foreign("user").references("user_id").inTable("user");
      table.foreign("project").references("project_id").inTable("project");
    })
    .createTable("device", tbl => {
      tbl.increments();
      table.string('name').notNullable();
      table.string('location').notNullable();
      table.foreign("user").references("user_id").inTable("user").notNullable();
      table.foreign("project").references("project_id").inTable("project");
    })
    .createTable("model", tbl => {
      tbl.increments();
      table.string('name').notNullable();
      table.foreign("project").references("project_id").inTable("project");
    })
    .createTable("app", tbl => {
      tbl.increments();
      table.string('name').notNullable();
      table.foreign("project").references("project_id").inTable("project");
    });
};

exports.down = function(knex) {
  knex.schema
    .dropTableIfExists("app")
    .dropTableIfExists("model")
    .dropTableIfExists("device")
    .dropTableIfExists("collaborator")
    .dropTableIfExists("project")
    .dropTableIfExists("team_member")
    .dropTableIfExists("team")
    .dropTableIfExists("user");
};