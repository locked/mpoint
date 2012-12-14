
window.google = window.google || {};
google.maps = google.maps || {};
(function() {
  function getScript(src) {
    document.write('<' + 'script src="' + src + '"' +
                   ' type="text/javascript"><' + '/script>');
  }
  
  var modules = google.maps.modules = {};
  google.maps.__gjsload__ = function(name, text) {
    modules[name] = text;
  };
  
  google.maps.Load = function(apiLoad) {
    delete google.maps.Load;
    apiLoad([0.009999999776482582,[[["http://mt0.googleapis.com/vt?lyrs=m@200000000\u0026src=api\u0026hl=en-US\u0026","http://mt1.googleapis.com/vt?lyrs=m@200000000\u0026src=api\u0026hl=en-US\u0026"],null,null,null,null,"m@200000000"],[["http://khm0.googleapis.com/kh?v=122\u0026hl=en-US\u0026","http://khm1.googleapis.com/kh?v=122\u0026hl=en-US\u0026"],null,null,null,1,"122"],[["http://mt0.googleapis.com/vt?lyrs=h@200000000\u0026src=api\u0026hl=en-US\u0026","http://mt1.googleapis.com/vt?lyrs=h@200000000\u0026src=api\u0026hl=en-US\u0026"],null,null,"imgtp=png32\u0026",null,"h@200000000"],[["http://mt0.googleapis.com/vt?lyrs=t@130,r@200000000\u0026src=api\u0026hl=en-US\u0026","http://mt1.googleapis.com/vt?lyrs=t@130,r@200000000\u0026src=api\u0026hl=en-US\u0026"],null,null,null,null,"t@130,r@200000000"],null,[[null,0,7,7,[[[330000000,1246050000],[386200000,1293600000]],[[366500000,1297000000],[386200000,1314843700]]],["http://mt0.gmaptiles.co.kr/mt?v=kr1.17\u0026hl=en-US\u0026","http://mt1.gmaptiles.co.kr/mt?v=kr1.17\u0026hl=en-US\u0026"]],[null,0,8,8,[[[330000000,1246050000],[386200000,1279600000]],[[345000000,1279600000],[386200000,1286700000]],[[354690000,1286700000],[386200000,1314843700]]],["http://mt0.gmaptiles.co.kr/mt?v=kr1.17\u0026hl=en-US\u0026","http://mt1.gmaptiles.co.kr/mt?v=kr1.17\u0026hl=en-US\u0026"]],[null,0,9,9,[[[330000000,1246050000],[386200000,1279600000]],[[340000000,1279600000],[386200000,1286700000]],[[348900000,1286700000],[386200000,1302000000]],[[368300000,1302000000],[386200000,1314843700]]],["http://mt0.gmaptiles.co.kr/mt?v=kr1.17\u0026hl=en-US\u0026","http://mt1.gmaptiles.co.kr/mt?v=kr1.17\u0026hl=en-US\u0026"]],[null,0,10,19,[[[329890840,1246055600],[386930130,1284960940]],[[344646740,1284960940],[386930130,1288476560]],[[350277470,1288476560],[386930130,1310531620]],[[370277730,1310531620],[386930130,1314843700]]],["http://mt0.gmaptiles.co.kr/mt?v=kr1.17\u0026hl=en-US\u0026","http://mt1.gmaptiles.co.kr/mt?v=kr1.17\u0026hl=en-US\u0026"]],[null,3,7,7,[[[330000000,1246050000],[386200000,1293600000]],[[366500000,1297000000],[386200000,1314843700]]],["http://mt0.gmaptiles.co.kr/mt?v=kr1p.17\u0026hl=en-US\u0026","http://mt1.gmaptiles.co.kr/mt?v=kr1p.17\u0026hl=en-US\u0026"]],[null,3,8,8,[[[330000000,1246050000],[386200000,1279600000]],[[345000000,1279600000],[386200000,1286700000]],[[354690000,1286700000],[386200000,1314843700]]],["http://mt0.gmaptiles.co.kr/mt?v=kr1p.17\u0026hl=en-US\u0026","http://mt1.gmaptiles.co.kr/mt?v=kr1p.17\u0026hl=en-US\u0026"]],[null,3,9,9,[[[330000000,1246050000],[386200000,1279600000]],[[340000000,1279600000],[386200000,1286700000]],[[348900000,1286700000],[386200000,1302000000]],[[368300000,1302000000],[386200000,1314843700]]],["http://mt0.gmaptiles.co.kr/mt?v=kr1p.17\u0026hl=en-US\u0026","http://mt1.gmaptiles.co.kr/mt?v=kr1p.17\u0026hl=en-US\u0026"]],[null,3,10,null,[[[329890840,1246055600],[386930130,1284960940]],[[344646740,1284960940],[386930130,1288476560]],[[350277470,1288476560],[386930130,1310531620]],[[370277730,1310531620],[386930130,1314843700]]],["http://mt0.gmaptiles.co.kr/mt?v=kr1p.17\u0026hl=en-US\u0026","http://mt1.gmaptiles.co.kr/mt?v=kr1p.17\u0026hl=en-US\u0026"]]],[["http://cbk0.googleapis.com/cbk?","http://cbk1.googleapis.com/cbk?"]],[["http://khm0.googleapis.com/kh?v=67\u0026hl=en-US\u0026","http://khm1.googleapis.com/kh?v=67\u0026hl=en-US\u0026"],null,null,null,null,"67"],[["http://mt0.googleapis.com/mapslt?hl=en-US\u0026","http://mt1.googleapis.com/mapslt?hl=en-US\u0026"]],[["http://mt0.googleapis.com/mapslt/ft?hl=en-US\u0026","http://mt1.googleapis.com/mapslt/ft?hl=en-US\u0026"]],[["http://mt0.googleapis.com/vt?hl=en-US\u0026","http://mt1.googleapis.com/vt?hl=en-US\u0026"]]],["en-US","US",null,0,null,null,"http://maps.gstatic.com/mapfiles/","http://csi.gstatic.com","https://maps.googleapis.com","http://maps.googleapis.com"],["http://maps.gstatic.com/intl/en_us/mapfiles/api-3/10/19","3.10.19"],[451017706],1.0,null,null,null,null,0,"",null,null,0,"http://khm.googleapis.com/mz?v=122\u0026",null,"https://earthbuilder.google.com","https://earthbuilder.googleapis.com"], loadScriptTime);
  };
  var loadScriptTime = (new Date).getTime();
  getScript("http://maps.gstatic.com/intl/en_us/mapfiles/api-3/10/19/main.js");
})();


