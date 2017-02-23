var rp = require('request-promise');

var load ={};

load.options ={
		method: 'GET',
		uri: 'https://playground.avagree.com/api/carriers/1550549',
		headers: {
		 'Authorization': '58a49df4c387a0755fb6ed97'
	 }
};
load.getLoad = function(){

	return rp;
}

module.exports = load;
