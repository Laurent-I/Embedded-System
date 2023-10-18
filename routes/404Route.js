const express = require('express');
const router = express.Router();
const pageNotFoundController = require('../controllers/404');

// Handle 404 errors
router.use(pageNotFoundController.pageNotFound);

module.exports = router;
