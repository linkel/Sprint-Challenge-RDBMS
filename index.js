const express = require('express');
const helmet = require('helmet');
const knex = require('knex');
const knexConfig = require('./knexfile');

const db = knex(knexConfig.development);

const server = express();

server.use(express.json());
server.use(helmet());

// Project POST takes project_name, project_description, and project_completed fields in the JSON.

server.post('/api/projects', (req, res) => {
    const proj = req.body;
    if (!proj.project_name) {
      res.status(500).json({error: "Please provide a name."});
    } else {
      db.insert(proj)
      .into('projects')
      .then(ids => {
        res.status(201).json({message: `Successfully added project with id ${ids[0]}`});
      })
      .catch(err => {
          console.log(err);
        res.status(500).json({error: "Failed to post to db."});
      })
    }
  })

// Actions POST takes action_description, notes, action_completed, and project_id that it belongs to

  server.post('/api/actions', (req, res) => {
    const action = req.body;
    if (!action.action_description || !action.project_id) {
      res.status(500).json({error: "Please provide an action_description and a project_id for this action."});
    } else {
      db.insert(action)
      .into('actions')
      .then(ids => {
        res.status(201).json({message: `Successfully added action with id ${ids[0]}`});
      })
      .catch(err => {
          console.log(err);
        res.status(500).json({error: "Failed to post to db."});
      })
    }
  })

  server.get('/api/projects/:id', (req, res) => {
      const id = req.params.id;
      db("projects").where("id",id)
      .then(proj => {
          db("actions").where("project_id",id)
          .then(actions => {
              let obj = proj;
              let actions_obj = actions;
              let new_obj = Object.assign(obj[0], {actions:actions_obj})
              res.status(200).json(new_obj);
          })
          .catch(err => {
              res.status(500).json({error: "Could not get from actions table."})
          })
      })
      .catch(err => {
          console.log(err);
          res.status(500).json({error: "Could not get from projects table"})
      })
  })

const port = 4000;
server.listen(port, () => console.log(`Server is now running on ${port}!`));