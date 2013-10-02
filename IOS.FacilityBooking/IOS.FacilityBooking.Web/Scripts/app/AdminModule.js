$(document).ready(function () {
	$(".body_container").height($(window).height() - 70);
	$(".hotelDisplay").height($(".body_container").height());
	$(".manageHotelMenu_container").height($(".body_container").height() - 70);
});


// Menu

var IsCreateHotelOpened = false;

$("#showCreateContainer").click(function () {
	if (IsCreateHotelOpened == false) {
		$("#showCreateContainer").addClass('current_selected');
		$('.createContainer').show("slidedown", "swing", function () {
			$("#nameHotel").focus();
			IsCreateHotelOpened = true;
		});
	} else {
		$("#showCreateContainer").removeClass('current_selected');
		$('.createContainer').hide("slideup", "swing", function () {
			IsCreateHotelOpened = false;
		});
	}
});

$("#closeContainerbtn").click(function () {
	$("#errorName").children("p").remove();
	$("#errorDescription").children("p").remove();
	$("#showCreateContainer").removeClass('current_selected');
	$('.createContainer').hide("slideup", "swing", function () {
		IsCreateHotelOpened = false;
	});
});

var numberOfContainer = 0;
$("#createHotelbtn").click(function () {
	$("#errorName").children("p").remove();
	$("#errorDescription").children("p").remove();

	var errorContent = '';
	if ($("#nameHotel").val() === '' && $("#descriptionHotel").val() === '') {
		errorContent = "<p>The Name Field is Empty.</p>";
		$("#errorName").append(errorContent);
		errorContent = "<p>The Description Field is Empty.</p>";
		$("#errorDescription").append(errorContent);
		return;
	} else if ($("#nameHotel").val() === '') {
		errorContent = "<p>The Name Field is Empty.</p>";
		$("#errorName").append(errorContent);
		return;
	} else if ($("#descriptionHotel").val() === '') {
		errorContent = "<p>The Description Field is Empty.</p>";
		$("#errorDescription").append(errorContent);
		return;
	} 

	$("#showCreateContainer").removeClass('current_selected');
	$('.createContainer').hide("slideup", "swing", function () {
		IsCreateHotelOpened = false;
		var nameOfHotel = $("#nameHotel").val();
		var hotelDescription = $("#descriptionHotel").val();
		var createHotelContent = "<div class='hotelContainer' id='" + numberOfContainer++ + "'>" +
									"<div class='hotelPicture'><img src='../Content/images/hotel.jpg'/></div>" +
										"<p class='hotelPictureName'>" + nameOfHotel + "</div>";
		$(".hotelDisplay").append(createHotelContent);
		$("#nameHotel").val("");
		$("#descriptionHotel").val("");
	});
});

$(".hotelDisplay").on('click', '.hotelContainer', function () {
	var containerNumber = $(this).attr('id');
	var currenthotel = $(this).children('.hotelPictureName').text();
	if (containerNumber > numberOfContainer) {
		alert("ERROR #1 - containerNumber > numberOfContainer");
		return;
	} else {
		$("#createHotelPanel").hide("fade", "fast", function () {
			$("#hotelMenuPanel").show("fade", "fast", function () {
				var createHotelContent = "<p>" + currenthotel + "</p>";
				$("#displayCurrentHotelName").append(createHotelContent);
			});
		});
	}
});

$(".goBack").click(function () {
	$("#displayCurrentHotelName").children("p").remove();
	$("#hotelMenuPanel").hide("fade", "fast", function () {
		$("#createHotelPanel").show("fade", "fast", function () {
		});
	});
});