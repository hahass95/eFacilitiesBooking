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