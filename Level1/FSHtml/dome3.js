var fs = require('fs')
fs.readdir('./', function(err, list){
  list.forEach(function (e, i) {
    fs.stat(e, function (err, infor) {
    /*  console.log(e)
      console.log(infor)*/
      console.log(infor.mode)
      switch(infor.mode) {
        case 33206:
          console.log('[文件]'+ e);
        break;
        default:
          console.log(1)
      }
    })
  })
})


// 33206 [文件]1.txt 33206 [文件]2.txt 33206 [文件]3.txt 33206 ..............