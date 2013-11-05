(function($) {

	$.fn.tag = function( options ) {

		var settings = $.extend({
			id			 : null,
			type       	 : null,
			color 		 : null,
			incomplete	 : function() { $('.tagButton').hide(); alert('Missing parameters'); $('body').html('<div class="danger">Please fill up required parameters for tagButton!</div>'); }
		}, options);

		return this.each( function() {
			if ( settings.id ) {
				$(this).html('<img src="tagbond.png" class="tagImage"><h3>'+settings.id+'</h3>');
			}else{
				settings.incomplete.call(this);
			}
			if(!settings.type){
				settings.incomplete.call(this);
			}
			if ( settings.color ) {
				$(this).css( 'color', settings.color );
			}else{
				$(this).css( 'color', 'red');
			}
			$(this).attr( 'href', "#" );

			$(this).click(onClick);
		});


		function onClick(){
			var width = $( window ).width();
			var height = $( window ).height();
			window.open("http://localhost/tagbond/tagbond_website/site/login?user="+settings.id+"&log=offsite&mode="+settings.type,'Tagbond',"toolbars=0, scrollbars=0, location=no, statusbars=0, menubars=0, resizable=0, width=450, height=435, left = "+((width/2)-150)+", top =0");			
		}

	};
}(jQuery));
