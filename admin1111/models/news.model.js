var mongoose = require('mongoose');
var mongoosePaginate = require('mongoose-paginate');

var NewsSchema = new mongoose.Schema({ 
  name:String,
  title:String
 });
 NewsSchema.plugin(mongoosePaginate);

module.exports= mongoose.model('News',  NewsSchema);
//models:定义了数据模型
//controllers:按照这个数据模型的样子来进行数0据的操作
//增删改查 控制
//routes:需要一个路由来进入到控制的操作
//应该有一个地址是POST的形式，并且指向到controllers里的create

//routes->controller->model