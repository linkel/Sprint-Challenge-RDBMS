
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {id: 1, project_name: 'Discover the realities', project_description: "The truth is just beyond thy ken", project_completed:0},
        {id: 2, project_name: 'Suffer quietly with the truth', project_description: "The truth is unknowable", project_completed: 0}
      ]);
    });
};
