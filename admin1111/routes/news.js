var express = require('express');
var router = express.Router();
var dataCtrl=require('../controllers/news.controller');

router.post('/data',dataCtrl.create);
router.put('/data/:id',dataCtrl.update);
router.delete('/data/:id',dataCtrl.remove);
router.post('/list',dataCtrl.list);
router.post('/removes', dataCtrl.removes);
router.put('/data/:id', dataCtrl.update);
router.get('/data/:id', dataCtrl.getData);

module.exports = router;
