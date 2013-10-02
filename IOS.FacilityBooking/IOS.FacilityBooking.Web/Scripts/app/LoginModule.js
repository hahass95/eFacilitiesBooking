// Show Terms and Conditions

$('#showtermsNconditions').click(function (event) {
	alert("Set the link to the terms and conditions page");
});

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
                		window.location = json.redirect;
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
                		window.location = json.redirect;
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