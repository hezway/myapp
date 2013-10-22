
$('#academiccalenderpage').live('pageshow', function(event){ 
	var AmbilData1;
	$.ajax({
		type : 'GET',
		url : 'http://localhost/services/get_semester_calender.php',
		async: true,
		crossDomain: true,
		dataType : 'jsonp',
		success : function(data){
				AmbilData1 = data.items;
				$.each(AmbilData1, function(index, loaddata) {
					
					$('#academiccalenderlist').append('<li ><a href="pdf/' + loaddata.academic_calender + '" data-ajax="false" target="_blank">' + loaddata.semester_desc + '</a>' +
					'</li>');					  
					});
					$('#academiccalenderlist').listview('refresh');
				}
	});

});



	