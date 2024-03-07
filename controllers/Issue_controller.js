const Project = require('../models/projectModel');
const Issue = require('../models/issueModel');

// Create issue for a specific project
module.exports.createIssue = async function(req, res) {
  try {
    let project = await Project.findById(req.params.id);
    if (project) {
      let issue = await Issue.create({
        title: req.body.title,
        description: req.body.description,
        labels: req.body.labels,
        author: req.body.author,
      });
      project.issues.push(issue);

      // Labels handling
      if (!Array.isArray(req.body.labels)) {
        req.body.labels = [req.body.labels];
      }

      for (let label of req.body.labels) {
        if (!project.labels.includes(label)) {
          project.labels.push(label);
        }
      }

      await project.save();
      return res.redirect('back');
    } else {
      return res.redirect('back');
    }
  } catch (err) {
    console.log(err);
    return res.redirect('back');
  }
};