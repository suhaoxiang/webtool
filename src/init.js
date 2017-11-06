const exec=require('child_process').exec;

exports.run =function(name){
    exec('mkdir'+name,function(){
        console.log("src/init.js中的init命令正在执行");
    });
};