function GoogleMap(){
	this.initialize = function(){
		var map = showMap();
		addMarkersToMap(map);
	}
	var addMarkersToMap = function(map){
	    navigator.geolocation.getCurrentPosition(function(position){
			var latitudeAndLongitudeOne = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
			var markerOne = new google.maps.Marker({
				position: latitudeAndLongitudeOne,
				map: map,
			});
			map.setCenter(latitudeAndLongitudeOne);
			map.setZoom(13);
	    }, function(error){
	    	alert('code : '    + error.code    + '\n' +
		          'message : ' + error.message + '\n');
		}, {
			enableHighAccuracy: true,
		});
	}
	var showMap = function(){
		var mapOptions = {
			zoom: 13,
			//center: new google.maps.LatLng(current_latitude, current_longitude),
			mapTypeId: google.maps.MapTypeId.ROADMAP
		}
		var map = new google.maps.Map(document.getElementById("map"), mapOptions);
		return map;
	}
}


function checkNetwork() {
    var networkState = navigator.connection.type;
    var states = {};
    states[Connection.UNKNOWN]  = 'Unk';
    states[Connection.ETHERNET] = 'Eth';
    states[Connection.WIFI]     = 'WiFi';
    states[Connection.CELL_2G]  = '2G';
    states[Connection.CELL_3G]  = '3G';
    states[Connection.CELL_4G]  = '4G';
    states[Connection.NONE]     = 'Err';
    $("h1.header").text(app_title + '(' + states[networkState] + ')');
}


function getContacts() {
    var obj = new ContactFindOptions();
    obj.filter = "";
    obj.multiple = true;
    navigator.contacts.find([ "displayName", "name" ], function (contacts) {
		var contacts_html = "<table>";
		for( id in contacts ) {
			contact = contacts[id];
			contacts_html+= "<tr><td>" + id + "</td><td>" + contact.name.formatted + "</td></tr>";
		} 
		contacts_html+= "</table>";
		$("#contacts").html(contacts_html);
	}, function (msg) {
		alert(msg);
	}, obj);
}


function GUID ()
{
    var S4 = function ()
    {
        return Math.floor(
                Math.random() * 0x10000 /* 65536 */
            ).toString(16);
    };
    return (
            S4() + S4() + "-" +
            S4() + "-" +
            S4() + "-" +
            S4() + "-" +
            S4() + S4() + S4()
        );
}


function startChat( other_uuid ) {
	if( !socket ) alert("No socket available, check connection");
	socket.on('chat-'+device.uuid+'-'+other_uuid, function (data) {
		$("#msgs").append(data["txt"]+"<br/>");
	});
	$("#txt").keydown(function(e) {
		if(e.keyCode==13) {
			var target = e.currentTarget;
			socket.emit('newtext'+'-'+other_uuid, { txt: target.value });
			$(target).val('');
			return false;
		}
	});
}


var current_latitude = 0;
var current_longitude = 0;
var app_title = "MPoint";
var uuid = "";
var socket = false;


var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },

    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
        document.addEventListener('online', this.onOnline, false);
    },

    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicity call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    
    onOnline: function() {
		checkNetwork();
		/*
		*/
		if( !socket ) {
			socket = io.connect('http://yuka-1.lunasys.fr:8000');
		}
	    navigator.geolocation.getCurrentPosition(function(position){
			current_latitude = position.coords.latitude;
			current_longitude = position.coords.longitude; 
	    }, function(error){
	    	alert('code : ' + error.code + '\n' + 'message : ' + error.message + '\n');
		}, {
			enableHighAccuracy: true,
		});
    },
    
    receivedEvent: function(id) {
    	uuid = device.uuid;

        $("h1.header").text(app_title + '(..)');

		getContacts();
		
		checkNetwork();

	    var map = new GoogleMap();
	    map.initialize();

	    navigator.geolocation.watchPosition(function(position){
			current_latitude = position.coords.latitude;
			current_longitude = position.coords.longitude; 
	    }, function(error){
	    	alert('code : ' + error.code + '\n' + 'message : ' + error.message + '\n');
		}, {
			enableHighAccuracy: true,
		});

	    window.setInterval(function(){
	    	var data = "";
			data += "uuid="+uuid;
			data += "&lat="+current_latitude+"&lon="+current_longitude; 
	    	$.getJSON('http://php.lunasys.fr/ping/?'+data, function(json){
				var list_str = "<table>";
	    		for( uid in json ) {
	    			var user = json[uid];
	    			list_str+= "<tr><td>"+user["uuid"]+"</td><td>"+user["date_update"]+"</td><td>"+user["distance"]+"</td></tr>"; 
	    		}
				list_str+= "</table>";
    			$("#list").html(list_str);
	    	});
	    }, 10000);

        console.log('Received Event: ' + id);
    }
};
