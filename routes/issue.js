const express = require('express');
const router = express.Router();
const issueController = require('../controllers/Issue_controller');
const projectController = require('../controllers/project_controller');


router.get('/:id', projectController.project);
router.post('/:id', issueController.createIssue);
// require('dotenv').config();  //Load Env

module.exports = router;