const router = require('express').Router();
const cpuUsage = require('../../../app/controllers/cpuUsage')

router.get('/getCpuUsage',cpuUsage.getCpuUsage);

module.exports = router
