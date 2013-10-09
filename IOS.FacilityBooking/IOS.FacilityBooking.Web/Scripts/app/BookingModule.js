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

$(function () {
	var startingTime = 8; // 0 - 23
	var endingTime = 20; // 0 - 23
	var numberOfRooms = 100;
	var contentHeight = 480;
	var widthOfEachCol = 91 / (endingTime - startingTime + 1);
	var currentWidth = $(".newBookingPanel_calendar_container").width();
	var axisWidth = 60;
	var containerToAppend = $("#mcalendar");
	var monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
	var dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
	var d = new Date();
	var currentDay = d.getDay();
	var currentDate = d.getDate();
	var currentMonth = d.getMonth();
	var currentYear = d.getFullYear();

	function findDate(upORdown) {

		function updateday(date, upORdown) {
			if(upORdown) {
				if (date == 6) {
					date = 0;
				} else {
					date += 1;
				}
			} else if(!upORdown) {
				if(date == 0) {
					date = 6;
				} else {
					date -= 1;
				}
			}
			switch (date) {
				case 0: currentDay = 0; return;
				case 1: currentDay = 1; return;
				case 2: currentDay = 2; return;
				case 3: currentDay = 3; return;
				case 4: currentDay = 4; return;
				case 5: currentDay = 5; return;
				case 6: currentDay = 6; return;
			}
		};

		function updateMonthNYear(month, upORdown) {
			if (upORdown) {
				if (month == 11) {
					currentMonth = 0;
					currentYear += 1;
				} else {
					currentMonth += 1;
				}
				updateday(currentDay, upORdown);
			} else if (!upORdown) {
				if (month == 0) {
					currentMonth = 11;
					currentYear -= 1;
				} else {
					currentMonth -= 1;
				}
				updateday(currentDay, upORdown);
			}
		};

		
		
		function updateDate(date, month, year, upORdown) {
			if (upORdown) {
				if ((month == 3 || month == 5 || month == 8 || month == 10) && date == 30) {
					currentDate = 1;
					updateMonthNYear(month);
				} else if ((month == 0 || month == 2 || month == 4 || month == 6 || month == 7 || month == 9 || month == 11) && date == 31) {
					currentDate = 1;
					updateMonthNYear(month, upORdown);
				} else if (month == 1) {
					if (year % 4 == 0 && (year % 100 != 0 || year % 400 == 0) && date == 29) {
						currentDate = 1;
						updateMonthNYear(month, upORdown);
					} else if (!(year % 4 == 0 && (year % 100 != 0 || year % 400 == 0)) && date == 28) {
						currentDate = 1;
						updateMonthNYear(month, upORdown);
					} else {
						currentDate += 1;
						updateday(currentDay, upORdown);
					}
				} else {
					currentDate += 1;
					updateday(currentDay, upORdown);
				}
			} else if (!upORdown) {
				if ((month == 3 || month == 5 || month == 7 || month == 8 || month == 10) && date == 1) {
					currentDate = 31;
					updateMonthNYear(month, upORdown);
				} else if ((month == 0 || month == 2 || month == 4 || month == 6 || month == 9 || month == 11) && date == 1) {
					currentDate = 30;
					updateMonthNYear(month, upORdown);
				} else if (month == 1) {
					if (year % 4 == 0 && (year % 100 != 0 || year % 400 == 0) && date == 1) {
						currentDate = 29;
						updateMonthNYear(month, upORdown);
					} else if (!(year % 4 == 0 && (year % 100 != 0 || year % 400 == 0)) && date == 1) {
						currentDate = 28;
						updateMonthNYear(month, upORdown);
					} else {
						currentDate -= 1;
						updateday(currentDay, upORdown);
					}
				} else {
					currentDate -= 1;
					updateday(currentDay, upORdown);
				}
			}
		};

		if (upORdown == 2) {
			currentDay = d.getDay();
			currentDate = d.getDate();
			currentMonth = d.getMonth();
			currentYear = d.getFullYear();
		}
		else if (upORdown) {
			updateDate(currentDate, currentMonth, currentYear, upORdown);
		} else if (!upORdown) {
			updateDate(currentDate, currentMonth, currentYear, upORdown);
		}
			
		return dayNames[currentDay] + ", " + monthNames[currentMonth] + " " + currentDate + ", " + currentYear;
	}

	renderHeader(findDate(2));
	renderContentHeader();
	renderMainContent();
	
	function renderHeader(dateToShow) {
		var calendar_header = "<table class='myCalendar_header'>" +
								"<tr>" +
									"<td class='myCalendar_header_left'>" +
										"<span class='myCalendar_header_button myCalendar_week_button'>Week</span>" +
										"<span class='myCalendar_header_button myCalendar_day_button current_active'>Day</span>" +
									"</td>" +
									"<td class='myCalendar_header_center'>" +
										"<h6>" + dateToShow + "</h6>" +
									"</td>" +
										"<td class='myCalendar_header_right'>" +
										"<span class='myCalendar_header_button myCalendar_today_button'>Today</span>" +
										"<span class='myCalendar_spacing'></span>" +
										"<span class='myCalendar_header_button myCalendar_prev_button glyphicon glyphicon-chevron-left'></span>" +
										"<span class='myCalendar_header_button myCalendar_next_button glyphicon glyphicon-chevron-right'></span>" +
									"</td>" +
								"</tr>" +
								"</table>";
		containerToAppend.append(calendar_header); // Append Header
	};

	function renderContentHeader() {

		var calendarContent = "<div class='myCalendar_content' style='position:relative;'/>"
		containerToAppend.append(calendarContent);

		containerToAppend = $(".myCalendar_content"); // Move into the content
		var calendarView = "<div class='myCalendar_view myCalendar_dayView' style='position:relative;'/>"
		containerToAppend.append(calendarView);

		containerToAppend = $(".myCalendar_view"); // Move into the view and do the header
		var calendarContentTable = "<table style='width:100%' class='myCalendar_content_table' cellspacing='0'>" +
									"<thead>" +
										"<tr>" +
											"<th class='myCalendar_axis ui-widget-header'>&nbsp;</th>";

		function AMPM(i) {
			if (i >= 0 && i < 12) {
				return "am";
			} else {
				return "pm";
			}
		};

		function writeTime(i) {
			if (i > 12) {
				switch (i) {
					case 13: return 1;
					case 14: return 2;
					case 15: return 3;
					case 16: return 4;
					case 17: return 5;
					case 18: return 6;
					case 19: return 7;
					case 20: return 8;
					case 21: return 9;
					case 22: return 10;
					case 23: return 11;
				}
			} else if (i == 0) {
				return 12
			} else {
				return i;
			}
		};

		for (var i = startingTime, colNum = 0; i < endingTime + 1; i++, colNum++) {
			calendarContentTable += "<th class='myCalendar_col" + colNum + " ui-widget-header' style='width:" + widthOfEachCol + "%;'>" + writeTime(i) + AMPM(i) + "</th>";
		};
		calendarContentTable += "<th class='myCalendar_gutter ui-widget-header' style='width:9px;'>&nbsp;</th></tr></thead>";

		calendarContentTable += "<tbody>" + // Doing the body
									"<tr>" +
										"<th class='myCalendar_axis ui-widget-header'>&nbsp;</th>";
		for (var i = startingTime, colNum = 0; i < endingTime + 1; i++, colNum++) {
			calendarContentTable += "<td class='ui-widget-content myCalendar_col" + colNum + "'>" +
										"<div style='height:" + contentHeight + "px'>" +
											"<div class='myCalendar_dayContent'>" +
												"<div style=​'position:​relative'>​&nbsp;​</div>​" +
											"</div>" +
										"</div>"
									"</td>";
		};
		calendarContentTable += "<td class='myCalendar_gutter ui-widget-content' style='width:9px;'>&nbsp</td></tr></tbody></table>";
		containerToAppend.append(calendarContentTable);
	};

	function renderMainContent() {

		// Doing the main content of the table
		var calendarMainContent = "<div style='position: absolute; z-index: 2; left: 0px; width: 100%; top: 24px;'>" +
									"<div  class='myCalendar_scroll'style='position: absolute; width: 100%; overflow-x: hidden; overflow-y: auto; height:" + contentHeight + "px;'>" +
										"<div style='position: relative; width: 100%; overflow: hidden;'>" + 
											"<table class='myCalendar_slots' style='width: 100%;' cellspacing='0'>" +
												"<tbody>";
		for (var i = 0; i < numberOfRooms; i++) {
			calendarMainContent += "<tr class='roomNumber-" + i + "'>" +
										"<th class='myCalendar_axis ui-widget-header' style='height: 50px;width:73px;' >Room " + (i + 1) + "</th>";
			for (var j = startingTime, colNum = 0; j < endingTime + 1; j++, colNum++) {
				
				calendarMainContent += "<td class='/*ui-widget-content*/ myCalendar_col" + colNum + "' style='background: #fff; border-left: 1px solid #dddddd; border-bottom: 1px solid #dddddd;'></td>";
			};
			
		};
		calendarMainContent += "</tr>";
		containerToAppend.append(calendarMainContent);
	};

	$(".myCalendar_next_button").click(function () {
		$(".myCalendar_header_center").children('h6').html(findDate(true));
	});

	$(".myCalendar_prev_button").click(function () {
		$(".myCalendar_header_center").children('h6').html(findDate(false));
	});

	$(".myCalendar_today_button").click(function () {
		$(".myCalendar_header_center").children('h6').html(findDate(2));
	});

	//$(".myCalendar_slots tbody").selectable({ filter: 'td' });

	var active = false;
	var toRight = false;
	var currentRoom = '';
	var distanceBetweenFirst = 0;
	var numberOfItems = 0;

	//(function ($) {
	//	$.fn.classes = function (callback) {
	//		var classes = [];
	//		$.each(this, function (i, v) {
	//			var splitClassName = v.className.split(/\s+/);
	//			for (var j in splitClassName) {
	//				var className = splitClassName[j];
	//				if (-1 === classes.indexOf(className)) {
	//					classes.push(className);
	//				}
	//			}
	//		});
	//		if ('function' === typeof callback) {
	//			for (var i in classes) {
	//				callback(classes[i]);
	//			}
	//		}
	//		return classes;
	//	};
	//})(jQuery);

	//function checkSlot(element) {
	//	var currentClass = element.classes()[1];
	//	var currentSlot = 0;
	//	switch (currentClass) {
	//		case 'myCalendar_col0': currentSlot = 0; break;
	//		case 'myCalendar_col1': currentSlot = 1; break;
	//		case 'myCalendar_col2': currentSlot = 2; break;
	//		case 'myCalendar_col3': currentSlot = 3; break;
	//		case 'myCalendar_col4': currentSlot = 4; break;
	//		case 'myCalendar_col5': currentSlot = 5; break;
	//		case 'myCalendar_col6': currentSlot = 6; break;
	//		case 'myCalendar_col7': currentSlot = 7; break;
	//		case 'myCalendar_col8': currentSlot = 8; break;
	//		case 'myCalendar_col9': currentSlot = 9; break;
	//		case 'myCalendar_col10': currentSlot = 10; break;
	//		case 'myCalendar_col11': currentSlot = 11; break;
	//		case 'myCalendar_col12': currentSlot = 12; break;
	//		default: currentSlot = -1;
	//	}
	//	return currentSlot;
	//}
		
	//function getXPos(element) {
	//	var currentSlot = checkSlot(element);
	//	switch (currentSlot) {
	//		case -1: alert("ERROR! Code: 123");
	//		case 0: return 77;
	//		case 1: return 147;
	//		case 2: return 217;
	//		case 3: return 287;
	//		case 4: return 357;
	//		case 5: return 427;
	//		case 6: return 497;
	//		case 7: return 567;
	//		case 8: return 637;
	//		case 9: return 707;
	//		case 10: return 777;
	//		case 11: return 847;
	//		case 12: return 917;
	//	}
	//}

	$(".myCalendar_slots td").mousedown(function (ev) {
		if (ev.which == 1) {
			currentRoom = $(this).parent().attr("class");
			active = true;
			$(".selected").removeClass("selected"); // clear previous selection
			$(".recent").removeClass("recent"); // clear previous selection
			$(".first").removeClass("first"); // clear previous selection
			ev.preventDefault(); // this prevents text selection from happening
			$(this).addClass("selected recent first");
			distanceBetweenFirst = 0;
			numberOfItems = 1;
			//var xPos = getXPos($(this));
			//var height = $(this).outerHeight();
			//var width = $(this).outerWidth();
			//$("#selection").css({ height: height, width: width, left: xPos }).show();
		}
	});

	$(".myCalendar_slots td").mousemove(function (ev) {
		if ($(this).prev().hasClass("recent") && active && $(this).parent().attr("class") === currentRoom) {
			if (distanceBetweenFirst < 0) {
				$(this).prev().removeClass("recent selected");
				$(this).addClass("recent");
				numberOfItems++;
			} else {
				$(this).prev().removeClass("recent");
				$(this).addClass("recent selected");
				numberOfItems++;
			}
			distanceBetweenFirst++;
			
		} else if ($(this).next().hasClass("recent") && active && $(this).parent().attr("class") === currentRoom) {
			if (distanceBetweenFirst > 0) {
				$(this).next().removeClass("recent selected");
				$(this).addClass("recent");
				numberOfItems--;
			} else {
				$(this).next().removeClass("recent");
				$(this).addClass("selected recent");
				numberOfItems++;
			}
			distanceBetweenFirst--;
		}
	});

	$(".myCalendar_slots td").mouseup(function (ev) {
		if (ev.which == 1) {
			active = false;
			$('div.modal').omniWindow() // create modal
				.trigger('show'); // and show it
		}
	});
});

