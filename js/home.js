$('#homepage').live('pageshow', function(event){ 
	//var reg_no = getUrlVars()["reg_no"];
	var reg_no = sessionStorage.getItem('reg_no');
	var AmbilData;
	$.ajax({
		type : 'GET',
		url : 'http://192.168.1.101/services/get_student_info.php?reg_no='+ reg_no,
		async: true,
		crossDomain: true,
		dataType : 'jsonp',
		success : function(data){
				AmbilData = data.items;
				$.each(AmbilData, function(index, loaddata) {
					$('#studentinfo').append('Welcome ' +loaddata.last_name+', '+ loaddata.first_name + ' (' + loaddata.registration_no + ' / ' +
					loaddata.nim + ') ');
					  
					});
				}
	});
});
function getUrlVars() {
		var vars = [], hash;
		var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
		for(var i = 0; i < hashes.length; i++)
		{
			hash = hashes[i].split('=');
			vars.push(hash[0]);
			vars[hash[0]] = hash[1];
		}
		return vars;
}

	