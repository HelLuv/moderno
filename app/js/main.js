$(function () {
	$(".rate-star").rateYo({
		rating: 5.0,
		starWidth: "12px",
		ratedFill: "#ffa726",
		readOnly: true
	});

	$('.product-slider__inner').slick({
		dots: true,
		arrows: false,
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 4
	});

	var mixer = mixitup('.products__inner-box');
});