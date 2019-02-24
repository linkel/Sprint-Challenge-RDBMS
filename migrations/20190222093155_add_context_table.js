
exports.up = function(knex, Promise) {
    return knex.schema.createTable('contexts', function(tbl) {
        tbl.increments();
        tbl.string("context_name").notNullable().unique()
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('contexts')
};
