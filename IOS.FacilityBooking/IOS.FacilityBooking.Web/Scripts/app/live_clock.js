//var clock;
//var time_diff;
//function startclock()
//{
//    clock=document.getElementById('live_clock');
//    server_time = new Date('" + DateTime.Now.ToString("MMMM d, yyyy HH:mm:ss") + "');
//    time_diff=new Date()-server_time;
//    setInterval('live_clock()',1000);
//}

//function runclock()
//{
//    var cDate=new Date();
//    cDate.setTime(cDate.getTime()-time_diff);
//    var curr_hours = cDate.getHours();
//    var curr_mins = cDate.getMinutes();
//    var curr_secs = cDate.getSeconds();
//    curr_hours=(curr_hours < 10)?'0' + curr_hours:curr_hours;
//    curr_mins=(curr_mins < 10)?'0' + curr_mins:curr_mins;
//    curr_secs=(curr_secs < 10)?'0' + curr_secs:curr_secs;
//    clock.innerHTML=curr_hours+':'+curr_mins+':'+curr_secs;
//}

function live_clock() {
	var today = new Date();
	today.setTime(today.getTime() - time_diff);
	var second = today.getSeconds();
	var minute = today.getMinutes();
	var hour = today.getHours();
	var hour24 = today.getHours();
	var ampm = "";

	var day = today.getDay();
	var date = today.getDate();
	var month = today.getMonth();
	var year = today.getFullYear();
	//         alert(today);
	var days = new Array();
	days[0] = "Sun";
	days[1] = "Mon";
	days[2] = "Tue";
	days[3] = "Wed";
	days[4] = "Thu";
	days[5] = "Fri";
	days[6] = "Sat";

	var mns = new Array();
	mns[0] = "Jan";
	mns[1] = "Feb";
	mns[2] = "Mar";
	mns[3] = "Apr";
	mns[4] = "May";
	mns[5] = "Jun";
	mns[6] = "Jul";
	mns[7] = "Aug";
	mns[8] = "Sep";
	mns[9] = "Oct";
	mns[10] = "Nov";
	mns[11] = "Dec";

	if (second < 10) {
		second = "0" + second;
	}

	if (minute < 10) {
		minute = "0" + minute;
	}

	if (hour24 < 12) {
		ampm = "AM";
	}

	else {
		ampm = "PM"
	}

	if (hour24 > 12) {
		hour = hour - 12;
	}

	if (hour24 == 0) {
		hour = 12;
	}

	document.getElementById('live_clock').innerHTML = (hour + ":" + minute + ":" + second + " " + ampm + "  " + days[day] + ', ' + date + ' ' + mns[month] + ' ' + year);
}
