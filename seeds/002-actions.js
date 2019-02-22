
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('table_name').del()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        {id: 1, action_description: 'Whittle away the fabric', notes: "To see beyond", action_completed: 0, project_id: 1},
        {id: 2, action_description: 'Pry into the joints', notes: "glimpse within", action_completed: 0, project_id: 1},
        {id: 3, action_description: 'Break open the shell', notes: "Shatter it", action_completed: 0, project_id: 1},
        {id: 4, action_description: 'Destroy that which stands before you', notes: "Brute force", action_completed: 0, project_id: 1},
        {id: 5, action_description: 'Cower from the light', notes: "Escape!", action_completed: 0, project_id: 2},
      ]);
    });
};