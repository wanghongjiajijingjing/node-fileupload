var express=require("express");
var app=express();
 
var router=express.Router();
var upload=require("./fileupload");

var controller=require("./controller/index");

app.set("view engine","ejs");
app.use("/public",express.static("public"));

controller(app);

app.post("/upload",upload.single("avatar"),function(req,res,next){
    console.log(req.file);
    console.log(req.body);
})

app.listen(8888);

module.exports = router;
