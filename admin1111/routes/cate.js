var express = require('express');
var router = express.Router();
var dataCtrl = require('../controllers/cate.controller');



// router.get('/data/:id', dataCtrl.getData);
router.post('/data', dataCtrl.create);
router.put('/data/:id', dataCtrl.update);
router.get('/list/:type', dataCtrl.list);
router.delete('/data/:id', dataCtrl.remove);
// router.post('/removes', dataCtrl.removes);
module.exports = router;