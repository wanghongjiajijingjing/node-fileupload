module.exports=function(){
    var mongoose=require("mongoose");
    mongoose.connect("mongodb://todo:123456@ds217310.mlab.com:17310/todo");
    // 创建图表
    var todoSchema=new mongoose.Schema({
        name:String,
        age:Number
    });
    // 往数据库中存储数据
    var db=mongoose.model("Todo",todoSchema);
    return db;
}