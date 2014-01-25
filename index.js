var exploder   = require('gif-explode')
var stopmotion = require('stopmotion')
var streamify  = require('streamify')
var multipipe  = require('multipipe')
var through    = require('through2')

module.exports = createStream

function createStream(options) {
  options.inCodec = 'gif'

  var video = stopmotion(options)
  var output = streamify()
  var input = through()

  input.once('end', function() {
    output.resolve(video.ready())
  }).pipe(exploder(function(gifFrame) {
    gifFrame.pipe(video.frame())
  }))

  return multipipe(
      input
    , through(function(){})
    , output
  )
}
