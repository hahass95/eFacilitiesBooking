(function ($, undefined) {
	
	var mc = $.myCalendar = { version: "1.0.0" };
	var mcViews = mc.views = {};

	var defaults = {

		// display
		defaultView: 'month',
		aspectRatio: 1.35,
		header: {
			left: 'title',
			center: '',
			right: 'today prev,next'
		},
		weekends: true,
		weekNumbers: false,
		weekNumberCalculation: 'iso',
		weekNumberTitle: 'W',

		// editing
		//editable: false,
		//disableDragging: false,
		//disableResizing: false,

		allDayDefault: true,
		ignoreTimezone: true,

		// event ajax
		lazyFetching: true,
		startParam: 'start',
		endParam: 'end',

		// time formats
		titleFormat: {
			month: 'MMMM yyyy',
			week: "MMM d[ yyyy]{ '&#8212;'[ MMM] d yyyy}",
			day: 'dddd, MMM d, yyyy'
		},
		columnFormat: {
			month: 'ddd',
			week: 'ddd M/d',
			day: 'dddd M/d'
		},
		timeFormat: { // for event elements
			'': 'h(:mm)t' // default
		},

		// locale
		isRTL: false,
		firstDay: 0,
		monthNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
		monthNamesShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
		dayNames: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
		dayNamesShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
		buttonText: {
			prev: "<span class='fc-text-arrow'>&lsaquo;</span>",
			next: "<span class='fc-text-arrow'>&rsaquo;</span>",
			prevYear: "<span class='fc-text-arrow'>&laquo;</span>",
			nextYear: "<span class='fc-text-arrow'>&raquo;</span>",
			today: 'today',
			month: 'month',
			week: 'week',
			day: 'day'
		},

		// jquery-ui theming
		theme: false,
		buttonIcons: {
			prev: 'circle-triangle-w',
			next: 'circle-triangle-e'
		},

		//selectable: false,
		unselectAuto: true,

		dropAccept: '*',

		handleWindowResize: true

	};

	// right-to-left defaults
	var rtlDefaults = {
		header: {
			left: 'next,prev today',
			center: '',
			right: 'title'
		},
		buttonText: {
			prev: "<span class='fc-text-arrow'>&rsaquo;</span>",
			next: "<span class='fc-text-arrow'>&lsaquo;</span>",
			prevYear: "<span class='fc-text-arrow'>&raquo;</span>",
			nextYear: "<span class='fc-text-arrow'>&laquo;</span>"
		},
		buttonIcons: {
			prev: 'circle-triangle-e',
			next: 'circle-triangle-w'
		}
	};

	$.fn.myCalendar = function (options) {

		// method calling
		if (typeof options == 'string') {
			var args = Array.prototype.slice.call(arguments, 1);
			var res;
			this.each(function () {
				var calendar = $.data(this, 'myCalendar');
				if (calendar && $.isFunction(calendar[options])) {
					var r = calendar[options].apply(calendar, args);
					if (res === undefined) {
						res = r;
					}
					if (options == 'destroy') {
						$.removeData(this, 'myCalendar');
					}
				}
			});
			if (res !== undefined) {
				return res;
			}
			return this;
		}

		options = options || {};

		// would like to have this logic in EventManager, but needs to happen before options are recursively extended
		var eventSources = options.eventSources || [];
		delete options.eventSources;
		if (options.events) {
			eventSources.push(options.events);
			delete options.events;
		}

		options = $.extend(true, {},
			defaults,
			(options.isRTL || options.isRTL === undefined && defaults.isRTL) ? rtlDefaults : {},
			options
		);


		this.each(function (i, _element) {
			var element = $(_element);
			var calendar = new Calendar(element, options, eventSources);
			element.data('myCalendar', calendar); // TODO: look into memory leak implications
			calendar.render();
		});

		return this;
	};

	/* Calendar Utils
-----------------------------------------------------------------------------*/

	function Calendar(element, options, eventSources) {
		var t = this;
		console.log("Inside Calendar(element, options, eventSources)");

		// exports
		t.options = options;
		t.render = render;
		t.destroy = destroy;
		t.refetchEvents = refetchEvents;
		t.reportEvents = reportEvents;
		t.reportEventChange = reportEventChange;
		t.rerenderEvents = rerenderEvents;
		t.changeView = changeView;
		t.select = select;
		t.unselect = unselect;
		t.prev = prev;
		t.next = next;
		t.prevYear = prevYear;
		t.nextYear = nextYear;
		t.today = today;
		t.gotoDate = gotoDate;
		t.incrementDate = incrementDate;
		t.formatDate = function (format, date) { return formatDate(format, date, options) };
		t.formatDates = function (format, date1, date2) { return formatDates(format, date1, date2, options) };
		t.getDate = getDate;
		t.getView = getView;
		t.option = option;
		t.trigger = trigger;


		// imports
		//EventManager.call(t, options, eventSources);
		var isFetchNeeded = t.isFetchNeeded;
		var fetchEvents = t.fetchEvents;

		// locals
		var _element = element[0];
		var header;
		var headerElement;
		var content;
		var tm; // for making theme classes
		var currentView;
		var elementOuterWidth;
		var suggestedViewHeight;
		var resizeUID = 0;
		var ignoreWindowResize = 0;
		var date = new Date();
		var events = [];
		var _dragElement;

		/* Main Rendering
		-----------------------------------------------------------------------------*/



		function render(inc) {
			if (!content) { // if nothing is display, display it now
				console.log("Calling initialRender()");
				initialRender();
			} else if (elementVisible()) {
				calcSize();
				_renderView(inc);
			}
		}

		function initialRender() {
			tm = options.theme ? 'ui' : 'mc';
			console.log("Inside initialRender()");
			element.addClass('mc');
			if (options.isRTL) {
				element.addClass('mc-rtl');
			}
			else {
				element.addClass('mc-ltr');
			}
			if (options.theme) {
				element.addClass('ui-widget');
			}

			content = $("<div class='mc-content'/>")
				.prependTo(element);

			console.log("Calling Header()");
			header = new Header(t, options);
			headerElement = header.render();
			if (headerElement) {
				element.prepend(headerElement);
			}

			console.log("Calling changeView()");
			changeView(options.defaultView);

			if (options.handleWindowResize) {
				$(window).resize(windowResize);
			}

			// needed for IE in a 0x0 iframe, b/c when it is resized, never triggers a windowResize
			if (!bodyVisible()) {
				console.log("Calling lateRender()");
				lateRender();
			}
		}

		// called when we know the calendar couldn't be rendered when it was initialized,
		// but we think it's ready now
		function lateRender() {
			console.log("Inside lateRender()");
			setTimeout(function () { // IE7 needs this so dimensions are calculated correctly
				if (!currentView.start && bodyVisible()) { // !currentView.start makes sure this never happens more than once
					console.log("Calling renderView()");
					renderView();
				}
			}, 0);
		}

		function destroy() {
			if (currentView) {
				trigger('viewDestroy', currentView, currentView, currentView.element);
				currentView.triggerEventDestroy();
			}

			$(window).unbind('resize', windowResize);

			header.destroy();
			content.remove();
			element.removeClass('mc mc-rtl ui-widget');
		}

		function elementVisible() {
			return element.is(':visible');
		}

		function bodyVisible() {
			return $('body').is(':visible');
		}

		/* View Rendering
		-----------------------------------------------------------------------------*/

		function changeView(newViewName) {
			console.log("Inside changeView()");
			if (!currentView || newViewName != currentView.name) {
				console.log("Calling _changeView()");
				_changeView(newViewName);
			}
		}


		function _changeView(newViewName) {
			console.log("Inside _changeView()");
			ignoreWindowResize++;

			if (currentView) {
				trigger('viewDestroy', currentView, currentView, currentView.element);
				unselect();
				currentView.triggerEventDestroy(); // trigger 'eventDestroy' for each event
				freezeContentHeight();
				currentView.element.remove();
				header.deactivateButton(currentView.name);
			}

			header.activateButton(newViewName);

			currentView = new mcViews[newViewName](
				$("<div class='mc-view mc-view-" + newViewName + "' style='position:relative'/>")
					.appendTo(content),
				t // the calendar object
			);

			console("Calling renderView()");
			renderView();
			console.log("Calling unfreezeContentHeight()");
			unfreezeContentHeight();

			ignoreWindowResize--;
		}

		function renderView(inc) {
			console.log("Inside renderView()");
			if (
				!currentView.start || // never rendered before
				inc || date < currentView.start || date >= currentView.end) { // or new date range
				if (elementVisible()) {
					console.log("Calling _renderView()");
					_renderView(inc);
				}
			}
		}

		function _renderView(inc) { // assumes elementVisiable
			console.log("Inside _renderView()");
			ignoreWindowResize++;

			if (currentView.start) { // already been rendered ?
				trigger('viewDestroy', currentView, currentView, currentView.element);
				unselect();
				clearEvents();
			}

			freezeContentHeight();
			currentView.render(date, inc || 0); // the view's render method ONLY renders the skeleton, nothing else
			setSize();
			unfreezeContentHeight();
			(currentView.afterRender || noop)();

			updateTitle();
			updateTodayButton();

			trigger('viewRender', currentView, currentView, currentView.element);
			currentView.trigger('viewDisplay', _element); // deprecated

			ignoreWindowResize--;

			getAndRenderEvents();
		}

		/* Resizing
		-----------------------------------------------------------------------------*/

		function updateSize() {
			if (elementVisible()) {
				unselect();
				clearEvents()
				calcSize();
				setSize();
				renderEvents();
			}
		}

		function calcSize() { // assumes elementVisible
			if (options.contentHeight) {
				suggestedViewHeight = options.contentHeight;
			} else if (option.height) {
				suggestedViewHeight = option.height - (headerElement ? headerElement.height() : 0) - vsides(content);
			} else {
				suggestedViewHeight = Math.round(content.width() / Math.max(options.aspectRatio, .5));
			}
		}

		function setSize() { // assumes elementVisible
			if(suggestedViewHeight === undefined) {
				calcSize(); // for first time
				// NOTE: we don't want to recalculate on every renderView because
				// it could result in oscillating heights due to scrollbars.
			}

			ignoreWindowResize++;
			currentView.setHeight(suggestedViewHeight);
			currentView.setWidth(content.width());
			ignoreWindowResize--;

			elementOuterWidth = element.outerWidth();
		}

		function windowResize() {
			if (!ignoreWindowResize) {
				if (currentView.start) { // view has already been rendered
					var uid = ++resizeUID;
					setTimeout(function () { // add a delay
						if (uid == resizeUID && !ignoreWindowResize && elementVisible()) {
							if (elementOuterWidth != (elementOuterWidth = element.outerWidth())) {
								ignoreWindowResize++; // in case the windowResize callback changes the height
								updateSize();
								currentView.trigger('windowResize', _element);
								ignoreWindowResize--;
							}
						}
					}, 200);
				} else {
					// calendar must have been initialized in a 0x0 iframe that has just been resized
					lateRender();
				}
			}
		}

		/* Event Fetching/Rendering
		-----------------------------------------------------------------------------*/
		// TODO: going forward, most of this stuff should be directly handled by the view

		function refetchEvents() { // can be called as an API method
			clearEvents();
			fetchAndRenderEvents();
		}

		function rerenderEvents(modifiedEventID) { // can be called as an API method
			clearEvents();
			renderEvents(modifiedEventID);
		}

		function renderEvents(modifiedEventID) { // TODO: remove modifiedEventID hack
			if (elementVisible()) {
				currentView.setEventData(events); // for View.js, TODO: unify with renderEvents
				currentView.renderEvents(events, modifiedEventID); // actually render the DOM elements
				currentView.trigger('eventAfterAllRender');
			}
		}

		function clearEvents() {
			currentView.triggerEventDestroy(); // trigger 'eventDestroy' for each event
			currentView.clearEvents(); // actually remove the DOM elements
			currentView.clearEventData(); // for View.js, TODO: unify with clearEvents
		}

		function getAndRenderEvents() {
			if (!options.lazyFetching || isFetchNeeded(currentView.visStart, currentView.visEnd)) {
				fetchAndRenderEvents();
			}
			else {
				renderEvents();
			}
		}

		function fetchAndRenderEvents() {
			fetchEvents(currentView.visStart, currentView.visEnd);
			// ... will call reportEvents
			// ... which will call renderEvents
		}

		// called when event data arrives
		function reportEvents(_events) {
			events = _events;
			renderEvents();
		}

		// called when a single event's data has been changed
		function reportEventChange(eventID) {
			rerenderEvents(eventID);
		}

		/* Header Updating
		-----------------------------------------------------------------------------*/


		function updateTitle() {
			header.updateTitle(currentView.title);
		}

		function updateTodayButton() {
			var today = new Date();
			if (today >= currentView.start && today < currentView.end) {
				header.disableButton('today');
			}
			else {
				header.enableButton('today');
			}
		}

		/* Selection
		-----------------------------------------------------------------------------*/

		function select(start, end, allDay) {
			currentView.select(start, end, allDay === undefined ? true : allDay);
		}

		function unselect() { // safe to be called before renderView
			if (currentView) {
				currentView.unselect();
			}
		}

		/* Date
		-----------------------------------------------------------------------------*/

		function prev() {
			renderView(-1);
		}

		function next() {
			renderView(1);
		}

		function prevYear() {
			addYears(date, -1);
			renderView();
		}

		function nextYear() {
			addYears(date, 1);
			renderView();
		}

		function today() {
			date = new Date();
			renderView();
		}

		function gotoDate(year, month, dateOfMonth) {
			if (year instanceof Date) {
				date = cloneDate(year); // provided 1 argument, a Date
			} else {
				setYMD(date, year, month, dateOfMonth);
			}
			renderView();
		}

		function incrementDate(years, months, days) {
			if (years !== undefined) {
				addYears(date, years);
			}
			if (months !== undefined) {
				addMonths(date, months);
			}
			if (days !== undefined) {
				addDays(date, days);
			}
			renderView();
		}

		function getDate() {
			return cloneDate(date);
		}

		/* Height "Freezing"
		-----------------------------------------------------------------------------*/

		function freezeContentHeight() {
			content.css({
				width: '100%',
				height: content.height(),
				overflow: 'hidden'
			});
		}

		function unfreezeContentHeight() {
			content.css({
				width: '',
				height: '',
				overflow: ''
			});
		}

		/* Misc
		-----------------------------------------------------------------------------*/

		function getView() {
			return currentView;
		}

		function option(name, value) {
			if (value === undefined) {
				return options[name];
			}
			if (name == 'height' || name == 'contentHeight' || name == 'aspectRatio') {
				options[name] = value;
				updateSize();
			}
		}

		function trigger(name, thisObj) {
			if (options[name]) {
				return options[name].apply(
					thisObj || _element,
					Array.prototype.slice.call(arguments, 2)
				);
			}
		}
	}

	/* Header Utils
-----------------------------------------------------------------------------*/

	function Header(calendar, options) {
		var t = this;
		console.log("Inside Header(calendar, options)");

		//exports
		t.render = render;
		t.destroy = destroy;
		t.updateTitle = updateTitle;
		t.activateButton = activateButton;
		t.deactivateButton = deactivateButton;
		t.disableButton = disableButton;
		t.enableButton = enableButton;

		// locals
		var element = $([]);
		var tm;

		function render() {
			tm = options.theme ? 'ui' : 'mc';
			var sections = options.header;
			if (sections) {
				console.log("Calling renderSection()");
				element = $("<table class='mc-header'/>")
					.append(
						$("<tr/>")
							.append(renderSection('left'))
							.append(renderSection('center'))
							.append(renderSection('right'))
						);
				return element;
			}
		}

		function destroy() {
			element.remove();
		}

		function renderSection(position) {
			console.log("Inside renderSection()");
			var e = $("<td class='mc-header-" + position + "'/>");
			var buttonString = options.header[position];
			if (buttonString) {
				$.each(buttonString.split(' '), function (i) {
					if (i > 0) {
						e.append("<span class=mc-header-space'/>");
					}
					var prevButton;
					$.each(this.split(','), function (j, buttonName) {
						if (buttonName == 'title') {
							e.append("<span class='mc-header-title'><h3>&nbsp;</h2></span>");
							if (prevButton) {
								prevButton.addClass(tm + '-corner-right');
							}
							prevButton = null;
						} else {
							var buttonClick;
							if (calendar[buttonName]) {
								buttonClick = calendar[buttonName];
							}
							else if (mcViews[buttonName]) {
								buttonClick = function () {
									button.removeClass(tm + '-state-hover');
									calendar.changeView(buttonName);
								};
							}
							if (buttonClick) {
								var icon = options.theme ? smartProperty(options.buttonIcons, buttonName) : null;
								var text = smartProperty(options.buttonText, buttonName);
								var button = $(
									"<span class='mc-button mc-button-" + buttonName + " " + tm + "-state-default'>" +
									(icon ?
										"<span class='mc-icon-wrap'>" +
											"<span class='ui-icon ui-icon-" + icon + "'/>" +
										"</span>" :
										text
										) +
									"</span>"
									)
									.click(function () {
										if (!button.hasClass(tm + '-state-disabled')) {
											buttonClick();
										}
									})
									.mousedown(function () {
										button
											.not('.' + tm + '-state-active')
											.not('.' + tm + '-state-disabled')
											.addClass(tm + '-state-down');
									})
									.mouseup(function () {
										button.removeClass(tm + '-state-down');
									})
									.hover(
										function () {
											button
												.not('.' + tm + '-state-active')
												.not('.' + tm + '-state-disabled')
												.addClass(tm + 'state-hover');
										},
										function () {
											button
												.removeClass(tm + '-state-hover')
												.removeClass(tm + 'state-down');
										})
										.appendTo(e);
								disableTextSelection(button);
								if (!prevButton) {
									button.addClass(tm + '-corner-left');
								}
								prevButton = button;
							}
						}
					});
					if (prevButton) {
						prevButton.addClass(tm + '-corner-right');
					}
				});
			}
			return e;
		}

		function updateTitle(html) {
			element.find("h3").html(html);
		}

		function activateButton(buttonName) {
			element.find('span .mc-button-' + buttonName)
				.addClass(tm + '-state-active');
		}

		function deactivateButton(buttonName) {
			element.find('span.fc-button-' + buttonName)
				.removeClass(tm + '-state-active');
		}

		function disableButton(buttonName) {
			element.find('span.mc-button-' + buttonName)
				.addClass(tm + '-state-disabled');
		}

		function enableButton(buttonName) {
			element.find('span.mc-button-' + buttonName)
				.removeClass(tm + '-state-disabled');
		}
	}

	fc.sourceNormalizers = [];
	fc.sourceFetchers = [];

	var ajaxDefaults = {
		dataType: 'json',
		cache: false
	};

	var eventGUID = 1;

	/* Misc Utils
-----------------------------------------------------------------------------*/


	//TODO: arraySlice
	//TODO: isFunction, grep ?

	function noop() { }

	function dateCompare(a, b) {
		return a - b;
	}

	function arrayMax(a) {
		return Math.max.apply(Math, a);
	}

	function zeroPad(n) {
		return (n < 10 ? '0' : '') + n;
	}

	function smartProperty(obj, name) { // get a camel-cased/namespaced property of an object
		if (obj[name] !== undefined) {
			return obj[name];
		}
		var parts = name.split(/(?=[A-Z])/),
			i = parts.length - 1, res;
		for (; i >= 0; i--) {
			res = obj[parts[i].toLowerCase()];
			if (res !== undefined) {
				return res;
			}
		}
		return obj[''];
	}

	function htmlEscape(s) {
		return s.replace(/&/g, '&amp;')
			.replace(/</g, '&lt;')
			.replace(/>/g, '&gt;')
			.replace(/'/g, '&#039;')
			.replace(/"/g, '&quot;')
			.replace(/\n/g, '<br />');
	}

	function disableTextSelection(element) {
		element
			.attr('unselectable', 'on')
			.css('MozUserSelect', 'none')
			.bind('selectstart.ui', function () { return false; });
	}

	/*
	function enableTextSelection(element) {
		element
			.attr('unselectable', 'off')
			.css('MozUserSelect', '')
			.unbind('selectstart.ui');
	}
	*/

	function markFirstLast(e) {
		e.children()
			.removeClass('mc-first mc-last')
			.filter(':first-child')
				.addClass('mc-first')
			.end()
			.filter(':last-child')
				.addClass('mc-last');
	}

	function setDayID(cell, date) {
		cell.each(function (i, _cell) {
			_cell.className = _cell.className.replace(/^mc-\w*/, 'mc-' + dayIDs[date.getDay()]);
			// TODO: make a way that doesn't rely on order of classes
		});
	}

	function getSkinCss(event, opt) {
		var source = event.source || {};
		var eventColor = event.color;
		var sourceColor = source.color;
		var optionColor = opt('eventColor');
		var backgroundColor =
			event.backgroundColor ||
			eventColor ||
			source.backgroundColor ||
			sourceColor ||
			opt('eventBackgroundColor') ||
			optionColor;
		var borderColor =
			event.borderColor ||
			eventColor ||
			source.borderColor ||
			sourceColor ||
			opt('eventBorderColor') ||
			optionColor;
		var textColor =
			event.textColor ||
			source.textColor ||
			opt('eventTextColor');
		var statements = [];
		if (backgroundColor) {
			statements.push('background-color:' + backgroundColor);
		}
		if (borderColor) {
			statements.push('border-color:' + borderColor);
		}
		if (textColor) {
			statements.push('color:' + textColor);
		}
		return statements.join(';');
	}

	function applyAll(functions, thisObj, args) {
		if ($.isFunction(functions)) {
			functions = [functions];
		}
		if (functions) {
			var i;
			var ret;
			for (i = 0; i < functions.length; i++) {
				ret = functions[i].apply(thisObj, args) || ret;
			}
			return ret;
		}
	}

	function firstDefined() {
		for (var i = 0; i < arguments.length; i++) {
			if (arguments[i] !== undefined) {
				return arguments[i];
			}
		}
	}



})(jQuery);