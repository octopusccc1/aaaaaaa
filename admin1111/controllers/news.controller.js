const mongoose = require('mongoose');
const News = require('../models/news.model');

exports.create = function(req, res, next) {
  const news = new News(req.body);
  news.save().then(data => {
    res.json(data);
  });
};

exports.update = function(req, res, next) {
  var id = req.params.id;
  console.log(req.params.id);
  News.findByIdAndUpdate(id, { $set: req.body }, { new: false }).then(data => {
    res.json(data);
  });
};
exports.update=function(req,res,next){
  var id=req.params.id;
  console.log(req.params.id);
  //根据数据模型原则进行ID查找，并且更新数据
  News.findByIdAndUpdate(id,{$set:req.body},{ new:false }).then(data=>{
      res.json(data);
  })
};
exports.removes = function(req, res, next) {
  var ids = req.body.ids;
  ids = ids.split(',');
  if (ids.length > 0) {
    News.remove({ _id: { $in: ids } }).then(data => {
      res.json({ message: '删除多条记录成功', status: 200 });
    });
  }
};
exports.remove = function(req, res, next) {
  var id = req.params.id;
  console.log('删除id', id);
  News.findByIdAndRemove(id, function(err, data) {
    res.json({ message: '删除成功', status: 200 });
  });
};

exports.list = function(req, res, next) {
  var page = req.body.page ? req.body.page : 1;
  var limit = req.body.limit ? req.body.limit : 5;
  var cateId = req.body.cateId;
  var queryCondition = {};

  if (req.body.cateId && req.body.cateId.trim().length > 0) {
    cateId = req.body.cateId;

    queryCondition = {
      cateId: cateId
    };
  }

  if (req.body.title && req.body.title.trim().length > 0) {
    title = req.body.title;
    // Object.assign 的功能是对象合并

    queryCondition = Object.assign(queryCondition, {
      title: new RegExp(title, 'i')
    });
  }

  console.log(queryCondition);
  News.paginate(queryCondition, { page: page, limit: limit }, function(
    err,
    result
  ) {
  
    res.json(result);
  });
};

exports.getData = function(req, res, next) {
  console.log(req.params.id);
  var id = req.params.id;

  News.findById(id, function(err, data) {
    res.json(data);
  });
};