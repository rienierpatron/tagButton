tagButton v1.0 - Tagbond Reward Transfer Button

======================================================

Instructions of Using:

1. You must be registered first to tagbond.com before using this plugin.
2. Make sure that you have jquery script 1.8 or higher.
3. Include <script src="js/tagButton/tagButton.js"></script> on the head of your file.
4. Include the following codes:

	<script>
	    jQuery(document).ready( function($) {
			$('.tagButton').tag({
				id			: '', //required
				type		: '', //1 - user; 2 - community //required
				color		: '', //optional
				title		: '', //onhover title for your description of button - optional
			});
		});
    </script>

    whereas:

    id  - your tagbond ID that you want to use
    type - the type of your ID, 1 for user, and 2 for community
    color - color of text, optional
    title - text that will show when button is hovered, optional

=====================================================

