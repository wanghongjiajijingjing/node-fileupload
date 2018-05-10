var mongoose=require("mongoose");

mongoose.connect("mongodb://<name>:<password>@ds217310.mlab.com:17310/todo");
// 创建图表
var todoSchema=new mongoose.Schema({
    name:String,
    age:Number
});
// 往数据库中存储数据
var Todo=mongoose.model("Todo",todoSchema);

var bodyParser=require("body-parser");
var urlencodeParser=bodyParser.urlencoded({extended:false});

var allData=[];

module.exports=function(app){
    app.get("/",function(req,res){
        Todo.find({},function(err,data){
            if(err) throw err;
            res.render("index",{data:data});
            allData=data;
        })
        //res.render("index",{data:data});
    });

    app.post("/todo",urlencodeParser,function(req,res){
        console.log(req.body);
        Todo(req.body).save(function(err,data){
            if(err) throw err;
            console.log("success 11111");
            console.log(data);
            res.json(data);
        });
        //data.push(req.body);
        //res.json(data);
    })

    app.delete("/todo/:item",function(req,res){
        /*console.log(req.params);
        data.splice(req.params.item,1);
        res.json(data);*/
        Todo.find(allData[req.params.item]).remove(function(err,data){
            if(err) throw err;
            res.json(data);
        });
    })

    app.post('/file-upload', function(req, res, next) {
        console.log(req.body);
        console.log(req.files.thumbnail);
        //console.log(req);
    });
}