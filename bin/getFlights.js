'use strict';

const request = require('request');
const req = request.defaults({json: true});

const base = "http://public-api.adsbexchange.com/VirtualRadar/AircraftList.json";
const latTag = 'lat';
const longTag = 'lng';
const rangeTag = 'fDstU';
const minAltTag = 'fAltL';

var targetLat = '28.038397';
var targetLong = '-80.641434';
var targetRangeInKM = '120';
var minAltInFT = '500';

var url = `${base}?${latTag}=${targetLat}&${longTag}=${targetLong}&${rangeTag}=${targetRangeInKM}&${minAltTag}=${minAltInFT}`
req.get(url, function(err, resp, body) {
  console.log(url);
  console.log(body);
});

