# gif-video [![Flattr this!](https://api.flattr.com/button/flattr-badge-large.png)](https://flattr.com/submit/auto?user_id=hughskennedy&url=http://github.com/hughsk/gif-video&title=gif-video&description=hughsk/gif-video%20on%20GitHub&language=en_GB&tags=flattr,github,javascript&category=software)[![experimental](http://hughsk.github.io/stability-badges/dist/experimental.svg)](http://github.com/hughsk/stability-badges) #

Convert a GIF image into an HTML5-ready video for considerably better file
sizes. Much like [gfycat](http://gfycat.com/about), except you can process
and host it yourself.

## Usage ##

[![gif-video](https://nodei.co/npm/gif-video.png?mini=true)](https://nodei.co/npm/gif-video)

### `require('gif-video')([options])` ###

Returns a transform stream which takes a GIF buffer as input, and spits out
a video file on the other side.

``` javascript
var createStream = require('gif-video')
var fs = require('fs')

fs.createReadStream('input.gif')
  .pipe(createStream({ height: 200 }))
  .pipe(fs.createWriteStream('output.webm'))
```

`options` will be passed onto the
[stopmotion](http://github.com/hughsk/stopmotion) module, with the exception
of `inputCodec` which is forced to be `gif`.

## Dependency on FFmpeg ##

`gif-video` depends on you having [ffmpeg](http://www.ffmpeg.org/) in your path,
with support for [webm](http://en.wikipedia.org/wiki/WebM) enabled. You can do
this easily using [homebrew](http://brew.sh):

``` bash
brew install ffmpeg --with-libvpx --with-libvorbis --with-fdk-aacc
```

## License ##

MIT. See [LICENSE.md](http://github.com/hughsk/gif-video/blob/master/LICENSE.md) for details.
