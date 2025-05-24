const express = require('express');
const { getAllResources, createResource, downloadResource } = require('../controllers/resourceController');
const { authenticateToken } = require('../middleware/auth');

const router = express.Router();

router.get('/', getAllResources);
router.post('/', authenticateToken, createResource);
router.get('/:id/download', downloadResource);

module.exports = router;
