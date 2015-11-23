// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .

$(document).ready(function(){
	var pagebody = $("#pagebody");
	var themenu  = $("#navmenu");
	var topbar   = $("#toolbarnav");
	var content  = $("#content");
	var viewport = {
    	width  : $(window).width(),
    	height : $(window).height()
	};
	// retrieve variables as
	// viewport.width / viewport.height

	function openme() {
		$(function () {
		    topbar.animate({
		       left: "200px"
		    }, { duration: 200, queue: false });
		    pagebody.animate({
		       left: "200px"
		    }, { duration: 200, queue: false });
		});
	}

	function closeme() {
		var closeme = $(function() {
	    	topbar.animate({
	            left: "0px"
	    	}, { duration: 200, queue: false });
	    	pagebody.animate({
	            left: "0px"
	    	}, { duration: 200, queue: false });
		});
	}

	// checking whether to open or close nav menu
	$("#menu-btn").live("click", function(e){
		e.preventDefault();
		var leftval = pagebody.css('left');

		if(leftval == "0px") {
			openme();
		}
		else {
			closeme();
		}
	});

	// loading page content for navigation
	$("a.navlink").live("click", function(e){
		e.preventDefault();
		var linkurl     = $(this).attr("href");
		var linkhtmlurl = linkurl.substring(1, linkurl.length);

		var imgloader   = '<center style="margin-top: 30px;"><img src="img/preloader.gif" alt="loading..." /></center>';

		closeme();

		$(function() {
			topbar.css("top", "0px");
			window.scrollTo(0, 1);
		});

		content.html(imgloader);

		setTimeout(function() { content.load(linkhtmlurl, function() { /* no callback */ }) }, 1200);
	});
});

$(function() {
    var input = $('input[type=text]');

    input.focus(function() {
         $(this).val('');
    }).blur(function() {
         var el = $(this);

         /* use the elements title attribute to store the
            default text - or the new HTML5 standard of using
            the 'data-' prefix i.e.: data-default="some default" */
         if(el.val() == '')
             el.val(el.attr('title'));
    });
 });
