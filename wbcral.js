var http = require('http');
var htmlparser = require('htmlparser2');
const request = require('request');
var base_url = 'https://google.com';
var array_hrefs = []

request(base_url, function(error, response, body) {
  if(error)
    console.log(error);
  else if(response.statusCode == 200) {
    var parseResponse = new htmlparser.Parser({
    onopentag: function(name, attribs){
        if(name === "a"){
            //console.log(attribs.href);
            array_hrefs.push(attribs.href);

        }
    },
    ontext: function(text){
        //console.log("-->", text);
    },
    onclosetag: function(tagname){
        if(tagname === "a"){
           // console.log("That's it?!");
        }
    }
}, {decodeEntities: true});
parseResponse.write(body);
parseResponse.end();

  }
});

