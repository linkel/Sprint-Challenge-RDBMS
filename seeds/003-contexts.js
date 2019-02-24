
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('table_name').del()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        {id: 1, context_name: 'at home'},
        {id: 2, context_name: 'at work'},
        {id: 3, context_name: 'at computer'},
        {id: 4, context_name: 'online'},
      ]);
    });
};
