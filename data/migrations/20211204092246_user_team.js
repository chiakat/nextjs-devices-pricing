
exports.up = function(knex) {
  knex.schema.createTable("user", tbl => {
    tbl.increments();
    table.string('email').notNullable();
    table.string('password').notNullable();
  });

  knex.schema.createTable("team", tbl => {
    tbl.increments();
    tbl.string("name").notNullable();
    table.foreign("owner").references("user_id").inTable("user");
  });

  knex.schema.createTable("team_member", tbl => {
    tbl.increments();
    table.foreign("member").references("user_id").inTable("user");
    table.foreign("team").references("team_id").inTable("team");

  });

};

exports.down = function(knex) {
  knex.schema.dropTableIfExists("user");
  knex.schema.dropTableIfExists("team");
  knex.schema.dropTableIfExists("team_member");
};
