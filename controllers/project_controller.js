const Project = require('../models/projectModel');
const Issue = require('../models/issueModel'); // Required if you want to populate issues within a project

// Create a project for the user
module.exports.create = async function(req, res) {
  try {
    await Project.create({
      name: req.body.name,
      description: req.body.description,
      author: req.body.author,
    });
    return res.redirect('back');
  } catch (err) {
    console.log(err);
    return res.redirect('back');
  }
};

// Find project and display it in the project page
module.exports.project = async function(req, res) {
  try {
    let project = await Project.findById(req.params.id).populate('issues'); // Assuming 'issues' is the correct path
    if (project) {
      return res.render('project_page', {
        title: 'Project Page',
        project,
      });
    }
    return res.redirect('back');
  } catch (err) {
    console.log(err);
    return res.redirect('back');
  }
};
