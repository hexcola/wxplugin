var express  = require('express');
var request = require('request');
var util = require('util');
var parseString = require('xml2js').parseString;
var bodyParser = require('body-parser');


var app = express();



app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());

app.get('/qrcode', function (req, res) {
    console.log('hi, I receieve the req');
    var uuid_options = {
      url: 'https://login.weixin.qq.com/jslogin?appid=wx782c26e4c19acffb&redirect_uri=https%3A%2F%2Fwx.qq.com%2Fcgi-bin%2Fmmwebwx-bin%2Fwebwxnewloginpage&fun=new&lang=zh_CN',
      headers:{
        'Host': 'login.weixin.qq.com',
        'Referer':'https://wx.qq.com/',
        'User-Agent':'Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/43.0.2357.132 Safari/537.36'
      }
    };

    function uuid_callback(error, response, body){
      if(!error && response.statusCode == 200){

          console.log(body);
          // get the uuid out.
          uuid = body.substr(50, 14);
          console.log(uuid);
          res.send(uuid);
      }
    }

    request(uuid_options, uuid_callback);
});

app.get('/login/:uuid', function (req, res) {
    var uuid = req.params.uuid;

    console.log(uuid);
    var url_login = util.format("https://login.weixin.qq.com/cgi-bin/mmwebwx-bin/login?loginicon=true&uuid=%s&tip=0&r=-%d", uuid, new Date().getTime());
    console.log(url_login);

    var options = {
        url : url_login,
        headers:{
            "Host":"login.weixin.qq.com",
            "Referer":"https://wx.qq.com/",
            "User-Agent":"Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/43.0.2357.132 Safari/537.36"
        }
    };

    function callback(error, response, body){
        if(!error && response.statusCode == 200) {
            console.log(body);

            if(body.indexOf('window.code=200') !=-1){
                var newwxpageUrl = body.substring(body.indexOf('redirect_uri') + 14, body.lastIndexOf('"')) + '&fun=new&version=v2';
                console.log(newwxpageUrl);

                var getNewLoginPage_options = {
                    url: newwxpageUrl,
                    headers:{
                        "Host":"wx.qq.com",
                        "Referer":"https://wx.qq.com/",
                        "User-Agent":"Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/43.0.2357.132 Safari/537.36"
                    }
                };

                function getNewLoginPage_callback(err, response, body){
                    if(!err && response.statusCode == 200){
                        // convert body xml file to json file.
                        parseString(body, function (err_parase, result) {
                            var keyJSON = JSON.parse(JSON.stringify(result));
                            res.json(keyJSON);
                        });
                    }
                }

                request(getNewLoginPage_options, getNewLoginPage_callback);


            }else{
                res.send(body);
            }
        }
    }

    request(options, callback);
});

app.post('/init/:pass_ticket', function(req, res){
    var pass_ticket = req.params.pass_ticket;
    console.log(pass_ticket);

    console.log(req.body);


    //requst


});

app.get('/webwxgetcontact/:pass_ticket', function(req,res){
    var pass_ticket = req.params.pass_ticket;
    var skey = req.params.skey;

    var url = util.format('https://wx.qq.com/cgi-bin/mmwebwx-bin/webwxgetcontact?pass_ticket=%s&r=%d&skey=%s', pass_ticket, new Date().getTime(), skey);

    var options = {
        url: url,
        headers:{
            'Host': 'login.weixin.qq.com',
            'Referer':'https://wx.qq.com/',
            'User-Agent':'Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/43.0.2357.132 Safari/537.36'
        }
    };

    function callback(error, response, body){
        if(!error && response.statusCode == 200) {
            console.log(body);
            res.json(body);
        }
    }

    request(options, callback);

});


app.post('/webwxbatchgetcontact/:pass_ticket', function(req, res){
    var pass_ticket = req.params.pass_ticket;
    var payload = req.body;

    var url = util.format('https://wx.qq.com/cgi-bin/mmwebwx-bin/webwxbatchgetcontact?type=ex&r=%d&lang=zh_CN&pass_ticket=%s', new Date().getTime(), pass_ticket);

    var options = {
        url: url,
        headers:{
            'Host': 'login.weixin.qq.com',
            'Referer':'https://wx.qq.com/',
            'User-Agent':'Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/43.0.2357.132 Safari/537.36'
        }
    };



});

app.get('/webwxgetheadimg', function (req, res) {
    var seq = req.params.seq;
    var username = req.params.username;
    var skey = req.params.skey;

    var url = util.format('https://wx.qq.com/cgi-bin/mmwebwx-bin/webwxgetheadimg?seq=%d&username=%s&skey=%s',seq, username, skey);

    var options = {
        url: url,
        headers:{
            'Host': 'login.weixin.qq.com',
            'Referer':'https://wx.qq.com/',
            'User-Agent':'Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/43.0.2357.132 Safari/537.36'
        }
    };

    function callback(error, response, body){
        if(!error && response.statusCode == 200) {
            //console.log(body);
            res.send(body);
        }
    }

    request(options, callback);
});

/**
 *  Sync with server
 */
app.post('/synccheck', function (req, res) {

});


/**
 * Send Message
 */
app.post('/webwxsendmsg', function (req, res) {

});


app.listen(3000);

console.log('Server Running');