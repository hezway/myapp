
$('#academiccalenderpage').live('pageshow', function(event){ 
	var AmbilData1;
	$.ajax({
		type : 'GET',
		url : 'http://119.82.227.198/~k9576440/services/get_semester_calender.php',
		async: true,
		crossDomain: true,
		dataType : 'jsonp',
		success : function(data){
				AmbilData1 = data.items;
				$.each(AmbilData1, function(index, loaddata) {
					
					$('#academiccalenderlist').append('<li ><a href="#" onclick="window.open(\'http://119.82.227.198/~k9576440/pdf/' + loaddata.academic_calender + '\',\'_blank\',\'location=no\');">' + loaddata.semester_desc + '</a>' +
					'</li>');					  
					});
					$('#academiccalenderlist').listview('refresh');
					
				}
	});

});





	