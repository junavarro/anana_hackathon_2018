var mqtt = require('mqtt')
//var client  = mqtt.connect('mqtt://spectacular-hairdresser.cloudmqtt.com',{username : 'hkadwsqx' ,password: 'BCTi-JnC_3Hg',port: 1883})
var express = require('express')
var cors = require('cors')
var app = express()

app.use(express.static(__dirname));
app.use(express.static (__dirname + '/bower_components'));
app.use(express.static (__dirname + '/node_modules'));
app.use(express.static (__dirname + '/images'));
app.use(express.static (__dirname + '/css'));
console.log(__dirname + "/bower_components");

app.get('/', function (req, res) {
  res.sendFile('./index.html', { root: __dirname });
}); 
app.listen(5000);