// Panel Switching

var IsHomePanelShown = true;
var IsRegisterPanelShown = false;
var IsBasicSearchPanelShown = false;
var IsAdvanceSearchPanelShown = false;
var IsChangePasswordPanelShown = false;

// homePanel
$("#showHome").click(function () {
	if (IsRegisterPanelShown == true) {
		$("#registerPanel").hide("fade", "fast", function () {
			$("#homePanel").show("fade", "fast", function () {
			});
		});
		IsHomePanelShown = true;
		IsRegisterPanelShown = false;
	} else if (IsBasicSearchPanelShown == true) {
		$("#basicSearchPanel").hide("fade", "fast", function () {
			$("#homePanel").show("fade", "fast", function () {
			});
		});
		IsHomePanelShown = true;
		IsBasicSearchPanelShown = false;
	} else if (IsAdvanceSearchPanelShown == true) {
		$("#advanceSearchPanel").hide("fade", "fast", function () {
			$("#homePanel").show("fade", "fast", function () {
			});
		});
		IsHomePanelShown = true;
		IsAdvanceSearchPanelShown = false;
	} else if (IsChangePasswordPanelShown == true) {
		$("#changePasswordPanel").hide("fade", "fast", function () {
			$("#homePanel").show("fade", "fast", function () {
			});
		});
		IsHomePanelShown = true;
		IsChangePasswordPanelShown = false;
	}
});

// registerPanel
$("#showRegister").click(function () {
	if (IsHomePanelShown == true) {
		$("#homePanel").hide("fade", "fast", function () {
			$("#registerPanel").show("fade", "fast", function () {
			});
		});
		IsRegisterPanelShown = true;
		IsHomePanelShown = false;
	} else if (IsBasicSearchPanelShown == true) {
		$("#basicSearchPanel").hide("fade", "fast", function () {
			$("#registerPanel").show("fade", "fast", function () {
			});
		});
		IsRegisterPanelShown = true;
		IsBasicSearchPanelShown = false;
	} else if (IsAdvanceSearchPanelShown == true) {
		$("#advanceSearchPanel").hide("fade", "fast", function () {
			$("#registerPanel").show("fade", "fast", function () {
			});
		});
		IsRegisterPanelShown = true;
		IsAdvanceSearchPanelShown = false;
	} else if (IsChangePasswordPanelShown == true) {
		$("#changePasswordPanel").hide("fade", "fast", function () {
			$("#registerPanel").show("fade", "fast", function () {
			});
		});
		IsRegisterPanelShown = true;
		IsChangePasswordPanelShown = false;
	}
});

// basicSearchPanel
$("#showBasicSearch").click(function () {
	if (IsHomePanelShown == true) {
		$("#homePanel").hide("fade", "fast", function () {
			$("#basicSearchPanel").show("fade", "fast", function () {
			});
		});
		IsBasicSearchPanelShown = true;
		IsHomePanelShown = false;
	} else if (IsRegisterPanelShown == true) {
		$("#registerPanel").hide("fade", "fast", function () {
			$("#basicSearchPanel").show("fade", "fast", function () {
			});
		});
		IsBasicSearchPanelShown = true;
		IsRegisterPanelShown = false;
	} else if (IsAdvanceSearchPanelShown == true) {
		$("#advanceSearchPanel").hide("fade", "fast", function () {
			$("#basicSearchPanel").show("fade", "fast", function () {
			});
		});
		IsBasicSearchPanelShown = true;
		IsAdvanceSearchPanelShown = false;
	} else if (IsChangePasswordPanelShown == true) {
		$("#changePasswordPanel").hide("fade", "fast", function () {
			$("#basicSearchPanel").show("fade", "fast", function () {
			});
		});
		IsBasicSearchPanelShown = true;
		IsChangePasswordPanelShown = false;
	}
});

// advanceSearchPanel
$("#showAdvanceSearch").click(function () {
	if (IsHomePanelShown == true) {
		$("#homePanel").hide("fade", "fast", function () {
			$("#advanceSearchPanel").show("fade", "fast", function () {
			});
		});
		IsAdvanceSearchPanelShown = true;
		IsHomePanelShown = false;
	} else if (IsRegisterPanelShown == true) {
		$("#registerPanel").hide("fade", "fast", function () {
			$("#advanceSearchPanel").show("fade", "fast", function () {
			});
		});
		IsAdvanceSearchPanelShown = true;
		IsRegisterPanelShown = false;
	} else if (IsBasicSearchPanelShown == true) {
		$("#basicSearchPanel").hide("fade", "fast", function () {
			$("#advanceSearchPanel").show("fade", "fast", function () {
			});
		});
		IsAdvanceSearchPanelShown = true;
		IsBasicSearchPanelShown = false;
	} else if (IsChangePasswordPanelShown == true) {
		$("#changePasswordPanel").hide("fade", "fast", function () {
			$("#advanceSearchPanel").show("fade", "fast", function () {
			});
		});
		IsAdvanceSearchPanelShown = true;
		IsChangePasswordPanelShown = false;
	}
});

// changePasswordPanel
// advanceSearchPanel
$("#showChangePassword").click(function () {
	if (IsHomePanelShown == true) {
		$("#homePanel").hide("fade", "fast", function () {
			$("#changePasswordPanel").show("fade", "fast", function () {
			});
		});
		IsChangePasswordPanelShown = true;
		IsHomePanelShown = false;
	} else if (IsRegisterPanelShown == true) {
		$("#registerPanel").hide("fade", "fast", function () {
			$("#changePasswordPanel").show("fade", "fast", function () {
			});
		});
		IsChangePasswordPanelShown = true;
		IsRegisterPanelShown = false;
	} else if (IsBasicSearchPanelShown == true) {
		$("#basicSearchPanel").hide("fade", "fast", function () {
			$("#changePasswordPanel").show("fade", "fast", function () {
			});
		});
		IsChangePasswordPanelShown = true;
		IsBasicSearchPanelShown = false;
	} else if (IsAdvanceSearchPanelShown == true) {
		$("#advanceSearchPanel").hide("fade", "fast", function () {
			$("#changePasswordPanel").show("fade", "fast", function () {
			});
		});
		IsChangePasswordPanelShown = true;
		IsAdvanceSearchPanelShown = false;
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