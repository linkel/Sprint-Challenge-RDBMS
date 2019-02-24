
exports.up = function(knex, Promise) {
    return knex.schema.createTable('projects', function(tbl) {
        tbl.increments();
        tbl.string("project_name").notNullable().unique()
        tbl.string("project_description");
        tbl.boolean("project_completed");
    })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('projects')
};
