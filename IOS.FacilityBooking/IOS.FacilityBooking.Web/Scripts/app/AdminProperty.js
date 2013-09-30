$(document).ready(function () {
	$(".body_container").height($(window).height() - 70);
	$(".hotelDisplay").height($(".body_container").height() - 20);
});


// Menu

var IsCreateHotelOpened = false;

$("#showCreateContainer").click(function () {
	if (IsCreateHotelOpened == false) {
		$("#showCreateContainer").addClass('current_selected');
		$('.createContainer').show("slidedown", "swing", function () {
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
	$("#showCreateContainer").removeClass('current_selected');
	$('.createContainer').hide("slideup", "swing", function () {
		IsCreateHotelOpened = false;
	});
});

$("#createHotelbtn").click(function () {
	if ($("#nameHotel").val() === '') {
		return;
	} else if ($("#descriptionHotel").val() === '') {
		return;
	}
	$("#showCreateContainer").removeClass('current_selected');
	$('.createContainer').hide("slideup", "swing", function () {
		IsCreateHotelOpened = false;
		var nameOfHotel = $("#nameHotel").val();
		var hotelDescription = $("#descriptionHotel").val();
		var createHotelContent = "<div class='hotelContainer'><div class='hotelPicture'><img src='../Content/images/hotel.jpg'/></div></div>";
		$(".hotelDisplay").append(createHotelContent);
		console.log(createHotelContent);
	});
});

