const express = require('express');
const router = express.Router();
const projectController = require('../controllers/project_controller');
const issueController = require('../controllers/Issue_controller');



router.post('/create', projectController.create);
router.get('/:id', projectController.project);
router.post('/:id', issueController.createIssue);

// router.post('/:id', projectController.createIssue);

module.exports = router;