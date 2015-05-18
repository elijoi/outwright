// JavaScript Document
(function() {

	var app = angular.module('outwright', []);
	
	app.filter("sanitize", ['$sce', function($sce) {
  		return function(htmlCode){
    		return $sce.trustAsHtml(htmlCode);
  		}
	}]);
	
	app.controller('FestivalControler', function() {
		this.works = events;
		this.imgURL = "img/";
	});
	
	var events = [
		{
			name: "Oso Fabuloso & The Bearbacks",
			type: "Workshop",
			popup: "oso",
			images: [
				{
					small: "oso.jpg",
					large: "oso.jpg"
				}
			],
			description: "¡Oso Fabuloso & The BearBacks! is a musical about a gay Latino bear named Oso Fabuloso. He has recently been dumped by a two-timing daddy bear and hasn't been able to cope. He seeks the help of a therapist, Dr. Calvo, in order to deal with his depression. Dr. Calvo convinces him to use his gift of song to sing the blues away. Oso agrees to go on tour with his therapist/guitarist, along with his two best friends/backup singers, Gummy and Grizz. The tour helps Oso deal with love and loss. Oso warns his audiences to take the 'un' out of unrequited love and tells his story directly to the audience in the form of extended monologue and song. The music is steeped in late 20th Century Rhythm and Blues. (70 Minutes)",
			credits: [
				"Book & Lyrics: J. Julian Christopher",
				"Music: Steve Sclafani",
				"Direction: Jeremy Karafin"
			]
		},
		{
			name: "The Taming of the Shrew",
			type: "Production",
			popup: "shrew",
			images: [
				{
					small: "shrew250.jpg",
					large: "shrew.jpg"
				}
			],
			description: "Ops Fest continues it's tradition of gender-bent OUTwright performances, this time with Taming of the Shrew. Bianca is beset with suitors, but none of them are 'her type' exactly. She wants someone.... softer. Besides, she's not allowed to marry til her older brother, Kat, gets married, and he's driving off all suitors with his… ehhhem… shrewish demeanor. They need a savior. Is Petruchio the man to tame the wild Kat?",
			credits: []
		},
		{
			name: "How to be a Sissy",
			type: "Workshop",
			popup: "sissy",
			images: [
				{
					small: "sissy250.jpg",
					large: "sissy.jpg"
				}
			],
			description: "<p>Spend an hour with Percy Q. Shun. He will be your teacher and host for this evening's lessons on being the best sissy you can be. If you remember growing up in the 80's, or if you are a sissy in training who has never wore a mullet, the lessons Percy has to teach you will help you live up to your full sissy potential. Along the way, Brian pops in to tell us what life was like as a sissy when he was growing up. This one-man-show is a confection that might pull at your heart strings, but if Percy has his way, you will walk out with a more confident swish in your step.</p><p>Brian Haimbach was recently seen on stage singing the role of Harvey Milk with the Portland Gay Men's Chorus. A recent transplant from South Carolina (where sissies are not treated as nicely as they are in Oregon), he is the head of theatre at Lane Community College. Since moving to town he has worked with Oregon Contemporary Theatre on numerous projects. He and his partner are busy making Eugene a gayer place to live.</p>",
			credits: [
				"Written and Performed by Brian Haimbach"
			]
		},
		{
			name: "They Them Their",
			type: "Reading",
			popup: "they",
			images: [
				{
					small: "them250.jpg",
					large: "them250.jpg"
				}
			],
			description: "Faeris, a queer youth, is about to age out of the LGBTQ youth center they attend. A rebellious, artistically inclined, genderqueer and formerly houseless, they must face their demons as they move into adulthood. Through Faeris' romantic travails with fellow youth Jordan, their contentious relationship with the younger Raven, and their power struggles with center coordinator James, we see how the center, in its own way, provides the characters the sort of families they never had.",
			credits: [
				"By: Leela Ginelle"
			]
		},
		{
			name: "Reverberation",
			type: "Reading",
			popup: "reverb",
			images: [
				{
					small: "reverb.jpg",
					large: "reverb.jpg"
				}
			],
			description: "",
			credits: [
				"By: Matthew Lopez",
				"Direction: Thomas Chapman"
			]
		},
		{
			name: "Almost Home",
			type: "reading",
			popup: "home",
			images: [
				{
					small: "home.jpg",
					large: "home.jpg"
				}
			],
			description: "<p>When Phoebe's partner leaves, Phoebe is left with Wendy's teenage daughter Jody. As Phoebe tries to launch her photography show, she and Jodi awkwardly struggle to understand who they are to one another. Almost home is a drama/comedy about the search for a place to belong.</p><p>Meryl Cohn's play, REASONS TO LIVE was named a Favorite Play of 2012 by The Cape Cod Times. Awards include The 2015 Eventide Arts Jeremiah Kaplan Award, The ATHE Jane Chambers Playwriting Award, finalist for the MCC Playwriting Award, and semifinalist (twice) for the O'Neill National Playwriting Award. Meryl's work has been produced or developed at The Skylight Theatre, The Open Fist Theatre, N.Y. International Fringe Festival, The Provincetown Theatre, W.H.A.T., The Soho Playhouse, Counter Productions, The Road Theatre, and Smith College, among others.</p><p>Meryl earned her MFA in Dramatic Writing at NYU's Tisch School of the Arts. She is a founding member of the Northampton Playwrights Lab and member of the Dramatists Guild. She also writes non-fiction and is the author of the humor book DO WHAT I SAY: MS. BEHAVIOR'S GUIDE TO GAY AND LESBIAN ETIQUETTE, published by Houghton Mifflin. Her first short story was recently selected as a Glimmer Train finalist. Meryl is married to the novelist MB Caschetta. She can be reached at merylc777@gmail.com.</p>",
			credits: ["By: Meryl Cohn"]
		}	
		
	]
	
})();


var map;
$( document ).ready(function() {
	
	$(".section").hide();
	$("#about").show();
	
    $(".navbar-nav li").click( function() {
		$(".section").hide();
		$(".navbar-nav li").removeClass("active");
		$(this).addClass("active");
		var id="#" + $(this).attr("id").split("_")[1];
		$(id).show();
		if (id == "#location") {
			initialize_map();
		}
	});
	
	$(".event").click( function() {
		if ($(this).hasClass("partybox")) {
			window.open($(this).attr("rel"));
		} else {
			var href = "#" + $(this).attr("rel") + "_popup";
			$.colorbox({width:"650px", inline:true, href: href});			
		}
	});
	
	$(".work").hover( 
		function() {$(this).css("opacity", ".6");}, 
		function() {$(this).css("opacity", "1");}
	);
	
	$(".work").click( function() {
		var href = "#" + $(this).attr("rel") + "_popup";
		$.colorbox({width:"650px", inline:true, href: href});
	});

});

  function initialize_map() {
	var myLatlng = new google.maps.LatLng(45.505239, -122.654428);
	var mapCanvas = document.getElementById('map_canvas');
	var mapOptions = {
	  center: myLatlng,
	  zoom: 16,
	  mapTypeId: google.maps.MapTypeId.ROADMAP
	}
	map = new google.maps.Map(mapCanvas, mapOptions)
	  var marker = new google.maps.Marker({
		  position: myLatlng,
		  map: map,
		  title: 'Funhouse Lounge!'
	  });	
  }
  