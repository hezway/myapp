
$('#chapelabsentpage').live('pageshow', function(event){ 
	var AmbilData1;
	var reg_no = sessionStorage.getItem('reg_no');
	$.ajax({
		type : 'GET',
		url : 'http://192.168.1.101/services/get_chapel_absent.php?reg_no='+ reg_no,
		async: true,
		crossDomain: true,
		dataType : 'jsonp',
		success : function(data){
				AmbilData1 = data.items;
				$('#chapelabsentlist').empty();
				$.each(AmbilData1, function(index, loaddata) {
					
					if(loaddata.absent_type == 'absent'){
					$('#chapelabsentlist').append('<li >' +					
					'Absent Date : <b <b style="color:red">' + loaddata.absent_date + '</b>, Absent Type : <b style="color:red">' + loaddata.absent_type + '</b>' +
					'</li>');
					}
					else if(loaddata.absent_type == 'late')	{
						$('#chapelabsentlist').append('<li >' +					
					'Absent Date : <b <b style="color:#f7941d">' + loaddata.absent_date + '</b>, Absent Type : <b style="color:#f7941d">' + loaddata.absent_type + '</b>' +
					'</li>');
					}
					else {
						$('#chapelabsentlist').append('<li >' +					
					'Absent Date : <b <b style="color:#0000ff">' + loaddata.absent_date + '</b>, Absent Type : <b style="color:#0000ff">' + loaddata.absent_type + '</b>' +
					'</li>');
					}
					});
					$('#chapelabsentlist').listview('refresh');
				}
	});
});



	