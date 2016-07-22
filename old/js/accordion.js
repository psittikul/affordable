jQuery(document).ready(function() {
	function close_accordion_section() {
		jQuery('#nav .accordion').removeClass('active');
		jQuery('.accordion .dropdown').slideUp(300).removeClass('open');
	}

	jQuery('.accordion-section-title').click(function(e) {
		// Grab current anchor value
		var currentAttrValue = jQuery(this).attr('href');

		if(jQuery(e.target).is('.active')) {
			close_accordion_section();
		}else {
			close_accordion_section();

			// Add active class to section title
			jQuery(this).addClass('active');
			// Open up the hidden content panel
			jQuery('.dropdown' + currentAttrValue).slideDown(300).addClass('open'); 
		}

		e.preventDefault();
	});
});