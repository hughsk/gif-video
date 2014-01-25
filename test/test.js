var createStream = require('../')
var fs = require('fs')

try {
  fs.unlinkSync(__dirname + '/output.webm')
} catch(e){}

fs.createReadStream(__dirname + '/input.gif')
  .pipe(createStream({ height: 200 }))
  .pipe(fs.createWriteStream(__dirname + '/output.webm'))
