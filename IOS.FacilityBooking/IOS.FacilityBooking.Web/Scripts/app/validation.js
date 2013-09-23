// Real time checking

function validate_form_field($object, condition) {
	var value = $.trim($object.val());
	var alert = $object.parent().siblings(".form-alert");
	var speed = 100;

	if (condition) {
		$object.removeClass('form-field-error');
		$object.addClass('form-field-success');
		$(alert).children(".form-error").fadeOut(speed, function () { $(alert).children(".form-success").delay(speed).fadeIn(speed); });
		return true;
	} else {
		$object.addClass('form-field-error');
		$object.removeClass('form-field-success');
		$(alert).children(".form-success").fadeOut(speed, function () { $(alert).children(".form-error").delay(speed).fadeIn(speed); });
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

$("#registerAgree").click(function () {
	var thisCheck = $(this);
	if (thisCheck.is(":checked")) {
		document.getElementById("registerButton").disabled = false;
		agree_passed = true;
	} else {
		document.getElementById("registerButton").disabled = true;
		agree_passed = false;
	}
});

// Change Password
var oldpassword_passed = false;
var newpassword_passed = false;
var newconfirmpassword_passed = false;

$("#oldpassword").blur(function () {
	var regex = /[^a-zA-Z0-9]/;
	if (validate_form_field($(this), $(this).val() != '' && $(this).val().length >= 8 && regex.test($(this).val()) === false)) {
		oldpassword_passed = true;
	} else {
		oldpassword_passed = false;
	}
});

$("#newpassword").blur(function () {
	var regex = /[^a-zA-Z0-9]/;
	if (validate_form_field($(this), $(this).val() != '' && $(this).val().length >= 8 && regex.test($(this).val()) === false)) {
		newpassword_passed = true;
	} else {
		newpassword_passed = false;
	}
});

$("#newconfirmpassword").blur(function () {
	if (validate_form_field($(this), $(this).val() != '' && $(this).val() === $("#newpassword").val())) {
		newconfirmpassword_passed = true;
	} else {
		newconfirmpassword_passed = false;
	}
});

// Create vee circles
for (var i = 1; i <= $(".vee-container").length; i++) {
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