<h2>tagButton v1.0 - Tagbond Reward Transfer Button</h2>


<h4>Instructions of Using:</h4>

1. You must be registered first to tagbond.com before using this plugin.
2. Make sure that you have jquery script 1.8 or higher.
3. Include <script src="js/tagButton/tagButton.js"></script> on the head of your file.
4. Include the following codes on your script:

	    jQuery(document).ready( function($) {
			$('.tagButton').tag({
				id			: '', //required tagbond ID (user or community)
				type		: '', //1 - user; 2 - community //required
				color		: '', //optional
				title		: '', //onhover title for your description of button - optional
			});
		});

    whereas:

    id  - your tagbond ID that you want to use,
    type - the type of your ID (1 for user, and 2 for community),
    color - color of text(optional),
    title - text that will show when button is hovered(optional)

=====================================================

<h4>License</h4>

The MIT License (MIT)

Copyright (c) <year> <copyright holders>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
