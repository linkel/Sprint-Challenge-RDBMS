
exports.up = function(knex, Promise) {
    return knex.schema.createTable('action_to_context', function(tbl) {
        tbl.increments();
        tbl.integer('action_id').unsigned()
        tbl.foreign('action_id').references('actions.id');
        tbl.integer('context_id').unsigned()
        tbl.foreign('context_id').references('contexts.id');
    })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("action_to_context")
};
