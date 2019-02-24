
exports.up = function(knex, Promise) {
    return knex.schema.createTable('actions', function(tbl) {
        tbl.increments();
        tbl.string("action_description").notNullable().unique()
        tbl.string("notes");
        tbl.boolean("action_completed");
        tbl.integer('project_id').unsigned()
        tbl.foreign('project_id').references('projects.id');
    })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('actions')
};
