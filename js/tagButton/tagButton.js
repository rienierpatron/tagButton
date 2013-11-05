(function($) {

	$.fn.tag = function( options ) {

		var settings = $.extend({
			id			 : null,
			type       	 : null,
			color 		 : null,
			title		 : null,
			incomplete	 : function() { $('.tagButton').hide(); alert('Missing parameters'); $('body').html('<div class="danger">Please fill up required parameters for tagButton.</div>'); },
			error		 : function() { $('.tagButton').hide(); alert('Invalid parameter data'); $('body').html('<div class="danger">Wrong type given. Must be either 1 or 2.</div>'); }
		}, options);

		return this.each( function() {
			if ( settings.id) {
				$(this).html('<img src="tagbond.png" class="tagImage"><h3>'+settings.id+'</h3>');
			}else{
				settings.incomplete.call(this);
			}
			if(!settings.type){
				settings.incomplete.call(this);
			}else{
				if(settings.type < 1 || settings.type > 2){
					settings.error.call(this);
				}
			}
			if ( settings.color ) {
				$(this).css( 'color', settings.color);
			}else{
				$(this).css( 'color', 'red');
			}
			$(this).attr( 'href', "#" );
			if ( settings.title ) {
				$(this).css( 'color', settings.title);
			}else{
				$(this).attr( 'title', "Click here to transfer reward/wallet points" );
			}
			$(this).click(onClick);
		});


		function onClick(){
			var width = $( window ).width();
			var height = $( window ).height();
			window.open("https://tagbond.com/site/login?user="+settings.id+"&log=offsite&mode="+settings.type,'Tagbond',"toolbars=0, scrollbars=0, location=no, statusbars=0, menubars=0, resizable=0, width=450, height=435, left = "+((width/2)-150)+", top =0");			
		}

	};
}(jQuery));
