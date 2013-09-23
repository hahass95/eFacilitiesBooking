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
                	} else {
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