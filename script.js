$('.page-scroll').on('click', function(e){
	
	var tujuan = $(this).attr('href');

	var elemenTujuan = $(tujuan);

	$('body').animate({
		scrollTop: elemenTujuan.offset().top - 50
	});

	e.preventDefault();
});


$(window).scroll(function(){
	var wScroll = $(this).scrollTop();

	$('.jumbotron img').css({
		'transform' : 'translate(0px, '+ wScroll/4 +'%)'
	});

	$(window).scroll(function(){
	var wScroll = $(this).scrollTop();

	$('.jumbotron h1').css({
		'transform' : 'translate(0px, '+ wScroll/2 +'%)'
	});

	$(window).scroll(function(){
	var wScroll = $(this).scrollTop();

	$('.jumbotron p').css({
		'transform' : 'translate(0px, '+ wScroll/1.2 +'%)'
	});
});