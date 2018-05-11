module.exports=function(app){
    var db=require("./db")();
    var bodyParser=require("body-parser");
    var urlencodeParser=bodyParser.urlencoded({extended:false});
    var allData=[];

    app.get("/",function(req,res){
        db.find({},function(err,data){
            if(err) throw err;
            res.render("index",{personInfo:data});
            allData=data;
        })
    });

    app.post("/todo",urlencodeParser,function(req,res){
        console.log(req.body);
        db(req.body).save(function(err,data){
            if(err) throw err;
            console.log("success 11111");
            console.log(data);
            res.json(data);
        });
    })

    app.delete("/todo/:item",function(req,res){
        db.find(allData[req.params.item]).remove(function(err,data){
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