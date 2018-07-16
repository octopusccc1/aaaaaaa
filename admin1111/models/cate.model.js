var mongoose = require('mongoose');
materializedPlugin = require('mongoose-materialized');

var CateSchema = new mongoose.Schema({
  cateId:mongoose.Schema.ObjectId,
  title: String,
  type: Number

});

CateSchema.plugin(materializedPlugin);

module.exports = mongoose.model('Cate', CateSchema);
