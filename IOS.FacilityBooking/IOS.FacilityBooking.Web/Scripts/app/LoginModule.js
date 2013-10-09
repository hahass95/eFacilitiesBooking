// Show Terms and Conditions

$('#showtermsNconditions').click(function (event) {
	alert("Set the link to the terms and conditions page");
});

var IsRegisterPanelShown = false;
var IsLoginPanelShown = true;

// registerPanel
$("#showRegister").click(function () {
	$(".ui-state-error").hide("fade");
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
	$(".errorMessage").hide("fade");
	$(".successMessage").hide("fade");
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
		$.isLoading({ text: "Logging In... " });
		var $form = $(this);

		// We check if jQuery.validator exists on the form
		if (!$form.valid || $form.valid()) {
			$.post($form.attr('action'), $form.serializeArray())
                .done(function (json) {
                	json = json || {};

                	// In case of success, we redirect to the provided URL or the same page.
                	if (json.success) {
                		setTimeout(function () {
                			$.isLoading("hide");
                			window.location = json.redirect;
                		}, 1000);
                	} else if (json.errors) {
                		setTimeout(function () {
                			$(".ui-state-error").show("slide");
                			$("#loginName").focus();
                			$.isLoading("hide");
                		}, 1000);
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
		$.isLoading({ text: "Signing Up... " });
		var $form = $(this);

		// We check if jQuery.validator exists on the form
		if (!$form.valid || $form.valid()) {
			$.post($form.attr('action'), $form.serializeArray())
                .done(function (json) {
                	json = json || {};

                	// In case of success, we redirect to the provided URL or the same page.
                	if (json.success) {
                		setTimeout(function () {
                			$.isLoading("hide");
                			window.location = json.redirect;
                		}, 1000);
                	} else if (json.errors) {
                		setTimeout(function () {
                			if (username_passed == false) {
                				var thisform = $("#username");
                				var regex = /[^a-zA-Z0-9]/;
                				validate_form_field(thisform, thisform.val() != '' && regex.test(thisform.val()) === false);
                			}
                			if (password_passed == false) {
                				var thisform = $("#registerpassword");
                				var regex = /[^a-zA-Z0-9]/;
                				validate_form_field(thisform, thisform.val() != '' && thisform.val().length >= 8 && regex.test(thisform.val()) === false);
                			}
                			if (password_confirm_passed == false) {
                				var thisform = $("#registerconfirmpassword");
                				validate_form_field(thisform, thisform.val() != '' && thisform.val() === $("#password").val());
                			}
                			if (email_passed == false) {
                				var thisform = $("#email");
                				validate_form_field(thisform, thisform.val() != '' && validateEmail(thisform.val()));
                			}
                			if (email_confirm_passed == false) {
                				var thisform = $("#confirmemail");
                				validate_form_field(thisform, thisform.val() != '' && thisform.val() === $("#email").val());
                			}
                			if (address_passed == false) {
                				var thisform = $("#address");
                				validate_form_field(thisform, thisform.val() != '')
                			}
                			if (phonenumber_passed == false) {
                				var thisform = $("#phonenumber");
                				var regex = /[9|8][0-9]{7}$/;
                				validate_form_field(thisform, thisform.val() != '' && regex.test(thisform.val()) !== false)
                			}
                			$.isLoading("hide");
                		}, 1000);
                	}
                })
                .error(function () {
                	displayErrors($form, ['An unknown error happened.']);
                });
		}

		// Prevent the normal behavior since we opened the dialog
		e.preventDefault();
	};

	$("#showLogOff").click(function () {
		$("#logoutForm").submit();
	});

	$("#loginForm").submit(loginFormSubmitHandler);
	$("#registerForm").submit(registerFormSubmitHandler);
});

// Real time checking

function validate_form_field($object, condition) {
	var value = $.trim($object.val());
	var alert = $object.parent().siblings(".form-alert");
	var speed = 100;

	if (condition) {
		$(alert).children(".errorMessage").fadeOut(speed, function () { $(alert).children(".successMessage").delay(speed).fadeIn(speed); });
		return true;
	} else {
		$(alert).children(".successMessage").fadeOut(speed, function () { $(alert).children(".errorMessage").delay(speed).fadeIn(speed); });
		return false;
	}
}

// Register
var username_passed = false;
var password_passed = false;
var password_confirm_passed = false;
var email_passed = false;
var email_confirm_passed = false;
var address_passed = false;
var phonenumber_passed = false;
var agree_passed = false;
var date_passed = false;
var speed = 500;

$("#username").blur(function () {
	var regex = /[^a-zA-Z0-9]/;
	if (validate_form_field($(this), $(this).val() != '' && regex.test($(this).val()) === false)) {
		username_passed = true;
	} else {
		username_passed = false;
	}
});

$("#registerpassword").blur(function () {
	var regex = /[^a-zA-Z0-9]/;
	if (validate_form_field($(this), $(this).val() != '' && $(this).val().length >= 8 && regex.test($(this).val()) === false)) {
		password_passed = true;
	} else {
		password_passed = false;
	}
});

$("#registerconfirmpassword").blur(function () {
	if (validate_form_field($(this), $(this).val() != '' && $(this).val() === $("#registerpassword").val())) {
		password_confirm_passed = true;
	} else {
		password_confirm_passed = false;
	}
});

function validateEmail(email) {
	var re = /^(([^<>()\[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
	return email.match(re);
}

$("#email").blur(function () {
	if (validate_form_field($(this), $(this).val() != '' && validateEmail($(this).val()))) {
		email_passed = true;
	} else {
		email_passed = false;
	}
});

$("#confirmemail").blur(function () {
	if (validate_form_field($(this), $(this).val() != '' && $(this).val() === $("#email").val())) {
		email_confirm_passed = true;
	} else {
		email_confirm_passed = false;
	}
});

$("#address").blur(function () {
	if (validate_form_field($(this), $(this).val() != '')) {
		address_passed = true;
	} else {
		address_passed = false;
	}
});

$("#phonenumber").blur(function () {
	var regex = /[9|8][0-9]{7}$/;
	if (validate_form_field($(this), $(this).val() != '' && regex.test($(this).val()) !== false)) {
		phonenumber_passed = true;
	} else {
		phonenumber_passed = false;
	}
});

// Create vee circles
for (var i = 1; i <= $(".successMessage").length; i++) {
	var paper = Raphael(document.getElementById('circle-' + i), 17, 17);
	var c = paper.circle(9, 9, 8);
	c.attr({
		fill: '120-#1c8c10-#40d830',
		'stroke-linecap': 'round',
		"stroke-width": 0
	});

	var c = paper.path("M10,11.7s20,-5,-10,-7");

	c.scale(0.58, 0.58);

	c.attr({
		stroke: '#fff',
		'stroke-width': 1.5,
		'stroke-linecap': 'round',
		rotation: 120
	});

	var c = paper.path("M11,14s29,-9,-15,-10");

	c.scale(0.4, 0.4);

	c.attr({
		stroke: '#fff',
		'stroke-width': 2,
		'stroke-linecap': 'round',
		rotation: 120
	});
}