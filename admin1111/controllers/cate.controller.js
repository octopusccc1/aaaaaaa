const mongoose = require('mongoose');
const Cate = require('../models/cate.model');

exports.create = function (req, res, next) {
  const cate = new Cate({ 'name': 'cccc' }, false);
  cate.save().then(data => {
    console.log(data)
    res.json(data);
  }).catch(err => {
    console.log(err)
  })
};
exports.update = function (req, res, next) {
  var id = req.params.id;
  console.log(req.params.id);
  //根据数据模型原则进行ID查找，并且更新数据
  Cate.findByIdAndUpdate(id, {
    $set: req.body
  }, {
      new: false
    }).then(data => {
      res.json(data);
    })
};

function reverseTree(data, pid) {
  var result = [],
    temp;
  var data = JSON.parse(JSON.stringify(data));
  for (var i in data) {
    if (data[i].parentId === pid) {
      result.push(data[i]);

      temp = reverseTree(data, data[i]._id);
      if (temp.length > 0) {
        data[i].children = temp;
      }
    }
  }

  return result;
}
exports.list = function (req, res, next) {
  var type = req.params.type || 1;
  console.log(type);
  Cate.find({
    name: 'zhangyu'
  }, function (err, data) {
    console.log(data)
    console.log(typeof data)
    // var rpTree = reverseTree(data, null);
    res.json(data)
  })
};
exports.remove = function (req, res, next) {
  console.log(req, '1')
  var id = req.params.id;
  ids = [];
  console.log(id)
  Cate.findOne({
    _id: id
  }, function (err, doc) {
    if (doc) {
      ids = [doc._id];
      doc.getChildren().then(function (docs) {
        for (var i = 0; i < docs.length; i++) {
          ids.push(docs[i]._id);
        }
        console.log(ids);
        Cate.remove({
          _id: {
            $in: ids
          }
        }).then(data => {
          res.json({
            message: '删除多条记录成功',
            status: 200
          });
        });
      });

    }
  })
};
exports.getData = function (req, res, next) {
  var id = req.params.id;
  console.log(req.params.id);
  Cate.findById(id, function (err, data) {
    res.json(data);
  });
};