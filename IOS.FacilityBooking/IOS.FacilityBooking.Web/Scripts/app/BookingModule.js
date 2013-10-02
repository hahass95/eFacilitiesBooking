// Calendar
$(function () {

	var date = new Date();
	var d = date.getDate();
	var m = date.getMonth();
	var y = date.getFullYear();

	var calendar = $('#calendar').fullCalendar({
		header: {
			left: 'agendaWeek,agendaDay',
			center: 'title',
			right: 'today prev,next'
		},
		height: "550",
		theme: true,
		allDaySlot: false,
		selectable: true,
		selectHelper: true,
		select: function (start, end, allDay) {
			var title = prompt('Event Title:');
			if (title) {
				calendar.fullCalendar('renderEvent',
					{
						title: title,
						start: start,
						end: end,
						allDay: allDay
					},
					true // make the event "stick"
				);
			}
			calendar.fullCalendar('unselect');
		},
		editable: false
		});
});

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

// Panel Switching

var IsMyBookingPanelShown = true;
var IsNewBookingPanelShown = false;
var IsBookingHistoryPanelShown = false;

// myBookingPanel
$("#showMyBooking").click(function () {
	if (IsNewBookingPanelShown == true) {
		$("#showNewBooking").removeClass('current_selected');
		$("#newBookingPanel").hide("fade", "fast", function () {
			$("#showMyBooking").addClass('current_selected');
			$("#myBookingPanel").show("fade", "fast", function () {
			});
		});
		IsMyBookingPanelShown = true;
		IsNewBookingPanelShown = false;
	} else if (IsBookingHistoryPanelShown == true) {
		$("#showBookingHistory").removeClass('current_selected');
		$("#historyBookingPanel").hide("fade", "fast", function () {
			$("#showMyBooking").addClass('current_selected');
			$("#myBookingPanel").show("fade", "fast", function () {
			});
		});
		IsMyBookingPanelShown = true;
		IsBookingHistoryPanelShown = false;
	} 
});

// newBookingPanel
$("#showNewBooking").click(function () {
	if (IsMyBookingPanelShown == true) {
		$("#showMyBooking").removeClass('current_selected');
		$("#myBookingPanel").hide("fade", "fast", function () {
			$("#showNewBooking").addClass('current_selected');
			$("#newBookingPanel").show("fade", "fast", function () {
			});
		});
		IsNewBookingPanelShown = true;
		IsMyBookingPanelShown = false;
	} else if (IsBookingHistoryPanelShown == true) {
		$("#showBookingHistory").removeClass('current_selected');
		$("#historyBookingPanel").hide("fade", "fast", function () {
			$("#showNewBooking").addClass('current_selected');
			$("#newBookingPanel").show("fade", "fast", function () {
			});
		});
		IsNewBookingPanelShown = true;
		IsBookingHistoryPanelShown = false;
	}
});

// historyBookingPanel
$("#showBookingHistory").click(function () {
	if (IsMyBookingPanelShown == true) {
		$("#showMyBooking").removeClass('current_selected');
		$("#myBookingPanel").hide("fade", "fast", function () {
			$("#showBookingHistory").addClass('current_selected');
			$("#historyBookingPanel").show("fade", "fast", function () {
			});
		});
		IsBookingHistoryPanelShown = true;
		IsMyBookingPanelShown = false;
	} else if (IsNewBookingPanelShown == true) {
		$("#showNewBooking").removeClass('current_selected');
		$("#newBookingPanel").hide("fade", "fast", function () {
			$("#showBookingHistory").addClass('current_selected');
			$("#historyBookingPanel").show("fade", "fast", function () {
			});
		});
		IsBookingHistoryPanelShown = true;
		IsNewBookingPanelShown = false;
	}
});


