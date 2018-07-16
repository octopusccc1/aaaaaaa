const mongoose = require('mongoose');
const User=require('../models/user.model');

exports.create=function(req,res,next){
    console.log(req.body)
    const user=new User(req.body);
    user.save().then(data=>{
        res.json(data);
    });
};
exports.update=function(req,res,next){
  var id=req.params.id;
  console.log(req.params.id);
  //根据数据模型原则进行ID查找，并且更新数据
  User.findByIdAndUpdate(id,{$set:req.body},{ new:false }).then(data=>{
      res.json(data);
  })
};
exports.remove=function(req,res,next){
    var id=req.params.id;
    console.log(req.params.id);
    User.findByIdAndRemove(id,function(err,data){
   res.json({message:'删除成功',status:200});
    } )
  };
exports.list=function(req,res,next){
    var page=req.body.page?req.body.page:1;
    var rows=req.body.rows?req.body.rows:5;
    var queryCondition={};
    if(req.body.name&&req.body.name.trim().length>0){
        name=req.body.name;
        queryCondition={
            "name":new RegExp(name,'i')
        }
    }
  console.log(rows)
   User.paginate(queryCondition, { page: page, limit:+rows }, function(err, result) {
    res.json(result);
      });
}
exports.removes = function(req, res, next) {
    var ids = req.body.ids;
    ids = ids.split(',');
    if (ids.length > 0) {
      User.remove({ _id: { $in: ids } }).then(data => {
        res.json({ message: '删除多条记录成功', status: 200 });
      });
    }
  };
  exports.getData = function(req, res, next) {
    console.log(req.params.id);
    var id = req.params.id;
    User.findById(id, function(err, data) {
      res.json(data);
    });
  };