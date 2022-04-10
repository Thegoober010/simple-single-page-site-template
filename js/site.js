// jQuery for the Single Page Site
$(document).ready(function() {

	var self=this;

	self.scrollDelay=700; // number of ms it takes to scroll to a new page location
	self.headerElementId=$("header:first").attr("id"); // id tag of main site header element

	// scroll page to a specified element
	self.scrollTo = function(el) {
		if (typeof el != "undefined" && el.length) {
			$("html, body").animate({
				scrollTop: $(el).offset().top
			}, self.scrollDelay);
		}
	};

	// update URL hash without the browser jumping to it immediately, as is default behaviour
	self.updateHashWithoutJump = function(hash) {
		if (typeof hash != "undefined" && hash.length) {

			// if hash doesn't start with # character, add it
			if (hash.charAt(0)!="#") {
				hash="#"+hash;
			}

			// for modern browsers, used history to change the hash
			if (typeof history.replaceState != 'undefined') { 
				if (hash=="#"+self.headerElementId) {
					history.replaceState(null, null, ' '); // don't show hash when back to top of page
				} else {
					history.replaceState(null, null, hash);
				}

			// for old browsers, use a workaround to change the hash directly in the URL
			} else { 
				el=$(hash);
				el.attr("id","");				
				window.location.hash=hash;
				el.attr("id",hash.substring(1))	
			}
		}
	};

	// if the page is scrolled down past the primary nav's initial location, or if the view is mobile,
	// then stick the nav to the top of the page; otherwise, unstick it
	self.stickOrUnstickPrimaryNav = function() {
			if ($("nav#primary img.mobile-nav").is(":visible") || $(window).scrollTop()>self.initialPrimaryNavTop) {
				$("nav#primary").addClass("stuck");
				$("header#home").css("margin-bottom", self.primaryNavHeight+"px");
			} else {
				$("nav#primary").removeClass("stuck");
				$("header#home").css("margin-bottom", "0px");
			}
	};

	// update the location bar hash when a section scrolls past the top
	self.updateUrlHash = function() {
		$("body > header, body > section").each(function() {
			var sectionTop=$(this).offset().top;
			var winTop= $(window).scrollTop();
			var delta=Math.abs(sectionTop-winTop);
			if (delta<30) {
				var elId=$(this).attr("id");
				if (typeof elId != "undefined" && elId.length) {
					self.updateHashWithoutJump("#"+elId);
					return;
				}
			}
		});
	}

	// define primary navigation bar behaviour
	self.initPrimaryNav = function() {

		// store the primary nav bar's initial top position, so it can later be 
		// "stuck" to the top of the page in the scroll handler, below
		self.initialPrimaryNavTop=$( window ).height() - $("nav#primary").offset().top;
		self.primaryNavHeight = $("nav#primary").height();

		// on a primary navigation click, scroll to the correct page section if the link is a hash
		// but if it's a URL path, let default behaviour apply instead
		$("nav#primary ul li a").on("click", function(e) {

			var href=$(this).attr("href");
			if (href.charAt(0)=="#") {


				// move the highlight on the nav to the newly clicked item
				$("nav#primary ul li.current").removeClass("current");
				$(this).parent().addClass("current");

				// update the page hash while preventing immediate jump to the section
				self.updateHashWithoutJump(href);

				// do an animated scroll to the requested section
				self.scrollTo(href);

				// if the mobile nav is open, close it
				if ($("nav#primary img.mobile-nav").is(":visible")) {
					$("nav#primary > ul").hide();
				}

			}
		});

		// trigger scroll handler to stick the primary nav if necessary
		self.stickOrUnstickPrimaryNav();

		// handle click/tap on mobile nav hamburger icon
		$("nav#primary img.mobile-nav").on("click", function() {
			$("nav#primary > ul").slideToggle();
		});

	};

	// define page scroll handler behaviour
	self.initScrollHandler = function() {
		$(window).on("scroll", function(e) {
			self.stickOrUnstickPrimaryNav();
			self.updateUrlHash();
		});
	};

	// adjust the primary nav when screen resizes
	self.initResizeHandler = function() {
		$(window).on("resize", function() {
			if ($("nav#primary img.mobile-nav").is(":visible")) {
				$("nav#primary > ul").hide();
			} else {
				$("nav#primary > ul").css("display","inline-block");
			}
		});
	}

	self.initPrimaryNav();
	self.initScrollHandler();
	self.initResizeHandler();

});