$(function () {
    var getValidationSummaryErrors = function ($form) {
        var errorSummary = $form.find('.validation-summary-errors, .validation-summary-valid');
        return errorSummary;
    };

    var displayErrors = function (form, errors) {
        var errorSummary = getValidationSummaryErrors(form)
            .removeClass('validation-summary-valid')
            .addClass('validation-summary-errors');

        var items = $.map(errors, function (error) {
            return '<li>' + error + '</li>';
        }).join('');

        errorSummary.find('ul').empty().append(items);
    };

    var loginFormSubmitHandler = function (e) {
        var $form = $(this);

        // We check if jQuery.validator exists on the form
        if (!$form.valid || $form.valid()) {
            $.post($form.attr('action'), $form.serializeArray())
                .done(function (json) {
                    json = json || {};

                    // In case of success, we redirect to the provided URL or the same page.
                    if (json.success) {
                    	window.location = json.redirect || location.href;
                    } else if (json.errors) {
                    	displayErrors($form, json.errors);
                    }
                })
                .error(function () {
                    displayErrors($form, ['An unknown error happened.']);
                });
        }

        // Prevent the normal behavior since we opened the dialog
        e.preventDefault();
    };

    var registerFormSubmitHandler = function (e) {
    	var $form = $(this); 

    	// We check if jQuery.validator exists on the form
    	if (!$form.valid || $form.valid()) {
    		$.post($form.attr('action'), $form.serializeArray())
                .done(function (json) {
                	json = json || {};

                	// In case of success, we redirect to the provided URL or the same page.
                	if (json.success) {
                		window.location = json.redirect || location.href;
                	} else if (json.errors) {
                		displayErrors($form, json.errors);
                	}
                })
                .error(function () {
                	displayErrors($form, ['An unknown error happened.']);
                });
    	}

    	// Prevent the normal behavior since we opened the dialog
    	e.preventDefault();
    };

    $(document).ajaxComplete(function () {
    	$.loader("close");
    });

    $("#loginButton").click(function () {
    	$.loader({
    		className: "blue-with-image-2",
    		content: ''
    	});
    });

    $("#registerButton").click(function () {
    	$.loader({
    		className: "blue-with-image-2",
    		content: ''
    	});
    });

    $("#showLogOff").click(function () {
    	$("#logoutForm").submit();
    });

$("#loginForm").submit(loginFormSubmitHandler);
$("#registerForm").submit(registerFormSubmitHandler);
});

// Date Picker

$(function () {
	var date = new Date();
	var currentMonth = date.getMonth();
	var currentDate = date.getDate();
	var currentYear = date.getFullYear();
	$("#basicDatePicker").datepicker({
		showButtonPanel: true,
		numberOfMonths: 2,
		minDate: new Date(currentYear, currentMonth, currentDate), showAnim: 'slide',
		dateFormat: "dd/mm/yy"
	});
	$("#startDatePicker").datepicker({
		showButtonPanel: true,
		numberOfMonths: 3,
		minDate: new Date(currentYear, currentMonth, currentDate), showAnim: 'slide',
		dateFormat: "dd/mm/yy",
		onClose: function (selectedDate) {
			$("#endDatePicker").datepicker("option", "minDate", selectedDate);
		}
	});
	$("#endDatePicker").datepicker({
		showButtonPanel: true,
		numberOfMonths: 3,
		minDate: new Date(currentYear, currentMonth, currentDate), showAnim: 'slide',
		dateFormat: "dd/mm/yy",
		onClose: function (selectedDate) {
			$("#startDatePicker").datepicker("option", "maxDate", selectedDate);
		}
	});
});

$.datepicker._gotoToday = function (id) {
	var target = $(id);
	var inst = this._getInst(target[0]);
	if (this._get(inst, 'gotoCurrent') && inst.currentDay) {
		inst.selectedDay = inst.currentDay;
		inst.drawMonth = inst.selectedMonth = inst.currentMonth;
		inst.drawYear = inst.selectedYear = inst.currentYear;
	}
	else {
		var date = new Date();
		inst.selectedDay = date.getDate();
		inst.drawMonth = inst.selectedMonth = date.getMonth();
		inst.drawYear = inst.selectedYear = date.getFullYear();
		// the below two lines are new
		this._setDateDatepicker(target, date);
		this._selectDate(id, this._getDateDatepicker(target));
	}
	this._notifyChange(inst);
	this._adjustDate(target);
}

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


var IsRegisterPanelShown = false;
var IsLoginPanelShown = true;

// registerPanel
$("#showRegister").click(function () {
	if (IsLoginPanelShown == true) {
		$("#loginPanel").hide("clip", function () {
			$("#registerPanel").show("clip", function () {
			});
		});
		IsRegisterPanelShown = true;
		IsLoginPanelShown = false;
	}
});

// loginPanel
$("#showLogin").click(function () {
	if (IsRegisterPanelShown == true) {
		$("#registerPanel").hide("clip", function () {
			$("#loginPanel").show("clip", function () {
			});
		});
		IsLoginPanelShown = true;
		IsRegisterPanelShown = false;
	}
});

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

// Show Terms and Conditions
$(function () {
	$('#showtermsNconditions').click(function (event) {
		var mytext = $('#termsNconditions').val();

		$('<div id="dialog">' + mytext + '</div>').appendTo('body');
		event.preventDefault();

		$("#dialog").dialog({
			width: 1000,
			modal: true,
			title: "Terms and Conditions",
			close: function (event, ui) {
				$("#dialog").hide();
			}
		});
	}); //close click
});
