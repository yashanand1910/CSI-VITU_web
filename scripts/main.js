    $("#profile_gallery").bootslider({
    snapToItem: true
    });

$("#profile_gallery > div:gt(0)").hide();

setInterval(function() { 
  $('#profile_gallery > div:first')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('#profile_gallery');
},  3000);


    $(".burger-menu").click(function () {
	$(this).toggleClass("menu-on");
	});                 
